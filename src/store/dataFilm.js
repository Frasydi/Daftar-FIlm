import { defineStore } from "pinia";

export const search = defineStore('search', {
  state : () => ({
    genre : "all",
    search : ""
  }),
  getters : {
    getGenre(state) {
      return state.genre
    },
    getsearch(state) {
      return state.search
    }
  },
  actions : {
    changeGenre(val) {
      this.genre = val
    },
    changeSearch(val) {
      this.search = val
    }
  }
})

export const lampu = defineStore('lampu', {
  state : () => ({
    lampu : false
  }),
  getters : {
    getDataLampu() {
      return this.lampu
    }
  }, 
  actions : {
    Darkmode() {
      lampu().switch()
      let lamp = lampu().lampu
       if(lamp) {
         document.querySelector("body").classList = "dark";
       } else {
          document.querySelector("body").classList = "light";
       }
     },
    switch() {
      this.lampu = !this.lampu
    }, 
    cekifdark() {
      if(this.lampu) {
          return "Light Mode"
      } 
      return "Dark Mode"  
    },
  }
})
export const dataFilm = defineStore('Film', {
    state : () => ({
       film :  [
            {
              "Judul": "Avengers End Game",
              "Genre" : "Action",
              "Tanggal_liris": "22-04-2019",
              "pameran": [
                "Robert Downey Jr.",
                "Chris Evans",
                "Mark Ruffalo",
                "Chris Hemsworth",
                "Scarlett Johansson",
                "Jeremy Renner",
                "Don Cheadle",
                "Paul Rudd",
                "Brie Larson",
                "Karen Gillan",
                "Danai Gurira",
                "Benedict Wong",
                "Jon Favreau",
                "Bradley Cooper",
                "Gwyneth Paltrow",
                "Josh Brolin"
              ],
              "Durasi": 181,
              "Sutradara": [
                "Anthony Russo",
                "Joe Russo"
              ],
              "Anggaran": 356,
              "Penulis": [
                "Christopher Markus",
                "Stephen McFeely"
              ],
              "Sinopsis": "\n  <p>Dua puluh tiga hari setelah peristiwa itu, Captain Marvel menyelamatkan Tony Stark dan Nebula dari luar angkasa. Mereka pun bergabung dengan para Avengers yang tersisa. Para Avengers tersebut kemudian membuat misi untuk mengambil infinity stone dari Thanos, namun Thanos telah menghancurkannya. Thor yang marah kemudian membunuh Thanos.</p>\n  <p>Lima tahun setelah peristiwa yang disebut blip itu terjadi, orang-orang yang ditinggalkan masih merasakan kehilangan yang amat dalam, tak terkecuali para Avengers yang tersisa. Meski begitu, mereka pun mulai berusaha menjalani kehidupan masing-masing, Tony Stark hidup bahagia bersama Pepper Potts dan telah memiliki seorang putri.</p>\n  \n  <p>Thor menghabiskan waktunya untuk mabuk dan menonton TV. Sementara Steve Rogers dan Natasha Romanoff tetap berada di markas mereka. Harapan baru muncul saat Scott Lang atau Ant Man keluar dari dunia quantum realm. Scott Lang yang kaget dengan keadaan dunia dan putrinya yang menghilang pun bertemu dengan para Avengers.</p>\n  <p>Scott Lang kemudian meyakinkan Avengers bahwa teori quantum realm memungkinkan mereka untuk melakukan perjalanan waktu dan mengambil infinity stone sebelum dicuri oleh Thanos. Tony Stark , Bruce Banner, dan Rocket kemudian membuat sebuah mesin waktu. Mereka kemudian membentuk tim untuk menyebar dan mengambil infinity stone di berbagai tempat tersebut.</p>",
              "Gambar": "https://upload.wikimedia.org/wikipedia/id/0/0d/Avengers_Endgame_poster.jpg"
            },
            {
              "Judul": "Spiderman : No Way Home",
              "Genre" : "Action",
              "Tanggal_liris": "15-12-2021",
              "pameran": [
                "Tom Holland",
                "Zendaya",
                "Benedict Cumberbatch",
                "Jacob Batalon",
                "Jon Favreau",
                "Jamie Foxx",
                "Willem Dafoe",
                "Alfred Molina",
                "Benedict Wong",
                "Tony Revolori",
                "Marisa Tomei",
                "Andrew Garfield",
                "Tobey Maguire"
              ],
              "Durasi": 148,
              "Sutradara": [
                "Jon Watts"
              ],
              "Anggaran": 200,
              "Penulis": [
                "Chris McKenna",
                "Erik Sommers"
              ],
              "Sinopsis": "\n  <p>Mengisahkan tentang kegelisahan Peter Parker yang diperankan Tom Holland karena difitnah. Mysterio, yang diperankan oleh Jake Gyllenhaal adalah orang yang memfitnah Parker dan akhirnya mati terlebih dahulu sebelum masalah bisa diselesaikan.\nMeski sudah dinyatakan meninggal dunia, namun fitnah yang diberikan Mysterio kepada Peter terus berkembang ke publik dan membuat munculnya spekulasi miring kepada Peter Parker.</p>\n\n<p>Tudingan demi tudingan yang membongkar identitas Parker pun kian memanas karena media setempat, yakni koran The Daily Bugle yang dipimpin J Jonah Jameson (JK Simmons) ikut memberitakan Parker dan menyebutkan sebagai dalang dari pembunuhan Mysterio.\nKarena tudingan yang ditujukan padanya itu, Parker pun mulai kehilangan privasi danmerasa tersudutkan. Bahkan, rumahnya setiap hari selalu menjadi objek amatan media dan masyarakat setempat.\n</p>\n<p>Meski tak ada kaitannya dengan hubungan Parker dan MJ (Zendaya), namun secara tak langsung rumor yang memanas di publik memengaruhi hubunga mereka yang masih berusia seumur jagung. Parker pun kemudian mulai mencari ide untuk bisa meluruskan masalah yang kian berkembang itu.\nIa kemudian membuka lintas semesta dan mendatangi Doctor Strange (Benedict Cumberbatch) yang pernah sama-sama berjuang melawan Thanos. Parker meminta bantuan Strange agar membuat masyarakat lupa jika dirinya adalah Spiderman.</p>\n<p>Strange sebelumnya sudah pernah diberi peringatan oleh Wong (Benedict Wong), tetapi dirinya tetap memilih membantu Peter Parker dan mulai merapalkan mantra. Baru akan dibantu, Parker justru berubah pikiran dan membuat strange marah dan malah salah dalam merapal mantra.\nKesalahan ini membuat batas lintas semesta terbuka dan menarik sejumlah pihak dari semesta lain masuk dalam semesta yang saat ini dihuni Peter dan Strange. Makhluk-makhluk tersebut kemudian memburu Peter Parker, padahal sebelumnya mereka tidaklah mengenal satu sama lain.\nDoctor Strange kemudian memerintahkan Parker mengumpulkan mahluk-mahluk tersebut untuk nantinya dikembalikan ke alam asli mereka. Namun dalam perjalannya, tentu saja tidak semudah itu. Parker terus mendapatkan tantangan demi mengembalikan semesta yang seharusnya.</p>",
              "Gambar": "https://cdn.cgv.id/uploads/movie/compressed/21021900.jpg"
            },
            {
              "Judul": "Titanic",
              "Genre" : "Romance",
              "Tanggal_liris": "1-09-1997",
              "pameran": [
                "Leonardo DiCaprio",
                "Kate Winslet",
                "Billy Zane",
                "Kathy Bates",
                "Gloria Stuart",
                "Victor Garber"
              ],
              "Durasi": 194,
              "Sutradara": [
                "James Cameron"
              ],
              "Anggaran": 200,
              "Penulis": [
                "James Cameron"
              ],
              "Sinopsis": "Berawal dari kisah pencarian harta karun seorang Brock Lovett dan timnya. Dengan objek kapal RMS Titanic yang dipercaya menyimpan Heart Of The Oceans, sebuah kalung berlian yang terkubur di dalam bangkai kapal raksasa tersebut. Namun, nyatanya semua usaha mereka mengulik kapal yang telah tenggelam bertahun-tahun itu tak membuahkan hasil. Mereka hanya menemui sebuah peti yang terdapat lukisan seorang wanita memakai kalung berlian yang dicari. Siapakah wanita itu? ",
              "Gambar": "https://upload.wikimedia.org/wikipedia/id/1/19/Titanic_%28Official_Film_Poster%29.png"
            }, {
              
              "Judul": "Hotel Transylvania: Transformania ",
              "Genre" : "Comedy",
              "Tanggal_liris": "12-01-2022",
              "pameran": [
                	
                "Andy Samberg",
                "Selena Gomez",
                "Kathryn Hahn"
              ],
              "Durasi": 148,
              "Sutradara": [
                	"Derek Drymon","Jennifer Kluska"
              ],
              "Anggaran": 8.3 ,
              "Penulis": [
                "Genndy Tartakovsky"
              ],
              "Sinopsis": 
              `Ketika penemuan misterius Van Helsing, "Monsterfication Ray", menjadi kacau, Drac dan teman-teman monsternya semuanya berubah menjadi manusia, dan Johnny menjadi monster! Dalam tubuh baru mereka yang tidak serasi, Drac, kehilangan kekuatannya, dan Johnny yang bersemangat, mencintai kehidupannya sebagai monster. Mereka harus bekerja sama dan berlomba melintasi dunia untuk menemukan obat sebelum terlambat, dan sebelum mereka saling membuat gila.

              `,
              "Gambar": "https://upload.wikimedia.org/wikipedia/en/8/8b/Hotel_Transylvania_Transformania.jpg"
            }
          ]
    }),
    actions : {
        menambahkanFilm(dataBaru) {
            this.film.push(dataBaru)
        },
        dapatDataFilm(Genres, Search) {
          let a = Genres === "all" ? this.film : this.film.filter( fil =>  fil.Genre == Genres )
          if((!Search||Search.length == 0)) {
            return a
          }
          let regex = new RegExp(Search.trim(),'i');
          return a.filter(fil => fil.Judul.search(regex) != -1)

          
        }
    }
})