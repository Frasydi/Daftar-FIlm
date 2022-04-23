<script setup>
import Modal from "../components/Modal.vue";
import { RouterLink } from "vue-router";

//import DataFilm from "./components/DataFilm.vue";
</script>

<template>
 <div>

  <div class="utama2">
    <div class="container">
    <h1>Data-data Film</h1>
    <div id="headerfilm">
    <h4>Genre : {{search().getGenre}} </h4>
    <form @submit.prevent="serch()" id="mencari"  class="d-flex">
        <input  class="form-control me-2" type="search" @keyup="serch()" @keydown="serch(this)" @change="serch()" placeholder="Search" aria-label="Search" ref="cari">
      </form>
    </div>
    <div id="headerfilm" class="container marginBaru">
    <RouterLink to="/add" class="tambahFilm"  >
    <div data-toggle="tooltip" data-placement="top" title="Tambah data film">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>
      
    </div>
    </RouterLink> 
    
    </div>
    <div class="container">
      <div v-for="(fil, ind) in film" :key="ind" class="cardFilm">
          <img @click="mengaktifkanmodal(fil)" :src="fil.Gambar" :alt="fil.Gambar" class="datafil" />
      </div>
    </div>
    </div>
  </div>

  <Modal @modaloffs="modaloff" class="modal" :class="modalname" />
  
 </div>
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
    }, 20  )
    
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
      film1: {
        id : 0,
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
   serch() {
      
      // search().changeSearch(this.cari)
      search().changeSearch(this.$refs.cari.value)
    },
    cek() {
      console.log(this.film);
    },
    modaloff() {
      
      this.modalname = "hidess"
    },
    mengaktifkanmodal(val) {
     
      this.modal = true;
      this.film1.id = val.id
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
      this.modalname = "show"
       console.log(this.film1);
      console.log(this.$refs.modalref.classList)
      
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

.marginBaru {
  width : 91%;
}

#mencari {
  width: 30%;
  margin-left: 50%;
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
  background-color: black;
  
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
img.datafil {
  cursor: pointer;
  --cardsize : 200px;
  --cardheight: 300px;
  width: var(--cardsize);
  height: var(--cardheight);
  border-radius: 10% 10%;
  margin: 10px;
  float: left;
  box-shadow: 5px 10px 10px 5px var(--shadow);
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
@media only screen and (min-width:600px) {
    img.datafil {
      animation : hoverout 0.4s forwards ease-out;
      animation-direction: reverse;
    }
    img.datafil:hover {
    animation: hoverin 0.4s forwards ease-out;
    }
    
}

@media only screen and (max-width:600px) {
  #mencari {
      width: 70%;
      height: 7vh;
      margin-left: 30%;
  }
  img.datafil {
    --cardsize: 100% !important;
    --cardheight : 80vmax;
     width: var(--cardsize);
     height: var(--cardheight);
  }
  img.datafil:hover {
    animation : hoverselect 0.5s forwards
  }
   @keyframes hoverselect {
      to {
        opacity: 50%;
      }
  }
  
}

</style>
