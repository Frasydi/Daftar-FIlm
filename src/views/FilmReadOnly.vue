<script setup>
import Modal2 from "../components/Modal2.vue";
import { RouterLink } from "vue-router";

//import DataFilm from "./components/DataFilm.vue";
</script>

<template>
 <div class="terutama2">

  <div class="utama2">
    <div class="container">
    <h1>Data-data Film Dari TMDB</h1>

    <div id="headerfilm">
    <div class="tombol">
    <a class="page" @click="pages(-1)" href="#" v-if="page > 1">Prev&emsp;</a>
    <a class="page"  @click="pages(1)" href="#">Next</a>
    </div>
    <h4>Page : {{page}} </h4>
    <form @submit.prevent="serch()" id="mencari2" >
        <input ref="dapatyangdicari" id="inputcari2"  class="form-control me-2" type="search" @keyup="serch()" @keydown="serch()" @change="serch()" placeholder="Search" aria-label="Search">
    </form>
    
    </div>
    <div class="container gambarFilm">
      <div v-for="(fil, ind) in film" :key="ind" class="cardFilm">
          <img @click="mengaktifkanmodal(fil)" :src="'https://image.tmdb.org/t/p/original'+fil.poster_path" :alt="fil.Gambar" class="datafil" />
      </div>
    </div>
    </div>
  </div>

  <Modal2 @modaloffs="modaloff" class="modal" :class="modalname" />

  
 </div>
</template>

<script>
import { dataFilm } from "../store/dataFilm";
import { computed } from '@vue/runtime-core';
import { search } from "../store/dataFilm";
import axios from "axios";
export default {
  created() {
   
    //  setInterval(()=> {
      //  fetch("http://localhost:4000?Genre="+search().getGenre+"&Search="+search().getsearch, {
      //         method : "GET",
      //         headers : {
      //             accept : "application/json"
      //         },
      //         mode: "cors"
      //     })
      //     .then(res =>  res.json())
      //     .then(data => {
      //         this.film =  data
      //     }
      //     ).catch(err => {
      //         console.log(err)
      //     })
      
      // console.log(search().getsearch)
    // }, 20  )
    this.trending()
    
  },

  provide() {
    return {
      datafilm : computed(() => this.film1)
    }
  },
  data() {
    return {
     
      modalname : "hidess",
      film : {},
      page : 1,
      film1: {
        id : 0,
        Judul: "",
        dewasa : "",
        Tanggal_liris: "",
        Popularitas: 0,
        Rating: 0,
        Tipe: "",
        Anggaran: 0,
        Sinopsis: "",
        Gambar: "",
        Poster: "",
      },
      modal: false,
    };
  },
  watch : {
    
  }
  ,
  methods: {
    mengantiGenre(genre) {
      search().changeGenre(genre)
      dataFilm().dapatDataFilm()
    },
    trending() {
        axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=8ef11dd9fd287eb025af8de966f79db9&language=en-US&page="+this.page)
        .then(res => this.film = res.data.results)
        
    },
    pages(vals) {
        this.page += vals
         if(!this.$refs.dapatyangdicari.value||this.$refs.dapatyangdicari.value.length === 0) {
                return this.trending()
        }
        let val = encodeURIComponent(this.$refs.dapatyangdicari.value)
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=8ef11dd9fd287eb025af8de966f79db9&language=en-US&query="+val+"&page="+this.page)
        .then(res => this.film = res.data.results)
    },
   serch() {
      // search().changeSearch(this.cari)
      if(!this.$refs.dapatyangdicari.value||this.$refs.dapatyangdicari.value.length === 0) {
                return this.trending()
        }
        let val = encodeURIComponent(this.$refs.dapatyangdicari.value)
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=8ef11dd9fd287eb025af8de966f79db9&language=id&query="+val+"&page="+this.page)
        .then(res => this.film = res.data.results)
        
    },
    cek() {
      console.log(this.film);
    },
    modaloff() {
      
      this.modalname = "hidess"
    },
    mengaktifkanmodal(val) {
      

      let tanggal = new Date(val.release_date)

      this.modal = true;
      this.film1.id = val.id
      this.film1.Judul = val.title;
      // this.film1.Genre = val.Genre;
      this.film1.dewasa = val.adults ? "ya" : "tidak";
      this.film1.Tanggal_liris = tanggal.getDate()+"-"+tanggal.getMonth()+"-"+tanggal.getFullYear();
      this.film1.Popularitas = val.popularity;
      this.film1.Rating = val.vote_average;
      this.film1.Tipe = val.media_type;
      this.film1.Sinopsis = val.overview;
      this.film1.Gambar = val.poster_path;
      this.film1.Poster = val.backdrop_path;
      this.modalname = "show"
    },
  },
  computed: {
  
    cekifmodalisactive() {
      if (modal) {
        document.querySelector("body").style.overflow = hidden;
      }
    },
  },
};
</script>
<style>
#headerfilm {
  display: flex;
  
}

.page {
    color: var(--textcolor);
    text-decoration: none;
}

.marginBaru {
  width : 91%;
}
#inputcari2 {
    width: 100%;
}
#mencari2 {
    width: 50%;
}
 
div.add2 > * {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  position: fixed;
  z-index: -1;
}

.tambahFilm {
  color : var(--textcolor)
}

.tambahFilm>* {
  transition: all 1s;
}

.add {
  display: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%), translateY(-50%);
}
h1 {
  text-align: center;
  
}
h4 {
  margin-left:5%;
}
.modal {
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
  
}

.modal.hidess {
  animation:  fadeout 3s forwards;
}
.modal.show {
  display: block;
  
}
div.utama.modal.show>div.card {
  animation: fadein 1s  forwards;
}
@keyframes fadein {
  from {
    transform: translate(-50%, 200%);}
  to {
    transform: translate(-50%,-50%);}
}
  @keyframes fadeout {
    to {transform: translate(-50%, 200%);}
  }

div.form-check.form-switch {
  position : absolute;
  top : 0;
  right : 0;
}
:root {
  --cardsize : 200px;
  --cardheight: 300px;
}

@keyframes hoverin {
      to {
        transform: scale(104%, 104%);
      }
    }
    @keyframes hoverout {
      to {
        transform: scale(100%, 100%)
      }
    }


@media only screen and (max-width:600px) {
  #mencari2 {
      width: 70%;
      height: 7vh;
      margin-left: 30%;
  }
  
  
}

</style>
