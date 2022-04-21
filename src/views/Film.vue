<script setup>
import Modal from "../components/Modal.vue";
import { RouterLink } from "vue-router";

//import DataFilm from "./components/DataFilm.vue";
</script>

<template>
 
  <div class="utama2">
    <h1>Data-data Film</h1>
    <h4 style="margin-left:5%">Genre : {{search().getGenre}} </h4>
    <div class="container">
      <div v-for="(fil, ind) in film" :key="ind" class="cardFilm">
          <img @click="mengaktifkanmodal(fil)" :src="fil.Gambar" :alt="fil.Gambar" class="datafil" />
      </div>
    </div>
  </div>

  <Modal @modaloffs="modaloff" v-if="modal" />
  
</template>

<script>
import { dataFilm } from "../store/dataFilm";
import { computed } from '@vue/runtime-core';
import { search } from "../store/dataFilm";

export default {
  created() {
     setInterval(()=> {
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
      this.film = dataFilm().dapatDataFilm(search().getGenre, search().getsearch);
      console.log(search().getsearch)
    }, 500  )
    
  },
  provide() {
    return {
      datafilm : computed(() => this.film1)
    }
  },
  data() {
    return {
      film : {},
      film1: {
        
        Judul: "",
        Genre : "",
        Tanggal_liris: "",
        pameran: [],
        durasi: 0,
        Sutradara: "",
        Anggaran: 0,
        Penulis: [],
        sinopsis: "",
        Gambar: "",
      },
      modal: false,
    };
  },
  methods: {
   
    cek() {
      console.log(this.film);
    },
    modaloff() {
      this.modal = false;
    },
    mengaktifkanmodal(val) {
      this.modal = true;
      this.film1.Judul = val.Judul;
      this.film1.Genre = val.Genre;
      this.film1.Tanggal_liris = val.Tanggal_liris;
      this.film1.pameran = val.pameran;
      this.film1.durasi = val.Durasi;
      this.film1.Sutradara = val.Sutradara;
      this.film1.Anggaran = val.Anggaran;
      this.film1.Penulis = val.Penulis;
      this.film1.Sinopsis = val.Sinopsis;
      this.film1.Gambar = val.Gambar;
      console.log(this.film1);
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

div.add2 > * {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  position: fixed;
  z-index: -1;
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

.modal {
  z-index: 98;
  background-color: black;
}


div.form-check.form-switch {
  position : absolute;
  top : 0;
  right : 0;
}
img.datafil {
  cursor: pointer;
  width: 200px;
  height: 300px;
  border-radius: 10% 10%;
  margin: 10px;
  float: left;
  box-shadow: 5px 10px 10px 5px var(--shadow);
}


</style>
