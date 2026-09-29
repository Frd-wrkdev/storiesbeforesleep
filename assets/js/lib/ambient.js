/* Ambient sleep sound, synthesised entirely with the Web Audio API.
   No audio file ships with the site: the loop is built from a looping
   noise "rain" bed, a slow warm pad, and a breathing amplitude LFO.

   The graph is only constructed on the first play() call, because every
   browser refuses to start audio outside a user gesture. Pausing suspends
   the context instead of tearing the graph down, so resuming is instant
   and the loop never restarts from the beginning. */
(function (global) {
  'use strict';

  var CBT = global.CBT || (global.CBT = {});

  var AC = global.AudioContext || global.webkitAudioContext;

  var ctx = null;
  var master = null;
  var running = false;
  var volume = 0.35; // 0..1, mirrored into prefs by app.js

  /* ---------------- Graph ---------------- */

  function noiseBuffer(seconds) {
    var rate = ctx.sampleRate;
    var len = Math.floor(rate * seconds);
    var buf = ctx.createBuffer(1, len, rate);
    var data = buf.getChannelData(0);
    for (var i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    return buf;
  }

  function build() {
    ctx = new AC();

    master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    /* Everything upstream shares one breathing stage, so the whole bed
       swells together instead of pulsing per layer. */
    var breath = ctx.createGain();
    breath.gain.value = 0.78;
    breath.connect(master);

    var breathLfo = ctx.createOscillator();
    var breathDepth = ctx.createGain();
    breathLfo.type = 'sine';
    breathLfo.frequency.value = 0.07;  /* ~14s cycle */
    breathDepth.gain.value = 0.22;
    breathLfo.connect(breathDepth);
    breathDepth.connect(breath.gain);
    breathLfo.start();

    /* --- Rain bed: looping white noise through a slowly moving lowpass --- */
    var noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer(5);
    noise.loop = true;

    var rainFilter = ctx.createBiquadFilter();
    rainFilter.type = 'lowpass';
    rainFilter.frequency.value = 760;
    rainFilter.Q.value = 0.6;

    var rainLfo = ctx.createOscillator();
    var rainDepth = ctx.createGain();
    rainLfo.type = 'sine';
    rainLfo.frequency.value = 0.04;
    rainDepth.gain.value = 260;
    rainLfo.connect(rainDepth);
    rainDepth.connect(rainFilter.frequency);
    rainLfo.start();

    var rainGain = ctx.createGain();
    rainGain.gain.value = 0.42;

    noise.connect(rainFilter);
    rainFilter.connect(rainGain);
    rainGain.connect(breath);
    noise.start();

    /* --- Warm pad: four slow voices, gently lowpassed --- */
    var padFilter = ctx.createBiquadFilter();
    padFilter.type = 'lowpass';
    padFilter.frequency.value = 1200;
    padFilter.Q.value = 0.4;

    var padGain = ctx.createGain();
    padGain.gain.value = 0.16;

    var padLfo = ctx.createOscillator();
    var padDepth = ctx.createGain();
    padLfo.type = 'sine';
    padLfo.frequency.value = 0.055;
    padDepth.gain.value = 0.1;
    padLfo.connect(padDepth);
    padDepth.connect(padGain.gain);
    padLfo.start();

    padFilter.connect(padGain);
    padGain.connect(breath);

    /* A2, E3, A3, B3 - a suspended fourth-ish bed with no strong pull. */
    var freqs = [110, 164.81, 220, 246.94];
    for (var i = 0; i < freqs.length; i++) {
      var osc = ctx.createOscillator();
      var g = ctx.createGain();
      osc.type = i % 2 ? 'triangle' : 'sine';
      osc.frequency.value = freqs[i];
      osc.detune.value = (i - 1.5) * 4;
      g.gain.value = 0.3;
      osc.connect(g);
      g.connect(padFilter);
      osc.start();
    }
  }

  /* ---------------- Controls ---------------- */

  function applyVolume() {
    if (!running || !master || !ctx) return;
    try {
      master.gain.setTargetAtTime(volume, ctx.currentTime, 0.05);
    } catch (e) {
      master.gain.value = volume;
    }
  }

  function setVolume(v) {
    v = Number(v);
    if (isNaN(v)) return volume;
    volume = v < 0 ? 0 : v > 1 ? 1 : v;
    applyVolume();
    return volume;
  }

  function play() {
    if (!AC || running) return running;
    try {
      if (!ctx) build();
      if (ctx.state === 'suspended') ctx.resume();
      running = true;
      applyVolume();
      return true;
    } catch (e) {
      running = false;
      return false;
    }
  }

  function stop() {
    running = false;
    if (!ctx || !master) return false;
    try {
      master.gain.setTargetAtTime(0, ctx.currentTime, 0.08);
      /* Let the fade finish before suspending, and bail out if the
         listener started it again in the meantime. */
      global.setTimeout(function () {
        if (!running && ctx && ctx.state === 'running') ctx.suspend();
      }, 420);
      return true;
    } catch (e) {
      try { ctx.suspend(); } catch (e2) { /* ignore */ }
      return false;
    }
  }

  function toggle() {
    if (running) { stop(); return false; }
    return play();
  }

  CBT.ambient = {
    supported: function () { return !!AC; },
    isOn: function () { return running; },
    state: function () { return ctx ? ctx.state : 'none'; },
    volume: function () { return volume; },
    setVolume: setVolume,
    play: play,
    stop: stop,
    toggle: toggle
  };
})(typeof window !== 'undefined' ? window : this);
