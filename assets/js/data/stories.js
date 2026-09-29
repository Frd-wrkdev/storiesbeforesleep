/* ==================================================================
   Kumpulan cerita
   ------------------------------------------------------------------
   Dua jenis cerita hidup berdampingan di daftar ini:

   * Cerita tertulis (12) - paragraf penuh, 200 kata/menit.
   * Cerita video (type:'video') - hanya ada judul, ringkasan, dan
     tautan YouTube. Kategori ['video'] saja supaya tidak pernah
     bocor ke beranda, /cerita, pencarian, kartu pilihan, atau
     "cerita acak". Baca CBT.stories.written untuk koleksi tertulis.

   Setiap cerita:
     id         slug untuk URL hash (#/cerita/<id>)
     title      judul
     emoji      lambang kecil untuk daftar
     sprite     nama ilustrasi piksel di CBT.art
     accent     warna aksen kartu: lilac | sky | gold | rose | mint
     categories daftar id kategori
     excerpt    ringkasan 1-2 kalimat
     featured   true untuk kartu cerita pilihan
     body       paragraf-paragraf cerita
     type       'video' untuk cerita berbasis video
     video      ID YouTube
     channel    nama kanal, ditampilkan sebagai sumber
     duration   runtime "8:32" (kosongkan bila tidak tahu)

   Waktu baca dihitung otomatis dari jumlah kata (±200 kata/menit),
   jadi label "5 menit membaca" tidak pernah bohong.
   ================================================================== */
(function (global) {
  'use strict';

  var CBT = global.CBT || (global.CBT = {});

  var STORIES = [
    /* ------------------------------------------------------- 1 */
    {
      id: 'kelinci-tak-bisa-tidur',
      title: 'Kelinci yang Tak Bisa Tidur',
      emoji: '🐰',
      sprite: 'bunny',
      accent: 'lilac',
      categories: ['sebelum-tidur', 'lucu', 'hewan'],
      excerpt: 'Seekor kelinci kecil mencoba berbagai cara untuk menemukan kantuknya.',
      featured: true,
      body: [
        'Di sebuah bukit kecil yang ditumbuhi rumput setinggi lutut, hiduplah seekor kelinci bernama Belang. Bulunya putih dengan satu bintik cokelat di telinga kiri. Semua orang bilang Belang adalah kelinci paling ramah di seluruh lembah, dan mungkin juga yang paling sulit diajak tidur.',

        'Malam ini, seperti malam-malam sebelumnya, Belang berbaring di atas rerumputan yang lembut dan memejamkan matanya. Ia menghitung wortel. Satu, dua, tiga, sampai seratus. Matanya tetap terbuka lebar, menatap langit yang penuh bintang.',

        '"Pasti ada cara yang belum aku coba," gumam Belang.',

        'Cara pertama: memutar badan tiga kali di tempat tidur, persis seperti yang selalu dilakukan ibunya dulu. Sekali, dua kali, tiga kali. Kepala Belang jadi pusing, tetapi matanya masih saja melek.',

        'Cara kedua: bernyanyi lagu tidur. "Tidurlah, tidurlah, bulan sudah tinggi." Suara Belang memang merdu, tetapi lagu itu justru membuatnya ingin terus menyanyi sampai tenggorokannya mulai kering.',

        'Cara ketiga: menghitung domba yang melompati pagar. Satu domba, dua domba, tiga domba. Tetapi semua domba yang lewat tadi malah mengajak Belang bermain. Maka Belang berhenti menghitung, karena sekarang ia jadi lapar.',

        'Cara keempat: menutup kedua telinga dengan telapak kaki. Tetapi justru dari dalam, Belang bisa mendengar detak jantungnya sendiri yang berjalan terlalu cepat untuk ukuran malam yang tenang. Denyut itu seperti ketukan pintu yang tak kunjung dijawab.',

        'Cara kelima: membayangkan rumput yang bergoyang tertiup angin, sangat pelan, sangat monoton, sangat membosankan. Tetapi bayangan itu justru terlalu jelas. Belang jadi penasaran apakah rumput di luar benar-benar bergerak, lalu ia membuka matanya untuk memastikan. Rumputnya bergerak. Dan Belang kembali terjaga.',

        'Ia bangun, pergi ke dapur, dan makan sebatang wortel besar. Wortel itu renyah dan manis. Perutnya kenyang, tetapi matanya masih terjaga.',

        'Saat ia kembali, sang ibu masih duduk di ambang pintu kandang, merajut. "Sudah berapa cara malam ini?" tanyanya tanpa menoleh.',

        '"Lima," jawab Belang. "Semuanya gagal."',

        'Ibu Belang menarik kursi kecil di sampingnya. "Coba ceritakan, apa yang kau pikirkan tepat sebelum kau berbaring tadi?"',

        'Belang berpikir. "Aku berpikir: jangan lupa menghitung. Jangan lupa memejamkan mata. Jangan lupa tidur."',

        'Sang ibu tersenyum. "Nah, di situlah masalahnya. Kau begitu sibuk mengingatkan diri untuk tidur, sampai lupa bahwa tubuhmu sebenarnya sudah lelah sejak tadi sore."',

        'Belang membuka mulutnya untuk membantah, lalu menutupnya lagi. Karena ternyata ibunya benar. Kakinya memang terasa berat. Matanya memang terasa panas. Punggungnya memang terasa nyaman sekali di atas rerumputan itu.',

        'Ibu Belang mengelus kepalanya sekali, lalu kembali ke rajutannya. "Tidur tidak perlu dikejar, Nak. Ia datang sendiri, seperti tamu yang tahu jalan ke rumah kita."',

        'Belang kembali ke tempat tidur. Ia menarik selimut sampai ke dagu. Ia menutup telinga rapat-rapat. Ia berbaring telentang, lalu telungkup, lalu menyamping, lalu telentang lagi. Akhirnya ia duduk dan menyerah.',

        '"Mungkin aku bukan kelinci malam," kata Belang pada dirinya sendiri. "Mungkin aku kelinci pagi."',

        'Tiba-tiba dari kejauhan terdengar suara pelan. Sst. Sst. Belang menoleh. Di bawah pohon apel terdapat seekor landak kecil bernama Duri. Duri sedang menggelitik daun kering dengan ujung kakinya, membuat bunyi kecil yang ritmis.',

        '"Kau juga tidak bisa tidur?" tanya Belang.',

        'Duri mengangguk. "Sudah tiga malam. Aku sudah mencoba berbaring di perut batu yang hangat. Aku sudah mencoba mendengarkan air sungai. Tetapi pikiranku terus berlari."',

        'Belang duduk di sampingnya. Mereka berdua tidak bicara lagi. Mereka hanya duduk, memandang bukit, memandang bulan, memandang awan yang berjalan lambat.',

        'Duri mulai berdengung pelan, seperti lagu tanpa kata. Suara itu sangat lambat, sangat tenang, dan sangat membosankan. Dalam arti yang paling enak.',

        'Belang merasa kelopak matanya jadi berat. Sekali, dua kali, ia berkedip. Rumput di bukit terasa semakin lembut. Angin malam terasa semakin hangat.',

        '"Duri," bisik Belang, "aku mulai ngantuk."',

        '"Bagus," jawab Duri tanpa berhenti berdengung. "Aku juga."',

        'Malam itu, dua sahabat tertidur di bawah pohon apel. Belang tidur dengan posisi telentang dan mulut sedikit terbuka, sementara Duri menggulung dirinya menjadi bola kecil di samping telinga kelinci.',

        'Keesokan paginya, ketika matahari baru muncul di balik bukit, Belang terbangun dengan satu pertanyaan di kepalanya. Ia tidak ingat kapan persisnya ia tertidur. Ia hanya ingat bahwa perutnya kenyang, rumputnya lembut, dan ada teman di sampingnya.',

        'Sejak malam itu, setiap kali Belang tidak bisa tidur, ia tidak lagi menghitung wortel atau domba. Ia cukup berjalan ke bawah pohon apel, duduk di samping Duri, dan mendengarkan suara pelan yang membosankan itu.',

        'Dan setiap malam juga, tidak pernah lebih dari sepuluh menit kemudian, Belang menemukan kantuknya kembali.'
      ]
    },

    /* ------------------------------------------------------- 2 */
    {
      id: 'beruang-dan-bintang-jatuh',
      title: 'Beruang dan Bintang Jatuh',
      emoji: '🐻',
      sprite: 'bear',
      accent: 'gold',
      categories: ['fantasi', 'menghangatkan', 'hewan'],
      excerpt: 'Seekor beruang menangkap bintang yang jatuh dan mengantarnya pulang.',
      featured: false,
      body: [
        'Barnabas adalah beruang paling besar di hutan utara. Kakinya tebal, bulunya cokelat dan kasar, dan suaranya begitu keras sampai burung-burung selalu terbang menjauh ketika ia bersin.',

        'Tetapi Barnabas adalah beruang yang paling takut pada gelap. Ia tidak pernah mengakuinya kepada siapa pun, kecuali kepada dirinya sendiri, setiap malam, di dalam gua.',

        'Suatu malam, ketika ia sedang duduk di tepi gua dan memandang langit, sesuatu terjadi. Sebuah garis cahaya keemasan membelah langit dari timur ke barat, lalu jatuh tepat di lembah di bawahnya.',

        'Barnabas berdiri. Jantungnya berdebar. "Bintang," bisiknya. "Bintang jatuh."',

        'Ia berlari menuruni bukit. Semak-semak menyapu kakinya, tetapi Barnabas tidak peduli. Ia harus menemukan bintang itu sebelum padam.',

        'Di tengah jalan, ia berhenti sejenak untuk mengatur napas. Hutan di sekelilingnya sangat gelap, dan untuk sesaat, ketakutan lama itu muncul lagi. Bulu di punggungnya berdiri. Telinganya menegak.',

        '"Ada yang jatuh dari langit," gumam Barnabas pada dirinya sendiri. "Dan hanya aku yang melihatnya."',

        'Kalimat itu ternyata cukup untuk membuatnya melangkah lagi. Karena Barnabas selalu begitu: ia tidak pernah benar-benar kehilangan rasa takut, ia hanya memilih untuk berjalan sambil tetap takut.',

        'Sungai kecil menghadangnya. Airnya dingin dan deras karena hujan sore tadi. Barnabas menyeberang dengan langkah panjang, air setinggi perutnya, dan tangannya diangkat tinggi supaya bintang itu tidak kehujanan.',

        'Saat keluar dari air, ia berhenti. Di kejauhan, seekor burung hantu bertengger di dahan rendah.',

        '"Kau berlari seperti orang kehilangan sesuatu," kata burung hantu itu.',

        '"Bukan seperti orang kehilangan," jawab Barnabas. "Melainkan seperti orang mengejar."',

        'Burung hantu itu menoleh ke arah lembah. "Hati-hati. Benda yang jatuh dari langit kadang membawa terlalu banyak panas."',

        '"Aku tidak takut panas," kata Barnabas, dan kali ini ia benar-benar tidak berbohong.',

        'Ia berlari lagi. Rumput basah menyapu perutnya. Kupu-kupu malam yang salah bangun beterbangan di sekelilingnya, berkelip-kelip seperti abu yang hidup.',

        'Di sebuah lubang kecil yang masih mengepul, Barnabas menemukannya. Bintang sekepalan tangan, berwarna kuning pucat, bergetar pelan seperti jantung yang kelelahan.',

        '"Halo," kata Barnabas dengan suara serendah yang bisa ia buat. Sebenarnya suaranya tetap saja keras.',

        'Bintang itu berkedip. "Aku jatuh," katanya dengan suara tipis. "Aku tidak tahu bagaimana caranya kembali."',

        'Barnabas menggali kedua telapak tangannya, membentuk semangkuk dari bulunya, dan meletakkan bintang itu di dalamnya. Bintang itu hangat. Sangat hangat, seperti secangkir susu yang baru dimasak.',

        '"Aku akan antar kau pulang," kata Barnabas.',

        '"Ke mana?" tanya bintang itu.',

        'Barnabas menunjuk ke atas. "Ke sana."',

        'Maka berangkatlah beruang paling besar di hutan utara, berjalan memikul bintang jatuh di dalam genggamannya. Ia melewati sungai yang dangkal, melewati padang rumput yang basah oleh embun, dan melewati hutan yang gelap.',

        'Saat melewati bagian paling gelap dari hutan, Barnabas merasa takut. Bulu-bulu di punggungnya berdiri. Matanya tidak bisa melihat apa-apa selain cahaya kecil di tangannya.',

        'Lalu ia menyadari sesuatu. Selama ia memegang bintang itu, hutan tidak lagi gelap. Cahaya kuning menyinari setiap batu, setiap akar, setiap tetes embun di daun.',

        '"Kau membuat gelap terasa lebih ramah," kata Barnabas.',

        '"Kau membuat aku tetap hidup," jawab bintang itu.',

        'Mereka berjalan bersama sampai tiba di puncak gunung tertinggi, tempat langit terasa paling dekat. Dari sana, Barnabas bisa melihat rumah-rumah bintang yang lain, berbaris rapi seperti lampu-lampu kecil di kejauhan.',

        'Barnabas mengangkat kedua tangannya setinggi mungkin. "Naiklah," katanya.',

        'Bintang itu berkedip sekali, dua kali, lalu melayang keluar dari genggaman beruang itu. Perlahan-lahan naik, semakin tinggi, semakin kecil, sampai akhirnya ia bergabung dengan yang lain di langit.',

        'Saat bintang itu melayang, ia meninggalkan jejak cahaya tipis yang bertahan beberapa detik sebelum memudar. Jejak itu membentuk garis panjang dari tangan Barnabas menuju langit, seperti tali emas yang mengikat bumi dan langit.',

        'Barnabas berdiri cukup lama dengan kedua tangannya masih terangkat, sampai lengannya pegal, karena ia tidak yakin apakah ia harus segera menurunkannya.',

        'Barnabas menatap ke atas untuk waktu yang lama. Angin gunung menyisir bulunya. Ia tidak merasa takut pada gelap malam itu.',

        'Ketika akhirnya ia berbalik untuk turun, ia melihat bahwa lembah di bawahnya tidak lagi menyeramkan. Ada sungai yang berkilau, ada rumah-rumah hewan yang lampunya baru padam, dan ada jalan setapak yang membawanya pulang.',

        'Ternyata gelap tidak pernah menjadi ramah sendirian. Seseorang harus membawa cahaya ke dalamnya lebih dulu, dan malam itu, cahayanya datang dari seekor bintang yang salah jatuh.',

        'Saat turun kembali ke gua, ia berhenti sejenak. "Hei," panggilnya ke langit. "Terima kasih sudah menemaniku melewati hutan."',

        'Dari kejauhan, satu bintang berkedip dua kali.',

        'Barnabas tersenyum, masuk ke dalam gua, dan tidur lebih nyenyak daripada malam-malam sebelumnya.'
      ]
    },

    /* ------------------------------------------------------- 3 */
    {
      id: 'kucing-yang-ingin-ke-bulan',
      title: 'Kucing yang Ingin ke Bulan',
      emoji: '🐱',
      sprite: 'cat',
      accent: 'sky',
      categories: ['petualangan', 'lucu', 'hewan'],
      excerpt: 'Seekor kucing membangun roket dari kotak kardus untuk mencapai bulan.',
      featured: false,
      body: [
        'Kucing bernama Mio tidak pernah tidur di kasur. Mio tidur di atas lemari, di balik jendela, di dalam kotak kardus bekas sepatu, dan sekali juga di atas kulkas. Tetapi tempat yang paling ia sukai adalah paling tinggi: ujung genteng rumah.',

        'Dari sana, Mio bisa melihat bulan. Dan setiap malam, Mio berpikir hal yang sama.',

        '"Aku ingin ke sana."',

        'Kucing lain hanya tertawa. "Kucing tidak bisa ke bulan," kata mereka. "Kucing tidak punya roket."',

        '"Belum," jawab Mio.',

        'Keesokan harinya, Mio mulai bekerja. Ia menemukan tiga kotak kardus bekas di belakang toko barang bekas. Kotak pertama jadi badan roket. Kotak kedua jadi sayap. Kotak ketiga, yang paling besar, jadi ruang kendali.',

        'Untuk jendela, Mio memotong lingkaran di kulit karton dan menempelkannya dengan getah pohon. Untuk lampu kendali, ia memakai kancing-kancing dari laci ibu pemilik toko. Kancing merah jadi tombol berbahaya, kancing biru jadi tombol tidur, dan kancing kuning, yang paling banyak, jadi tombol untuk memanaskan teh.',

        'Roket itu berdiri di halaman belakang. Tingginya dua kali tinggi kucing, dan miring sedikit ke kiri.',

        'Malamnya, Mio memanjat masuk melalui pintu belakang roket. Ia duduk di kursi yang ternyata adalah bantal sofa lama. Ia memasang sabuk pengaman yang ternyata adalah tali jemuran.',

        '"Sistem siap," kata Mio pada dirinya sendiri.',

        'Ia menekan kancing kuning. Tidak terjadi apa-apa. Ia menekan kancing merah. Juga tidak. Ia menekan kancing biru, dan roket itu bergetar hebat karena angin malam lewat tepat di belakangnya.',

        '"Penerbangan dimulai," kata Mio.',

        'Dan dalam imajinasinya, roket itu meluncur. Kardus-kardus itu berubah menjadi logam mengkilap. Genteng berubah menjadi landasan pacu. Halaman belakang berubah menjadi bumi yang mengecil di bawahnya.',

        'Roket itu menembus awan. Mio melewati pita-pita awan putih yang lembut seperti kapuk. Ia melewati lapisan ruang angkasa yang dingin, di mana bintang-bintang berkedip sangat cepat.',

        'Lalu tibalah Mio di bulan.',

        'Bulan itu ternyata lebih besar dari yang ia bayangkan, dan lebih pucat, dan jauh lebih berdebu. Mio melangkah keluar dari roketnya. Pasir bulan terasa dingin di bawah kakinya yang empuk.',

        'Ia berdiri cukup lama untuk membiarkan matanya menyesuaikan. Langit di sekelilingnya hitam pekat dan penuh bintang yang tidak berkedip, karena di bulan tidak ada angin yang menggoyang cahaya.',

        'Jauh di belakangnya, sebuah bola biru dan putih melayang diam di kegelapan. Mio menyadari bahwa bola itu adalah seluruh tempat ia pernah tinggal: padang rumput, toko barang bekas, genteng tempat ia tidur, dan kucing-kucing yang mengejeknya. Semuanya muat di dalam satu bola.',

        '"Ternyata kecil sekali," bisik Mio.',

        'Ia berlari beberapa langkah. Beratnya berbeda. Setiap lompatan membawanya jauh lebih tinggi dari yang ia sangka, seolah kakinya sedang bercanda dengannya.',

        'Saat mendarat, pasir bulan memercik seperti debu emas. Mio tertawa, dan suaranya sendiri terdengar aneh di sana, pendek dan kering, karena tidak ada udara yang membawanya jauh.',

        'Di kejauhan, sebuah lubang besar bersinar lembut dengan cahaya kebiruan.',

        'Di sana, seekor kelinci bulan sedang duduk sendirian.',

        '"Kau datang juga," kata kelinci itu, seolah-olah ia sudah menunggu.',

        '"Kau tahu aku akan datang?" tanya Mio.',

        '"Setiap kucing yang memandang bulan ingin datang," jawab kelinci itu. "Kau yang pertama benar-benar mencobanya."',

        'Mereka duduk bersama di tepi kawah. Kelinci bulan menceritakan bagaimana ia mengurus cahaya setiap malam: mengecatnya ulang supaya tetap terang, menyapu debu yang menempel, dan meniup awan yang terlalu tebal supaya bulan tidak tertutup.',

        '"Pekerjaan yang berat," kata Mio.',

        '"Pekerjaan yang tenang," jawab kelinci itu. "Aku suka tenang."',

        'Mio tinggal selama yang ia bisa. Ia berlari di atas kawah, ia melompati batu bulan, dan ia tidur sebentar di atas bantal awan yang kebetulan lewat.',

        'Lalu waktunya pulang. Mio kembali ke roket kardusnya, menekan kancing kuning, dan terbang pulang.',

        'Saat ia mendarat di halaman belakang, matahari baru saja terbit. Roket kardusnya masih berdiri, miring ke kiri, penuh embun.',

        'Kucing lain datang dan bertanya ke mana saja Mio semalaman.',

        '"Ke bulan," jawab Mio.',

        'Mereka tertawa. Tetapi kali ini, Mio hanya tersenyum. Ia tahu apa yang ia tahu, dan bulan tahu juga.',

        'Malam itu, Mio berbaring di atas genteng seperti biasa. Angin malam menyisir telinganya, dan rumput di halaman bergerak pelan tanpa suara.',

        'Yang berubah bukanlah dunia di sekeliling Mio. Yang berubah adalah kenyataan bahwa sekarang Mio sudah pernah mencoba sesuatu yang semua orang bilang mustahil, dan itu sudah cukup untuk membuat malam terasa lebih luas.',

        'Sejak itu, setiap kali Mio tidur di ujung genteng, bulan selalu berkedip dua kali saat menatapnya.'
      ]
    },

    /* ------------------------------------------------------- 4 */
    {
      id: 'rubah-dan-toko-es-krim-ajaib',
      title: 'Rubah dan Toko Es Krim Ajaib',
      emoji: '🦊',
      sprite: 'fox',
      accent: 'rose',
      categories: ['lucu', 'fantasi', 'hewan'],
      excerpt: 'Sebuah toko es krim hanya muncul bagi mereka yang benar-benar menginginkannya.',
      featured: false,
      body: [
        'Rubah bernama Kimo punya satu kelemahan yang tidak bisa ia sembunyikan: ia suka es krim lebih dari segalanya. Es krim cokelat, es krim vanila, es krim stroberi, es krim yang rasanya tidak jelas tetapi warnanya cantik. Semua.',

        'Masalahnya, di hutan tempat Kimo tinggal, tidak ada toko es krim.',

        'Suatu sore, saat Kimo berjalan pulang melewati lorong pohon ek yang paling tua, ia mencium sesuatu. Bau manis, dingin, sedikit vanila.',

        'Kimo berhenti. Ia mengangkat hidungnya. Bau itu datang dari arah yang tidak pernah ia lihat sebelumnya.',

        'Di ujung lorong, di tempat yang kemarin hanya ada semak belukar, berdiri sebuah toko kecil. Catnya biru muda. Pintunya kayu. Di atasnya tertulis dengan huruf melengkung: TOKO ES KIM AJAIB. BUKA HANYA UNTUK YANG BENAR-BENAR INGIN.',

        'Kimo menelan ludah. "Aku benar-benar ingin," bisiknya.',

        'Ia mendorong pintu. Lonceng kecil berbunyi. Di dalam, rak-rak es krim berbaris rapi sampai langit-langit. Setiap sudut punya rasa yang berbeda, dan beberapa rasa tidak punya nama.',

        'Di balik meja berdiri seekor kucing tua berbulu putih, memakai kacamata bulat dan celemek hijau.',

        '"Rasa apa yang kau cari?" tanya kucing itu.',

        '"Cokelat," jawab Kimo, lalu berhenti. "Tidak. Vanila. Tidak juga. Yang manis, tetapi tidak terlalu manis, dan yang membuat orang merasa seperti duduk di tempat yang aman."',

        'Kucing tua itu tersenyum. "Itu bukan rasa. Itu perasaan."',

        'Ia membuka laci paling bawah dan mengeluarkan sebuah wadah kecil. Isinya es krim berwarna abu-abu keunguan, dengan bintik-bintik kecil yang berkedip.',

        '"Es krim rasa malam yang tenang," kata kucing itu. "Dibuat dari bulan, sedikit hujan, dan tiga sendok kesabaran."',

        'Kimo mencoba satu sendok. Rasanya... seperti kembali ke rumah setelah perjalanan yang panjang. Seperti selimut yang sudah dipanaskan. Seperti suara seseorang yang membacakan cerita dengan pelan.',

        'Mata Kimo basah. "Ini enak sekali."',

        '"Bagus," kata kucing tua itu. "Tetapi ada aturannya. Kau hanya bisa makan di sini. Wadahnya tidak boleh dibawa keluar."',

        'Maka duduklah Kimo di kursi kayu kecil dekat jendela, makan es krimnya perlahan-lahan, sementara di luar hutan mulai gelap.',

        'Dari tempat duduknya, Kimo bisa melihat rak-rak di sekeliling. Ada satu wadah berwarna hijau tua yang bergerak pelan di dalamnya, seperti sedang bernapas. Ada wadah lain yang tidak berisi es krim sama sekali, melainkan debu bintang yang berputar tanpa henti.',

        '"Rasa apa itu?" tanya Kimo sambil menunjuk debu bintang.',

        '"Itu rasa untuk orang yang sudah tidak tahu lagi mau jadi apa," kata kucing tua itu. "Setiap kali mereka makan, mereka jadi sedikit lebih tahu."',

        '"Apakah laris?"',

        '"Tidak pernah. Karena orang yang benar-benar kehilangan arah jarang mau mengakuinya."',

        'Kimo menunduk ke es krimnya. Ia memikirkan dirinya sendiri, yang selama ini tahu persis apa yang ia inginkan setiap hari, tetapi tidak pernah tahu apa yang sebenarnya ia butuhkan.',

        'Kucing tua itu menambahkan sedikit air ke teko, lalu menuangkannya ke dalam cangkir kecil di depan Kimo. "Minumlah. Es krim terbaik pun terasa lebih enak kalau ada yang menemani."',

        'Kimo menyeruput teh itu. Hangat, sedikit pahit, dan di ujungnya ada rasa jeruk yang tidak ia kenal.',

        '"Terima kasih," kata Kimo.',

        '"Jangan berterima kasih pada aku," jawab kucing tua itu. "Berterima kasihlah pada dirimu sendiri yang mau mengakui apa yang kau inginkan dengan jujur tadi di depan pintu."',

        'Kimo berpikir sejenak. Selama ini ia selalu berpikir bahwa keinginan itu sesuatu yang memalukan, sesuatu yang harus disembunyikan atau dikejar sampai habis. Ternyata ada jalan tengah: mengakuinya, menikmatinya secukupnya, lalu berhenti.',

        'Saat ia selesai, kucing tua itu bertanya: "Kau ingin lagi?"',

        'Kimo hampir mengatakan ya. Tatapannya hampir berpindah ke rak es krim cokelat. Tapi kemudian ia berpikir: kalau aku selalu ingin lagi, aku tidak akan pernah merasa cukup.',

        '"Tidak," kata Kimo. "Terima kasih. Sudah pas."',

        'Kucing tua itu tertawa lepas. "Nah, sekarang kau benar-benar layak datang ke sini."',

        'Saat Kimo keluar, toko itu sudah tidak ada lagi. Di tempatnya hanya ada semak belukar, seperti biasa.',

        'Kimo berjalan pulang. Ia tidak membawa es krim. Tetapi ia membawa sesuatu yang lain: rasa cukup, yang ternyata lebih manis daripada es krim mana pun.',

        'Keesokan sore, Kimo melewati lorong pohon ek lagi. Tidak ada apa-apa di sana. Ia tersenyum dan terus berjalan.',

        'Karena Kimo tahu, toko seperti itu tidak akan muncul dua kali untuk orang yang terus mencarinya. Tetapi ia akan muncul lagi, tepat pada waktunya, untuk orang yang sudah cukup.',

        'Dan Kimo juga tahu satu hal lagi: es krim yang paling enak bukan yang paling banyak, melainkan yang diakhiri dengan perasaan bahwa tidak ada yang kurang.'
      ]
    },

    /* ------------------------------------------------------- 5 */
    {
      id: 'katak-yang-takut-gelap',
      title: 'Katak yang Takut Gelap',
      emoji: '🐸',
      sprite: 'frog',
      accent: 'mint',
      categories: ['sebelum-tidur', 'menghangatkan', 'hewan'],
      excerpt: 'Seekor katak belajar bahwa gelap tidak selamanya menakutkan.',
      featured: false,
      body: [
        'Di tepi kolam yang tenang, hiduplah seekor katak kecil bernama Rico. Rico sangat pandai melompat, sangat pandai menangkap nyamuk, dan sangat pandai bersuara keras. Tetapi Rico sangat, sangat takut pada gelap.',

        'Setiap kali matahari terbenam, Rico bersembunyi di bawah daun teratai paling lebar. Ia menutup kedua matanya rapat-rapat dan menunggu pagi.',

        '"Kenapa kau takut?" tanya ibunya suatu ketika.',

        '"Karena aku tidak bisa melihat," jawab Rico.',

        '"Kau tidak bisa melihat siang hari juga kalau kau memejamkan mata," kata ibunya lembut. "Tetapi kau tetap tidak takut."',

        'Rico tidak menjawab. Ia hanya mengecupkan bibirnya dan bersembunyi lebih dalam.',

        'Ia tidak marah pada ibunya, karena ibunya memang tidak salah. Ia juga tidak marah pada dirinya sendiri, karena takut itu bukan kesalahan. Yang ia tidak mengerti adalah mengapa semua orang lain bisa, sedangkan ia tidak bisa.',

        'Suatu malam, hujan turun. Air kolam menjadi beriak, dan daun teratai tempat Rico bersembunyi ikut terangkat. Rico terpaksa keluar.',

        'Dan di situlah ia melihatnya untuk pertama kalinya.',

        'Langit. Bukan langit siang yang biru dan terang, melainkan langit malam yang gelap dan penuh lubang-lubang cahaya. Ribuan bintang. Bulan sepertipiring besar. Dan dari ujung kolam, jangkrik mulai bernyanyi.',

        'Rico membuka matanya. Untuk pertama kalinya, ia tidak langsung menutupnya lagi.',

        '"Gelap," gumamnya, "bukan ketiadaan cahaya. Gelap adalah waktu ketika cahaya yang sedikit menjadi berarti."',

        'Ia tidak tahu dari mana kalimat itu datang. Tetapi terdengar benar, jadi ia menyimpannya.',

        'Rico melompat ke batu paling tinggi di tepi kolam. Dari sana ia bisa melihat seluruh danau. Refleksi bulan bergerak di atas air seperti perak yang hidup.',

        'Untuk pertama kalinya, Rico tidak buru-buru bersembunyi. Ia membiarkan matanya terbuka lebar dan menunggu.',

        'Sepuluh menit pertama memang gelap. Rico hanya bisa melihat garis-garis samar dan bayangan yang tidak berbentuk. Tetapi perlahan-lahan, mata mulai bekerja. Garis-garis itu berubah menjadi batang rumput. Bayangan yang tidak berbentuk berubah menjadi batu dan akar pohon.',

        '"Gelap itu bukan buta," gumam Rico. "Gelap itu hanya butuh waktu."',

        'Ia menghitung bunyi yang ia dengar: satu jangkrik di timur, dua katak tetangga di selatan, tiga tetes air yang jatuh dari daun, dan seekor burung hantu yang sedang berpindah dahan.',

        'Semua itu tidak pernah ia dengar sebelumnya, karena selama ini ia terlalu sibuk menutup telinga.',

        'Lalu ia melihat sesuatu yang lain: seekor berang-berang kecil sedang berenang, seekor burung hantu bertengger di dahan, dan dua kunang-kunang berkelip di antara rumput.',

        'Semuanya baru terlihat karena gelap.',

        '"Halo!" panggil Rico.',

        'Burung hantu itu menoleh. "Kau katak yang selalu bersembunyi, ya?"',

        'Rico tersipu. "Ya."',

        '"Sayang sekali," kata burung hantu itu. "Malam ini sangat indah. Kau kehilangan banyak hal selama ini."',

        'Rico tidak marah. Ia merasa sedih sedikit, tetapi lebih dari itu, ia merasa penasaran.',

        'Malam-malam berikutnya, Rico keluar dari persembunyiannya. Ia duduk di batu yang sama. Ia belajar mengenali suara: mana jangkrik, mana katak lain, mana angin yang lewat di atas air.',

        'Ia belajar bahwa matanya butuh waktu untuk menyesuaikan. Sepuluh menit pertama selalu gelap. Setelah itu, ia bisa melihat jalan di sekitar kolam, bisa melihat batang-batang rumput, bahkan bisa melihat wajahnya sendiri di air.',

        'Ia belajar hal-hal yang tidak pernah ia tahu. Bahwa bunga teratai menutup pada malam hari dan membuka lagi saat fajar. Bahwa ikan kecil keluar berenang hanya ketika bulan bersinar. Bahwa kolam yang sama terlihat sama sekali berbeda pada pukul sepuluh malam dibanding pukul sepuluh pagi.',

        'Dan ia belajar bahwa teman-temannya tidak pernah mengejeknya karena takut gelap. Mereka hanya menunggu, sabar, sampai Rico siap keluar.',

        '"Gelap itu hanya perlu waktu," kata Rico pada dirinya sendiri.',

        'Suatu malam, ketika bulan tertutup awan dan kolam benar-benar gelap, Rico merasa takut lagi. Dadanya sesak. Kakinya gemetar.',

        'Ia berpikir: tidak apa-apa merasa takut. Yang tidak baik adalah bersembunyi setiap kali takut.',

        'Karena bersembunyi tidak pernah menghilangkan rasa takut. Bersembunyi hanya menundanya sampai malam berikutnya, dan malam berikutnya selalu datang, membawa kegelapan yang sama persis.',

        'Satu-satunya cara agar malam berikutnya terasa lebih ringan adalah melewatinya sekali, tanpa bersembunyi, walaupun kakinya gemetar sepanjang jalan.',

        'Jadi Rico tetap duduk. Ia bernapas perlahan. Satu, dua, tiga. Lima, enam, tujuh. Sepuluh.',

        'Dan perlahan-lahan, rasa takut itu menjauh, persis seperti awan yang menjauh dari bulan.',

        'Keesokan paginya, ibunya bertanya apa yang berubah.',

        '"Aku masih takut," kata Rico. "Tetapi sekarang aku takut sambil tetap melihat."',

        'Ibu Rico tersenyum. "Itu bukan lagi ketakutan, Nak. Itu keberanian."',

        'Sejak malam itu, Rico menjadi katak pertama di kolam yang menyambut setiap malam dengan duduk di atas batu, bukan di bawah daun.',
      ]
    },

    /* ------------------------------------------------------- 6 */
    {
      id: 'domba-yang-kehilangan-mimpi',
      title: 'Domba yang Kehilangan Mimpi',
      emoji: '🐑',
      sprite: 'sheep',
      accent: 'lilac',
      categories: ['fantasi', 'menghangatkan', 'hewan'],
      excerpt: 'Seekor domba yang lupa cara bermimpi mencari kembali mimpinya yang hilang.',
      featured: false,
      body: [
        'Di padang rumput di ujung dunia, para domba tidur sambil bermimpi. Mimpi mereka dikumpulkan setiap pagi oleh burung-burung kecil, lalu diterbangkan ke awan untuk dijadikan kabut.',

        'Kabut itulah yang membuat malam terasa lembut.',

        'Tetapi ada satu domba yang tidak bermimpi lagi. Namanya Woll. Woll bangun setiap pagi dengan kepala yang kosong dan perasaan yang datar, seperti kertas yang belum disentuh pena.',

        'Awalnya Woll tidak peduli. Tetapi ketika teman-temannya berbicara tentang mimpi mereka semalam, Woll hanya bisa diam.',

        '"Aku bermimpi tentang laut," kata Domba Bertotol.',

        '"Aku bermimpi terbang," kata Domba Gembul.',

        '"Kau, Woll? Kau bermimpi apa?"',

        'Woll menggeleng. "Aku tidak ingat." Sebenarnya ia tidak bermimpi sama sekali, tetapi itu terdengar lebih menyedihkan.',

        'Woll memutuskan mencari mimpinya. Ia bertanya pada Kakek Domba yang paling tua di padang.',

        '"Mimpi tidak hilang begitu saja," kata Kakek Domba. "Ia hanya tersembunyi. Mimpi suka bersembunyi di tempat yang paling tidak kau sangka."',

        'Maka Woll mulai mencari. Ia mencari di bawah tempat tidurnya. Tidak ada. Ia mencari di dalam belalainya. Tidak ada. Ia mencari di rumput yang paling tinggi, menghitung setiap helai sampai malam tiba.',

        'Keesokan harinya, Woll bertanya pada Elang yang melintas.',

        '"Kau melihat mimpiku?" tanya Woll.',

        'Elang mengangkat bahunya yang kuat. "Mimpi tidak terlihat dari udara. Mimpi terasa dari dalam."',

        '"Lalu dari mana aku harus mulai?"',

        '"Dari sesuatu yang kau rindukan."',

        'Woll duduk sendirian di bukit. Ia memikirkan apa yang ia rindukan. Rumah lama? Tidak. Rumput favoritnya? Tidak. Teman-temannya? Mereka masih di sini.',

        'Lalu ia teringat sesuatu. Woll teringat akan bau hujan pertama yang ia cium waktu masih anak-anak. Bau tanah yang basah, udara yang dingin, dan perasaan bahwa dunia sedang membersihkan dirinya.',

        'Ia rindu pada perasaan itu.',

        'Woll mencoba mengingat lebih banyak. Ia menutup matanya erat-erat dan menarik-narik gambar dari dasar kepalanya, seperti menarik tali dari dalam sumur. Tetapi yang muncul hanya suara detak jantungnya sendiri dan angin di atas rumput.',

        'Maka Woll berhenti memaksa. Ia membuka matanya dan membiarkan pikirannya berjalan sendiri, tanpa arah, tanpa tujuan, seperti kambing yang dilepas di padang.',

        'Pikiran itu melayang tentang rumah, tentang rumput, tentang teman-teman. Lalu tiba-tiba berhenti di satu tempat yang tidak pernah ia duga.',

        'Ia berhenti di hari ketika ibunya masih ada.',

        'Woll tidak pernah sengaja berpikir tentang itu, karena membicarakan ibunya terasa seperti membuka laci yang lama sekali tidak dibuka. Tetapi sekarang, di bukit ini, dengan langit yang terbuka lebar, laci itu terbuka sendiri.',

        'Woll ingat ibunya membawa ia ke sungai. Woll ingat ibunya berkata, "Air tidak pernah takut menjadi basah, Nak. Begitu juga kita."',

        'Woll tidak tahu kapan kalimat itu hilang dari kepalanya. Yang ia tahu, sekarang kalimat itu kembali, dan bersamanya, ada sesuatu yang hangat dan berat di dadanya.',

        'Dan begitu ia mengakuinya, sesuatu terjadi. Di dadanya, yang tadinya kosong, tiba-tiba ada cahaya kecil.',

        'Cahaya itu membesar. Perlahan-lahan, bentuk muncul: sebuah padang, tetapi lebih luas dari padang Woll, dengan sungai di tengahnya dan langit yang sangat tinggi.',

        'Woll tertidur tepat di situ, di atas bukit, sambil memeluk mimpinya yang baru kembali.',

        'Dalam mimpinya, Woll berjalan menyusuri sungai. Airnya jernih dan dangkal. Di dasarnya terdapat batu-batu berwarna-warni, dan setiap kali Woll menginjaknya, batu itu berbunyi seperti lonceng.',

        'Sampai di ujung sungai, Woll menemukan sebuah pintu kecil yang berdiri sendiri di tengah padang tanpa tembok.',

        'Di pintu itu tertulis: "Mimpi tentang hal yang belum kau coba."',

        'Woll mendorong pintu itu. Di baliknya ada jalan setapak yang berkelok ke arah yang tidak pernah ia kenal.',

        'Woll tersenyum. Ia tahu persis ke mana jalan itu akan membawanya, karena untuk pertama kalinya, ia tidak tahu apa yang ada di ujungnya.',

        'Di sepanjang jalan setapak itu, Woll melihat hal-hal yang belum pernah ia lihat meskipun sudah bertahun-tahun tinggal di padang yang sama: seekor katak yang sedang membaca, awan yang terjebak di antara dua pohon, dan sebuah danau yang memantulkan langit versi kedua.',

        'Semua itu ada di sana sejak dulu. Yang berubah bukan dunianya, melainkan mata yang melihatnya.',

        'Pagi datang. Woll terbangun dengan cahaya kecil yang masih hangat di dadanya.',

        'Saat teman-temannya bertanya, Woll hanya berkata: "Aku bermimpi tentang sebuah pintu."',

        '"Pintu apa?" tanya Gembul.',

        '"Pintu yang belum pernah kubuka."',

        'Dan sejak itu, Woll tidak pernah kehilangan mimpinya lagi, karena ia akhirnya tahu: mimpi tidak disimpan di tempat tidur. Mimpi disimpan di dalam keinginan untuk mencoba sesuatu yang baru.',
      ]
    },

    /* ------------------------------------------------------- 7 */
    {
      id: 'kura-kura-dan-sepatu-terbang',
      title: 'Kura-Kura dan Sepatu Terbang',
      emoji: '🐢',
      sprite: 'turtle',
      accent: 'sky',
      categories: ['petualangan', 'lucu', 'hewan'],
      excerpt: 'Sepatu tua yang bisa terbang membawa kura-kura menyeberangi awan.',
      featured: false,
      body: [
        'Kura-kura bernama Karto tidak pernah bisa berjalan cepat. Teman-temannya sudah sampai di ujung sungai ketika Karto baru melangkah tiga langkah. Teman-temannya sudah selesai makan ketika Karto baru mengunyah suapan pertama.',

        'Karto tidak keberatan. Yang Karto keberatan adalah ketika semua orang menunggu.',

        'Suatu pagi, saat Karto sedang berjalan sendirian di dekat tumpukan barang bekas milik burung gagak, ia melihat sesuatu: sepasang sepatu tua berwarna merah, dengan tali yang masih terpasang.',

        'Sepatu itu terlalu besar untuk burung gagak, tetapi pas untuk kaki Karto.',

        'Karto memakainya. Sepatu itu agak longgar, dan ada bulu-bulu kecil menempel di dalamnya.',

        'Lalu Karto melangkah. Dan Karto terangkat tiga sentimeter dari tanah.',

        'Ia mendarat lagi dengan bunyi pelan. "Oh," kata Karto.',

        'Ia mencoba melangkah lebih keras. Kali ini ia terangkat setengah meter, melayang sejenak, lalu turun perlahan seperti daun.',

        '"Oh!" kata Karto, kali ini lebih keras.',

        'Ternyata sepatu itu tidak sekadar terbang. Sepatu itu terbang hanya ketika pemakainya tidak sedang terburu-buru. Semakin Karto santai, semakin tinggi ia naik.',

        'Maka Karto berjalan dengan sangat, sangat santai.',

        'Langkah pertama: tiga sentimeter. Langkah kedua: setengah meter. Langkah ketiga: setinggi pohon. Langkah keempat: Karto berada di atas awan.',

        'Awan itu terasa seperti kapuk yang dipanaskan matahari. Karto berdiri di atasnya dan merasa tidak percaya diri. Ia menggaruk kepalanya dengan kaki belakangnya.',

        'Sesuatu yang aneh terjadi pada kaki Karto. Sepatu itu tidak membuatnya cepat. Ia tetap berjalan dengan langkah yang sama pelannya seperti biasa. Bedanya, setiap langkah pelannya itu mengangkatnya lebih tinggi.',

        '"Ternyata bukan soal cepat atau lambat," gumam Karto. "Soal ke mana arah langkahnya."',

        'Ia duduk di tepi awan itu dan menggantungkan kakinya ke bawah. Di bawah sana, ia bisa melihat rumah keluarganya. Atapnya bocor di sudut kiri, dan asap dari cerobongnya mengepul tipis.',

        'Dari sana juga, Karto bisa melihat teman-temannya sudah sampai di ujung sungai. Mereka sedang bermain, dan Karto bisa melihat mereka saling menoleh, mungkin sedang bertanya di mana Karto berada.',

        'Karto ingin memanggil. Tetapi suaranya tidak akan sampai sedemikian jauh. Maka Karto hanya melambai, walaupun tidak ada yang melihat.',

        'Di langit yang lebih tinggi, sekelompok burung sedang terbang berbaris. Mereka melihat Karto dan berhenti sejenak.',

        '"Ada kura-kura di awan," kata burung yang paling depan.',

        '"Jangan berhenti melihat," kata yang di belakang. "Itu hanya kura-kura yang salah langkah."',

        '"Bukan salah langkah," jawab burung pertama. "Itu kura-kura yang menemukan langkah baru."',

        'Di kejauhan, ia bisa melihat seluruh lembah. Sungai seperti pita perak. Rumah-rumah seperti kotak-kotak mainan. Dan teman-temannya, yang tadi menunggu Karto, sekarang terlihat seperti titik-titik kecil.',

        '"Hai!" panggil Karto, tetapi tidak ada yang mendengar.',

        'Seorang awan yang kebetulan lewat berhenti. "Kau kura-kura," kata awan itu.',

        '"Ya," kata Karto.',

        '"Kura-kura tidak bisa terbang."',

        '"Biasanya tidak," jawab Karto. "Tetapi hari ini aku memakai sepatu yang tepat."',

        'Awan itu berpikir sejenak. "Boleh aku minta tolong?"',

        '"Tentu."',

        '"Aku sudah lama ingin turun ke sungai, tetapi aku terlalu ringan untuk turun sendiri. Bisakah kau menginjakku pelan-pelan sampai aku cukup berat?"',

        'Karto menginjak awan itu pelan-pelan. Setiap kali menginjak, awan itu sedikit lebih gelap, sedikit lebih berat, dan sedikit lebih dekat ke tanah.',

        'Setelah dua puluh langkah, awan itu melayang turun seperti balon yang dilepas. Ia mendarat tepat di sungai, berubah menjadi kabut tipis yang menyelimuti air.',

        'Air sungai menjadi dingin dan segar. Ikan-ikan menyembul ke permukaan, bertanya dari mana kabut itu datang.',

        '"Dari kura-kura yang bisa terbang," jawab awan itu.',

        'Karto tertawa dan melayang naik lagi. Ia berjalan di atas langit selama satu jam penuh, menikmati pemandangan yang tidak pernah ia bayangkan bisa ia lihat.',

        'Dari atas, semua yang dulu terasa lambat justru terlihat teratur. Sungai yang membelah lembah, jalan setapak yang menghubungkan rumah-rumah, dan kawanan kura-kura kecil yang sedang berjalan beriringan di tepi air.',

        'Karto berhenti membandingkan dirinya dengan yang lebih cepat. Dari sini, tidak ada yang terlihat terburu-buru. Semua berjalan dengan kecepatannya masing-masing, dan tidak satu pun dari mereka tersesat.',

        'Lalu ia merasa sepatunya mulai longgar. Bulu-bulu di dalamnya mulai rontok.',

        'Karto tahu waktunya pulang. Ia melayang turun perlahan, langkah demi langkah, sampai kakinya menyentuh tanah lagi.',

        'Saat ia sampai di sungai, teman-temannya masih menunggu.',

        '"Kau lama sekali," kata Bertol, kura-kura yang paling cepat.',

        '"Aku sempat mampir ke langit," jawab Karto.',

        'Semua kura-kura tertawa. Tetapi Karto tidak peduli. Ia melepas sepatu merahnya, menyimpannya di bawah pohon, dan berjalan pulang dengan langkah yang biasa.',

        'Langkah yang pelan. Langkah yang miliknya sendiri.',
      ]
    },

    /* ------------------------------------------------------- 8 */
    {
      id: 'naga-kecil-yang-bersin-api',
      title: 'Naga Kecil yang Bersin Api',
      emoji: '🐉',
      sprite: 'dragon',
      accent: 'mint',
      categories: ['lucu', 'fantasi', 'hewan'],
      excerpt: 'Naga kecil paling malu di dunia harus tampil di depan seluruh kerajaan.',
      featured: false,
      body: [
        'Naga kecil bernama Piko adalah naga paling malu di seluruh kerajaan. Saat naga lain menderu dan membakar, Piko hanya bisa memalingkan muka dan mengatakan maaf.',

        'Masalahnya, Piko tidak bisa berhenti bersin. Dan setiap kali Piko bersin, keluarlah api.',

        'Bukan api besar yang menakutkan. Api kecil, manis, seperti lidah api lilin. Tetapi tetap saja api, dan tetap saja membakar.',

        'Piko sudah membakar tenda ulang tahun. Piko sudah membakar karpet tamu raja. Piko juga pernah tidak sengaja membakar rambutnya sendiri, yang tumbuh kembali bulan kemudian dengan warna sedikit lebih gelap.',

        'Yang paling membuat Piko sedih bukan barang-barang itu. Yang paling membuat Piko sedih adalah wajah orang-orang yang mundur selangkah setiap kali ia bersin.',

        'Naga-naga lain tidak pernah bersin seperti itu. Mereka bisa menahan api di dalam dada, membiarkannya diendapkan berhari-hari, lalu mengeluarkannya dalam satu hembusan yang terkontrol dan indah. Piko tidak bisa. Bagi Piko, bersin adalah bersin, dan api hanyalah efek samping yang tidak bisa dimatikan.',

        'Karena itu, Piko mengenakan masker setiap hari. Masker kain tebal, dua lapis, dengan jahitan rapat.',

        '"Kalau aku bersin di balik masker, apinya akan padam sendiri," kata Piko pada dirinya sendiri.',

        'Dan itu berhasil. Selama bertahun-tahun, Piko bisa bersin tanpa membakar apa pun.',

        'Tetapi masker itu juga membuat Piko sesak. Ia tidak bisa makan dengan leluasa. Ia tidak bisa tertawa lepas. Ia tidak bisa berbicara panjang-panjang tanpa harus berhenti menarik napas.',

        'Setiap malam, sebelum tidur, Piko melepas maskernya dan meletakkannya di samping bantalnya. Ia menatapnya cukup lama, lalu memakainya lagi sebelum tertidur, karena ia takut bersin dalam tidur.',

        'Lalu datanglah hari itu: Pesta Api Tahunan, di mana semua naga muda harus menunjukkan satu keahlian di depan seluruh kerajaan.',

        'Nama Piko terpanggil. Baris ketujuh, di antara naga yang bisa menyalakan lilin dari jarak sepuluh meter dan naga yang bisa menghembuskan api berwarna pelangi.',

        'Piko berdiri. Kakinya gemetar. Ia berjalan ke panggung dengan maskernya masih terpasang.',

        'Di atas panggung, lampu-lampu menyilaukan. Piko bisa mendengar sorak-sorai penonton untuk naga sebelumnya, yang berhasil menyalakan seluruh deretan lilin dengan satu hembusan napas dan tidak meninggalkan bekas sedikit pun.',

        'Piko membandingkan dirinya. Napasnya pendek. Dadanya kecil. Dan ia masih memakai masker, yang sekarang terasa seperti bantal penyelamat yang tiba-tiba menjadi penjara.',

        'Sekilas ia berpikir untuk minta maaf dan turun dari panggung. Itu yang selalu ia lakukan. Minta maaf, lalu mundur, lalu pulang, lalu memakai maskernya lagi.',

        'Tetapi kali ini, di bawah sorot lampu, Piko merasa lelah untuk ke-sembilan puluh kalinya pada hal yang sama.',

        'Maka Piko tetap berdiri. Ia membungkuk. Penonton bertepuk.',

        'Lalu Piko merasakan sesuatu. Hidungnya gatal. Sangat gatal.',

        '"Tidak," bisik Piko.',

        'Sekali, dua kali. Hidungnya makin gatal. Matanya mulai berair.',

        'Piko menekan maskernya ke wajahnya. Ia menahan napas. Ia memejamkan matanya.',

        'Dan bersin.',

        'Maskernya terlepas.',

        'Api keluar. Tetapi bukan lidah api lilin seperti biasa. Kali ini, api itu berwarna keemasan, dan ia tidak membakar apa pun. Ia berubah menjadi ribuan percikan kecil yang melayang ke atas seperti kembang api.',

        'Seluruh kerajaan diam.',

        'Lalu seorang anak kecil di barisan depan bertepuk tangan. "Lagi!" teriaknya.',

        'Piko membuka matanya. Percikan-percikan keemasan masih melayang di udara, mendarat pelan di bahu-bahu penonton tanpa membakar sedikit pun.',

        'Piko menyadari sesuatu: ia tidak membakar apa pun. Untuk pertama kalinya dalam hidupnya, bersinnya tidak merusak sesuatu.',

        'Ia menunduk dan memeriksa tangannya. Tidak ada jelaga. Ia memeriksa lantai panggung. Tidak ada bekas hangus. Ia memeriksa ujung tanduknya, yang biasanya selalu sedikit melepuh setelah bersin. Bersih.',

        'Rupanya, selama ini semua yang ia bakar terjadi karena ia terlalu takut. Ketakutan membuat apinya jadi liar. Tanpa ketakutan, api itu hanya... cantik.',

        'Piko menarik napas dalam-dalam. Hidungnya masih gatal.',

        'Kali ini, ia tidak menekannya.',

        'Bersin.',

        'Kembang api keemasan kedua terbang ke langit balai kerajaan, menerangi langit-langit yang tinggi, lalu perlahan-lahan padam seperti bintang yang tertidur.',

        'Kerajaan meledak dalam tepuk tangan. Naga-naga lain berdiri dan bertepuk bersama.',

        'Raja memanggil Piko ke depan. "Kau naga pertama yang membuat kami tertawa dan kagum pada saat yang bersamaan."',

        'Piko menatap seluruh kerajaan. Semua wajah yang dulu mundur selangkah kini condong ke depan, menunggu, tersenyum.',

        'Untuk pertama kalinya, Piko tidak merasa perlu meminta maaf karena telah menjadi dirinya sendiri.',

        'Piko tersipu sampai telinganya merah. "Maaf," katanya, seperti biasa.',

        '"Jangan minta maaf untuk hal yang membuat semua orang tersenyum," kata raja.',

        'Sejak hari itu, Piko tidak memakai masker lagi. Ia tetap sering bersin. Dan setiap kali ia bersin, seluruh kerajaan menunggu dengan senyum di wajah, siap untuk kembang api berikutnya.',
      ]
    },

    /* ------------------------------------------------------- 9 */
    {
      id: 'awan-yang-ingin-menjadi-hujan',
      title: 'Awan yang Ingin Menjadi Hujan',
      emoji: '☁️',
      sprite: 'cloud',
      accent: 'sky',
      categories: ['menghangatkan', 'imajinasi'],
      excerpt: 'Sebuah awan kecil belajar bahwa menjadi diri sendiri sudah cukup.',
      featured: false,
      body: [
        'Di langit bagian selatan, ada sebuah awan kecil bernama Awa. Awa tidak pernah hujan. Awa hanya melayang, menebal, lalu menipis lagi, setiap hari, setiap minggu, setiap tahun.',

        'Awa melihat awan-awan lain turun hujan. Mereka berubah menjadi kabut tipis, mendarat di bumi, dan membuat kolam-kolam kecil. Semua orang di bawah menengadah dan tersenyum.',

        '"Aku juga ingin begitu," kata Awa.',

        'Suatu pagi, Awa bertanya pada Awa Besar yang sedang melayang di dekatnya.',

        '"Bagaimana caranya agar aku bisa hujan?"',

        'Awa Besar berpikir lama. "Kau harus cukup berat," katanya akhirnya.',

        '"Berat?"',

        '"Ya. Setiap tetes hujan harus punya bobot. Kau harus menyerap cukup banyak hal sebelum kau bisa melepaskannya."',

        'Maka Awa mulai menyerap. Ia menyerap kabut pagi. Ia menyerap uap dari laut yang jauh. Ia menyerap sisa-sisa mimpi orang-orang yang baru bangun.',

        'Setiap kali menyerap, Awa jadi sedikit lebih gelap, sedikit lebih besar, sedikit lebih berat.',

        'Tetapi menyerap itu tidak mudah. Awa harus terbang rendah di atas laut selama berhari-hari, menahan diri agar tidak jatuh, sementara uap asin naik ke dalamnya. Ia harus melayang di atas hutan yang baru saja terbakar, menyerap asap yang pedih, dan berpura-pura bahwa asap itu adalah bagian dari dirinya.',

        'Ada malam di mana Awa hampir menyerah. Ia terlalu berat untuk naik kembali ke jalurnya, dan ia harus berhenti beristirahat di atas punggung gunung selama setengah malam.',

        'Saat di sana, ia bertemu Bintang Kecil yang sedang bertengger di puncak.',

        '"Kau tampak lebih gelap dari biasanya," kata Bintang Kecil.',

        '"Aku sedang mengumpulkan sesuatu," jawab Awa.',

        '"Untuk apa?"',

        '"Untuk dilepaskan."',

        'Bintang Kecil berpikir sejenak. "Orang bilang mengumpulkan itu menyenangkan. Tetapi melepaskan juga menyenangkan, asal tahu untuk apa."',

        'Awa mengangguk, dan malam itu ia tidur di atas gunung dengan satu pertanyaan baru di kepalanya: untuk apa ia melepaskan semua ini?',

        'Tetapi Awa juga menjadi lebih lambat. Ia tidak bisa melayang secepat dulu. Teman-temannya sudah jauh di depan, tetapi Awa tetap di tempat.',

        '"Kau tampak sedih," kata Burung Layang-layang yang bertengger di sisinya.',

        'Burung itu memang selalu bertengger di awan, karena burung itu tidak bisa terbang sejauh yang ia inginkan.',

        '"Aku ingin hujan," kata Awa. "Tapi sekarang aku terlalu berat untuk meneruskan perjalanan."',

        '"Kalau begitu turunlah," kata Burung Layang-layang. "Bumi ada di bawah."',

        'Awa menunduk. Memang benar, bumi sudah sangat dekat. Ia bisa melihat pepohonan, sungai, dan sebuah ladang bunga yang sedang mekar.',

        'Tetapi turun berarti berhenti melayang. Berarti menjadi sesuatu yang lain.',

        '"Aku takut," akui Awa.',

        '"Takut apa?"',

        '"Kalau aku hujan, aku tidak akan jadi awan lagi."',

        'Burung Layang-layang diam sejenak. "Kalau kau tidak pernah hujan, kau tidak akan pernah tahu seperti apa rasanya menyentuh bumi."',

        'Malam itu, Awa melayang di atas ladang bunga. Bintang-bintang berkelip di atasnya. Di bawah, para petani tidur dengan pintu terbuka, berharap pagi membawa embun.',

        'Awa memikirkan semua yang telah ia serap: kabut pagi, uap laut, mimpi orang yang baru bangun. Semua itu ada di dalam dirinya. Semua itu menunggu untuk dilepaskan.',

        'Awa memutuskan. Ia tidak ingin melayang selamanya hanya karena takut berhenti melayang.',

        'Ia menarik napas terakhir sebagai awan, lalu melepaskannya.',

        'Turunlah Awa. Tetapi ia tidak berubah menjadi kabut biasa. Ia berubah menjadi hujan yang hangat, hujan yang pelan, hujan yang jatuh perlahan-lahan seperti sedang menyanyi.',

        'Setiap tetes membawa sesuatu. Tetes pertama membawa kabut pagi, dan ketika menyentuh tanah, tanah itu terasa dingin dan segar. Tetes kedua membawa uap laut, dan ketika menyentuh daun, daun itu berkilau. Tetes ketiga membawa mimpi orang yang baru bangun, dan ketika menyentuh bunga, bunga itu mekar lebar.',

        'Ladang bunga berubah. Dari kuning menjadi setiap warna yang bisa dibayangkan.',

        'Para petani terbangun dan melihat ke luar. Mereka berdiri di ambang pintu, membiarkan hujan menyentuh wajah mereka.',

        '"Hujan yang bagus," kata salah satu dari mereka.',

        '"Hujan yang bagus," jawab yang lain.',

        'Awa tidak bisa menjawab. Awa sudah menjadi bagian dari tanah, dari daun, dari bunga, dari udara yang dihirup petani itu.',

        'Tetapi Awa tidak hilang. Ketika matahari terbit, Awa naik kembali sebagai uap, menjadi kabut, menjadi awan lagi, lebih ringan dari sebelumnya, dan membawa satu hal yang tidak pernah ia serap sebelumnya: rasa puas.',

        'Burung Layang-layang menunggu di langit, dan Awa melayang lewat.',

        '"Kau kembali," kata burung itu.',

        '"Kau juga," kata Awa.',

        'Dan sejak itu, Awa tahu: menjadi awan itu baik, tetapi menjadi hujan itu juga baik. Yang penting adalah pernah mencoba keduanya, dan berani melepaskan diri untuk mengetahuinya.',
      ]
    },

    /* ------------------------------------------------------- 10 */
    {
      id: 'penguin-yang-salah-masuk-rumah',
      title: 'Penguin yang Salah Masuk Rumah',
      emoji: '🐧',
      sprite: 'penguin',
      accent: 'gold',
      categories: ['lucu', 'menghangatkan', 'hewan'],
      excerpt: 'Seekor penguin tersesat di kota dan menemukan kehangatan di tempat yang salah.',
      featured: false,
      body: [
        'Penguin bernama Polo tinggal di kutub selatan, tempat salju tidak pernah berhenti dan semua orang berjalan dengan perut dekat ke tanah.',

        'Suatu hari, Polo mengikuti keluarganya berenang mencari ikan. Arusnya kuat, airnya gelap, dan sebelum Polo sadar, ia sudah terbawa jauh dari yang lain.',

        'Polo berenang selama berjam-jam. Saat akhirnya ia muncul ke permukaan, ia tidak melihat es. Ia melihat batu-batu, gedung-gedung, dan lampu-lampu yang berwarna-warni.',

        'Polo tidak tahu ia berada di kota.',

        'Ia berjalan menyusuri jalan setapak, basah kuyup, dengan perut kosong. Orang-orang menatapnya. Seorang anak menunjuk. "Ibu, lihat! Ada penguin!"',

        '"Itu pasti boneka," kata ibunya.',

        'Polo bukan boneka. Polo sedang kedinginan.',

        'Di kutub, dingin adalah hal yang biasa. Dingin di sana adalah teman, seperti rumput yang bagi kucing. Tetapi dingin di kota ini berbeda. Dingin ini menusuk, dan tidak ada satu pun orang di sekelilingnya yang mengenakan bulu.',

        'Polo berjalan melewati toko roti yang baru saja tutup, melewati taman yang sepi, dan melewati halaman rumah yang pagar pintunya terbuka.',

        'Ia berhenti sejenak di depan jendela toko. Di dalamnya ada cermin, dan di cermin itu Polo melihat dirinya sendiri: seekor penguin kecil, basah kuyup, berdiri di tengah kota yang asing.',

        '"Apa yang kau lakukan di sini, Polo?" tanya ia pada dirinya sendiri.',

        'Jawaban yang datang tidak meyakinkan: "Aku tidak tahu. Tetapi aku di sini, jadi mungkin ada sebabnya."',

        'Dari balik jendela, Polo melihat sesuatu yang membuatnya berhenti: keluarga duduk di sekeliling meja, makan malam, dan tertawa.',

        'Rumah itu hangat.',

        'Polo tidak berpikir panjang. Ia melangkah masuk melalui pintu yang terbuka, melewati lorong, dan berhenti di depan pintu dapur.',

        'Seorang kakek yang sedang duduk sendirian di dekat perapian menoleh.',

        'Kakek itu tidak kaget. Ia hanya memandang Polo, lalu tersenyum.',

        '"Salah alamat, Nak?" tanya kakek itu.',

        'Polo mengangguk. Ia tidak bisa bicara bahasa manusia, tetapi kakek itu sepertinya mengerti.',

        '"Duduklah dulu," kata kakek itu. "Pasti kau jauh dari rumah."',

        'Kakek itu mengambil handuk kering dan mengelus kepala Polo pelan-pelan. Lalu ia mengambil semangkuk sup dari kompor dan menaruhnya di depannya.',

        'Polo mencium sup itu. Bau yang tidak pernah ia cium di kutub: bawang, wortel, dan sedikit kayu manis.',

        'Ia meminumnya sedikit demi sedikit. Hangatnya menyebar dari tenggorokan sampai ke ujung kakinya yang basah.',

        'Kakek itu duduk kembali di kursinya. "Aku juga sering salah jalan waktu muda," katanya. "Yang penting bukan kesalahannya. Yang penting, ada seseorang yang membukakan pintu."',

        'Polo menatap kakek itu. Air matanya berlinang, tetapi bukan karena sedih.',

        'Kakek itu ternyata tinggal seorang diri. Istrinya sudah lama pergi, anak-anaknya sudah punya rumah sendiri, dan meja makan yang tadinya penuh kini hanya dipakai untuk menaruh kacamata serta surat-surat yang belum dibuka.',

        '"Kau tahu," kata kakek sambil menatap api perapian, "aku sudah lama tidak punya tamu yang benar-benar mampir. Tamu-tamuku biasanya hanya angin, dan angin tidak pernah makan sup."',

        'Polo tidak mengerti kata-katanya, tetapi ia mengerti nada suaranya. Nada itu sama persis dengan nada yang pernah ia dengar dari ibunya, waktu ibunya menatap jauh ke arah laut yang kosong.',

        'Malam itu, kakek itu menemani Polo duduk sampai ia tertidur. Ia tidak bertanya lagi. Ia hanya sesekali menambahkan kayu ke perapian supaya apinya tidak padam.',

        'Polo tertidur di dekat perapian, di atas karpet yang empuk, dengan perut yang hangat.',

        'Pagi harinya, keluarga kakek itu terbangun dan menemukan bantal kecil yang berbentuk aneh di depan perapian, serta jejak kaki kecil di lantai.',

        '"Kau mimpi lagi, Yah?" tanya cucunya.',

        'Kakek itu tersenyum. "Tidak. Kita kedatangan tamu."',

        'Sementara itu, di sungai yang paling dekat, Polo melompat ke air. Kali ini ia tahu arahnya. Airnya dingin, tetapi tidak seperti biasanya. Masih ada sisa sup di perutnya.',

        'Polo berenang pulang. Saat tiba, keluarganya menunggu di tepi es dengan cemas.',

        '"Kau ke mana saja?" tanya ibunya.',

        '"Kota," jawab Polo. "Aku salah masuk rumah."',

        '"Rumah siapa?"',

        'Polo berpikir sejenak. "Rumah orang yang baik."',

        'Ibu Polo mengangguk pelan, seolah-olah jawaban itu sudah cukup untuk menjelaskan segalanya. Ia tidak bertanya lebih jauh, karena di kutub, semua orang tahu bahwa jalan yang panjang selalu menyimpan cerita yang panjang pula.',

        'Keluarga itu kembali ke kegiatan masing-masing. Ada yang berenang, ada yang makan, dan ada yang tidur siang di atas bongkahan es.',

        'Polo duduk sendirian di tepi air dan menatap ke arah utara, ke arah kota yang tidak bisa ia lihat dari sana. Ia tersenyum, lalu melompat masuk ke laut.',

        'Dan setiap kali Polo merasa kedinginan di kutub, ia akan teringat pada perapian kecil, semangkuk sup, dan seorang kakek yang tidak pernah bertanya mengapa penguin ada di dapurnya.',
      ]
    },

    /* ------------------------------------------------------- 11 */
    {
      id: 'bulan-yang-lupa-tidur',
      title: 'Bulan yang Lupa Tidur',
      emoji: '🌙',
      sprite: 'moon',
      accent: 'lilac',
      categories: ['sebelum-tidur', 'imajinasi'],
      excerpt: 'Bulan terjaga semalaman dan belajar pentingnya beristirahat.',
      featured: false,
      body: [
        'Setiap malam, Bulan naik ke langit, menyinari bumi, lalu turun kembali ke balik gunung untuk tidur. Begitulah tugasnya, dari dulu, sampai kapan pun.',

        'Tetapi suatu malam, Bulan lupa.',

        'Bukan karena ia tidak ingin tidur. Karena ia terlalu ingin melihat sesuatu.',

        'Di sebuah kampung kecil, seorang anak perempuan sedang duduk di jendela. Ia memegang sebuah kertas dan pensil, dan sedang menggambar sesuatu.',

        'Bulan penasaran. Ia bertahan di langit, menunggu selesai.',

        'Gadis itu menggambar sebuah rumah. Lalu sebuah pohon. Lalu seekor kucing yang sedang tidur di bawah pohon itu.',

        'Bulan masih menunggu.',

        'Gadis itu menambahkan asap dari cerobong, awan di atas, dan sebuah bintang kecil di pojok kertas. Lalu ia menambahkan bintang lain, dan bintang lain, dan bintang lain, sampai seluruh kertas penuh.',

        'Bulan menahan napas. Di antara bintang-bintang gambar itu, ada satu yang lebih besar dan digambar dengan hati-hati, lengkap dengan wajah tersenyum.',

        'Bulan tahu bintang itu siapa. Bintang itu adalah Bulan.',

        'Sesuatu yang hangat menjalar di dada Bulan. Selama ribuan tahun, Bulan disorot, difoto, diceritakan dalam lagu. Tetapi belum pernah ada seorang anak yang menggambar wajahnya sendiri di samping wajah Bulan.',

        'Gadis itu menambahkan sebuah hati kecil di antara mereka berdua, lalu menutup pensilnya.',

        'Bulan masih di sana.',

        'Akhirnya, gadis itu berhenti. Ia menatap gambar itu, tersenyum, lalu meletakkannya di meja. Ia memadamkan lampu dan berbaring.',

        'Bulan menunggu lagi, berharap gadis itu akan terbangun dan menggambar sesuatu yang lain.',

        'Tetapi gadis itu tertidur. Ia mendengkur pelan.',

        'Bulan akhirnya sadar: sudah sangat larut. Di sekitarnya, bintang-bintang mulai redup. Bahkan bintang-bintang yang biasanya terjaga sepanjang malam sudah mulai memejamkan diri.',

        'Bulan mencoba turun. Tetapi ia tidak bisa.',

        'Ternyata, kalau terlalu lama terjaga, Bulan jadi terlalu berat untuk bergerak. Berat karena cahayanya sendiri.',

        'Bulan mengira berat itu datang dari kewajiban. Ternyata berat itu datang dari menolak beristirahat, dan dua hal itu selama ini dianggap sama oleh Bulan, walaupun sebenarnya tidak.',

        '"Oh tidak," gumam Bulan.',

        'Ia mencoba melayang turun. Tidak berhasil. Ia mencoba menutup matanya. Tetapi setiap kali menutup mata, ia teringat kertas gambar yang penuh bintang itu.',

        'Malam berlalu. Bulan masih di langit.',

        'Pagi datang. Matahari naik dari timur dan berhenti saat melihat Bulan masih berdiri di tempatnya.',

        '"Kau belum tidur?" tanya Matahari.',

        '"Aku lupa," jawab Bulan.',

        'Matahari memandang Bulan dengan penuh pengertian. "Bukan lupa," katanya. "Kau terlalu asyik. Dua hal itu mirip, tetapi tidak sama."',

        '"Apa bedanya?"',

        '"Lupa berarti kau tidak tahu. Terlalu asyik berarti kau tahu, tetapi kau memilih untuk tetap di sana."',

        'Bulan diam, karena ia tahu Matahari benar.',

        'Matahari tidak marah. Ia hanya duduk di sisinya, seperti dua teman yang duduk di bangku taman.',

        '"Aku terlalu ingin melihat gadis itu menggambar," kata Bulan.',

        '"Aku tahu," kata Matahari. "Karena kau suka melihat manusia membuat sesuatu."',

        '"Bagaimana aku bisa turun?"',

        '"Kau harus berhenti menyinari sejenak," kata Matahari. "Cahayamu sendiri yang membuatmu berat."',

        'Bulan berpikir. Ia tidak ingin berhenti menyinari, karena mungkin gadis itu butuh cahaya untuk tidur nyenyak.',

        'Tetapi gadis itu sudah tertidur. Dan semua orang di kampung itu juga sudah tertidur.',

        'Maka Bulan mematikan cahayanya, sedikit demi sedikit. Pertama cahaya di tepinya. Lalu cahaya di tengahnya. Lalu cahaya terakhir yang menempel di wajahnya.',

        'Saat cahaya terakhir padam, Bulan jadi sangat ringan. Ia melayang turun seperti balon yang dilepas.',

        'Ia mendarat di balik gunung, di tempat tidurnya yang biasa, dan tertidur seketika.',

        'Bulan tidur sepanjang siang. Ia bermimpi tentang kertas gambar yang penuh bintang, dan tentang kucing yang tidur di bawah pohon.',

        'Saat Bulan terbangun sore itu, ia merasa segar. Cahayanya terasa lebih terang dari biasanya.',

        'Ternyata yang membuat Bulan berat bukanlah kewajibannya menyinari. Yang membuatnya berat adalah perasaan bahwa pekerjaannya tidak pernah selesai, bahwa setiap malam ia harus memberi lebih banyak cahaya, bahwa ia tidak boleh sedikit pun redup.',

        'Dan ternyata, satu malam istirahat tidak membuat siapa pun celaka. Bumi tetap berputar. Orang-orang tetap tidur. Gadis itu tetap menggambar.',

        'Bulan juga belajar satu hal lagi: memberi bukan berarti menghabiskan diri. Yang paling berharga bukan cahaya paling terang, melainkan cahaya yang tiba tepat pada waktunya.',

        'Naiklah Bulan ke langit lagi, tepat pada waktunya.',

        'Dan di kampung kecil itu, gadis itu sudah menunggu di jendela dengan kertas kosong dan pensilnya.',

        '"Kau datang," kata gadis itu.',

        '"Maaf aku lambat," jawab Bulan.',

        'Gadis itu tidak mendengar, tetapi ia tersenyum lebar, seolah-olah ia memang mendengar kalimat itu dari langit.',
      ]
    },

    /* ------------------------------------------------------- 12 */
    {
      id: 'bintang-kecil-yang-tersesat',
      title: 'Bintang Kecil yang Tersesat',
      emoji: '⭐',
      sprite: 'star',
      accent: 'gold',
      categories: ['petualangan', 'menghangatkan', 'imajinasi'],
      excerpt: 'Bintang yang jatuh ke bumi belajar pulang dengan bantuan orang asing.',
      featured: false,
      body: [
        'Bintang kecil bernama Sinar selalu berada di tempat yang tepat. Ia selalu muncul di waktu yang tepat, di posisi yang tepat, dan dengan warna yang tepat.',

        'Tetapi malam itu, Sinar salah.',

        'Ia terpeleset dari jalurnya. Bukan jatuh seperti bintang jatuh yang dramatis, melainkan terpeleset pelan-pelan, seperti seseorang yang salah melangkah di tangga.',

        'Saat melayang turun, Sinar sempat melihat jalurnya yang lain bergerak menjauh, terus berjalan tanpa menunggunya, persis seperti kereta yang tidak menunggu penumpang yang tertinggal.',

        'Ia sempat memanggil. Tetapi angin menelan suaranya, dan bintang-bintang lain terlalu jauh untuk mendengar sesuatu yang kecil dan merah di antara malam yang biru.',

        'Perlahan-lahan, dunia yang tadinya berputar di atas Sinar kini bergerak di atas kepalanya. Awan lewat, lalu bulan, lalu kehampaan yang panjang.',

        'Lalu tanah menyambutnya dengan lembut, seperti seseorang yang menangkap benda yang jatuh tanpa sempat memarahinya.',

        'Sinar mendarat di sebuah padang rumput yang gelap, tepat di samping seekor rusa yang sedang tidur.',

        'Rusa itu terbangun karena cahaya. Ia membuka mata, lalu menatap Sinar yang sedang duduk di rumput dengan kaki kecilnya terentang.',

        '"Kau bukan rusa," kata Sinar.',

        '"Kau bukan rumput," kata rusa itu.',

        'Mereka berdua berpikir sejenak, lalu tertawa.',

        '"Di mana tempatku?" tanya Sinar.',

        '"Di langit," jawab rusa. "Dan kau ada di tanah."',

        'Sinar menunduk. Memang benar. Di bawahnya ada tanah, bukan awan. Dan di atasnya ada langit yang jauh, penuh bintang-bintang lain yang berbaris rapi.',

        'Salah satu bintang itu berkedip dua kali, sepertinya sedang mencari.',

        '"Aku tersesat," kata Sinar.',

        '"Semua yang turun ke bumi pernah merasa tersesat," kata rusa itu. "Pertanyaannya adalah, mau pulang atau tidak."',

        '"Mau. Tetapi bagaimana caranya?"',

        '"Kau harus mencari tempat yang paling tinggi. Dari sana, langit lebih dekat."',

        'Maka berangkatlah Sinar dan rusa itu.',

        'Mereka melewati padang rumput yang gelap. Rusa berjalan di depan, memandu jalan dengan tanduknya. Sinar melayang di belakang, menyinari setiap langkah.',

        'Di tengah padang, mereka bertemu seekor tikus yang sedang menggali.',

        '"Malam yang bagus," kata tikus itu. "Biasanya aku tidak bisa melihat apa-apa."',

        '"Terima kasih pada dia," kata rusa sambil menunjuk Sinar.',

        'Tikus itu menatap Sinar. "Kau bintang, ya?"',

        '"Ya," kata Sinar.',

        '"Aku selalu bertanya-tanya seperti apa bintang dari dekat. Ternyata kau lebih kecil dari yang kubayangkan."',

        '"Semuanya lebih kecil dari yang dibayangkan," kata Sinar, "kecuali rasa kehilangan."',

        'Tikus itu mengangguk serius, lalu kembali menggali.',

        'Mereka terus berjalan. Mereka melewati hutan yang rapat, tempat burung-burung malam bertengger dan menatap cahaya kecil yang lewat.',

        'Mereka melewati sungai yang tenang, dan di permukaan air, refleksi Sinar bergerak seperti ikan perak.',

        'Akhirnya mereka tiba di kaki gunung paling tinggi di seluruh negeri.',

        '"Dari sini," kata rusa, "kau bisa menyentuh langit."',

        'Sinar memandang ke atas. Gunung itu sangat tinggi. Puncaknya tertutup awan.',

        '"Kau tidak ikut?" tanya Sinar.',

        '"Rusa tidak dirancang untuk memanjat," jawab rusa itu. "Tetapi aku akan menunggu di bawah, kalau kau butuh teman untuk pulang."',

        'Sinar memeluk rusa itu. Cahayanya berkedip lembut di leher rusa yang hangat.',

        'Lalu Sinar memanjat.',

        'Ia memanjat batu demi batu. Awan menyelimutinya. Dingin menusuk. Tetapi Sinar tidak mematikan cahayanya, karena cahaya itulah satu-satunya yang bisa ia lihat.',

        'Saat tiba di puncak, Sinar berdiri di atas awan. Langit ada di depannya, sangat dekat, seolah hanya perlu mengulurkan tangan.',

        'Kaki Sinar terasa berat setelah memanjat selama itu. Cahayanya juga redup, karena memanjat gunung memang menghabiskan cahaya seorang bintang.',

        'Tetapi di kejauhan, dari kaki gunung, satu titik kecil masih bersinar. Rusa itu tidak bergerak. Ia menunggu persis di tempat ia berhenti, seolah-olah ia tahu bahwa penantian yang singkat akan terbayar oleh pertemuan yang panjang.',

        'Melihat titik itu, Sinar sadar bahwa selama ini ia mengira ia harus menemukan jalannya sendiri. Padahal sebagian jalan selalu ditemani orang lain, bahkan ketika orang itu hanya berdiri diam dan menunggu.',

        'Bintang-bintang lain melihatnya. Yang paling terang berkedip tiga kali: selamat datang.',

        'Sinar menoleh ke bawah. Di kaki gunung, ada satu titik cahaya kecil yang menunggu. Rusa itu masih di sana.',

        '"Aku datang dari sana," kata Sinar pada dirinya sendiri. "Dan aku akan kembali ke sana lagi."',

        'Lalu ia melayang naik.',

        'Perlahan-lahan, Sinar kembali ke tempatnya, di antara bintang-bintang lain, di waktu yang tepat, dengan warna yang tepat.',

        'Tetapi sejak malam itu, setiap kali Sinar berkedip, ia berkedip dua kali: satu untuk langit, satu untuk rusa di bawah.',

        'Dan rusa itu selalu tahu, setiap malam, bahwa di langit ada seorang teman yang mengingatnya.',
      ]
    },

    /* ---------------- Video stories ----------------
       type:'video' marks a story whose main content is a YouTube video
       rather than written paragraphs. body stays empty, and the entry
       only ever belongs to the 'video' category so it never leaks into
       the written collection, search, featured pick or random story. */
    {
      id: 'legenda-batu-menangis',
      title: 'Legenda Batu Menangis',
      emoji: '🎬',
      sprite: 'moon',
      accent: 'lilac',
      categories: ['video'],
      excerpt: 'Asal-usul batu menangis di tepi sungai Kalimantan Barat.',
      type: 'video',
      video: 'qu00d1Lv1M8',
      channel: 'Gromore Studio Series',
      duration: '',
      body: []
    },
    {
      id: 'upin-ipin-manisan-cermai',
      title: 'Upin & Ipin — Manisan Cermai',
      emoji: '🎬',
      sprite: 'star',
      accent: 'gold',
      categories: ['video'],
      excerpt: 'Episode penuh Manisan Cermai dari musim ke-20.',
      type: 'video',
      video: 'ZjrSWXbPtEw',
      channel: 'AniMYSEA',
      duration: '',
      body: []
    },
    {
      id: 'upin-ipin-ayam-goreng-mail',
      title: 'Upin & Ipin — Ayam Goreng Mail Mendunia',
      emoji: '🎬',
      sprite: 'cloud',
      accent: 'mint',
      categories: ['video'],
      excerpt: 'Ayam goreng Mail melegenda sampai ke seluruh dunia.',
      type: 'video',
      video: 'x30tUttPm2Y',
      channel: 'Upin & Ipin TV',
      duration: '',
      body: []
    }
  ];

  /* ---------------- Derived data + helpers ---------------- */

  var WPM = 200;

  function wordCount(story) {
    var n = 0;
    var body = story.body || []; // video stories carry no paragraphs
    for (var i = 0; i < body.length; i++) {
      var t = body[i].trim();
      if (t) n += t.split(/\s+/).length;
    }
    return n;
  }

  /* Reading minutes: written stories use word count, video stories use
     the duration their creator supplied (falling back to 1). */
  function minutesFor(story) {
    if (story.type === 'video') {
      var m = String(story.duration || '').match(/^(\d+):/);
      return m ? Math.max(1, parseInt(m[1], 10)) : 1;
    }
    if (!story._words) story._words = wordCount(story);
    return Math.max(1, Math.round(story._words / WPM));
  }

  function isVideo(s) { return s.type === 'video'; }

  var written = [];
  var videos = [];
  for (var j = 0; j < STORIES.length; j++) {
    if (isVideo(STORIES[j])) videos.push(STORIES[j]);
    else written.push(STORIES[j]);
  }

  var byId = {};
  for (var i = 0; i < STORIES.length; i++) {
    STORIES[i]._words = wordCount(STORIES[i]);
    STORIES[i]._minutes = minutesFor(STORIES[i]);
    byId[STORIES[i].id] = STORIES[i];
  }

  CBT.stories = {
    list: STORIES,
    /* `written` is the original collection: home, /cerita, search, the
       featured card and "cerita acak" all read from this, so adding a
       video story never disturbs them. */
    written: written,
    videos: videos,
    isVideo: isVideo,
    get: function (id) { return byId[id] || null; },
    minutes: minutesFor,
    words: function (s) { return s._words; },
    featured: function () {
      for (var i = 0; i < written.length; i++) if (written[i].featured) return written[i];
      return written[0];
    },
    inCategory: function (catId) {
      var out = [];
      for (var i = 0; i < STORIES.length; i++) {
        if (STORIES[i].categories.indexOf(catId) !== -1) out.push(STORIES[i]);
      }
      return out;
    },
    /** "N dari M menit" for the continue-reading card. */
    progressLabel: function (story, percent) {
      var total = minutesFor(story);
      var done = Math.max(1, Math.round(total * Math.min(1, Math.max(0, percent / 100))));
      return done + ' dari ' + total + ' menit';
    }
  };
})(typeof window !== 'undefined' ? window : this);
