<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import { lampu } from './store/dataFilm';
    import { search } from './store/dataFilm';
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#">FILM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/"> Home </RouterLink>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Genre
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#" @click="All()">All</a></li>
            <li><a class="dropdown-item" href="#" @click="Action()">Action</a></li>
            <li><a class="dropdown-item" href="#" @click="Romance()">Romance</a></li>
            <li><a class="dropdown-item" href="#" @click="Comedy()">Comedy</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <RouterLink to="/add" class="nav-link">
          Tambah Film
          </RouterLink>
        </li>
        <form class="d-flex">
          <!-- ref="cari" -->
        <input class="form-control me-2" type="search" v-model="cari"   @keyup="serch()" @keydown="serch(this)" @change="serch()"  placeholder="Search" aria-label="Search">
        </form>
        <li class="form-check form-switch">
        <input class="form-check-input" :checked="lampu().lampu" @change="lampu().Darkmode()" type="checkbox" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">{{lampu().cekifdark()}}</label>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  <RouterView/>
</template>

<script>
export default {
  created() {
  },
  data() {
    return {
      cari : ""
    }
  },
  methods : {
    serch() {
      
      search().changeSearch(this.cari)
      // search().changeSearch(this.$refs.cari.value)
    },
    All() {
      search().changeGenre("all")
      console.log(search().getGenre)
    },
    Action() {
      search().changeGenre("Action")
      console.log(search().getGenre)
    },
    Romance() {
      search().changeGenre("Romance")
      console.log(search().getGenre)
    },
    Comedy() {
      search().changeGenre("Comedy")
      console.log(search().getGenre)
    },
  }
}
</script>

 <style>
 
 .dark {
    --backcolor : #1a1a1d;
    --textcolor : aliceblue;
    --inputcolor : #1a1a1d;
    --navicon : url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    --notactivecolor : rgba(255,255,255,0.6);
}
.light {
  --backcolor : aliceblue;
    --textcolor : #1a1a1d;
    --inputcolor : rgb(255, 252, 246);
  --shadow : rgba(0, 0, 0, 0.3);
  --navicon : url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    --notactivecolor : rgba(0,0,0,0.6);
}
.dropdown-menu.show{
  animation : sizein 0.2s forwards
}
@keyframes sizein {
  from { transform: scale(-10%);  }
  to { transform: scale(100%); }
}
.navbar-light .navbar-nav .nav-link {
    color: var(--notactivecolor) ;
}
button.navbar-toggler > span.navbar-toggler-icon {
   background-image: var(--navicon) !important; 
}
* {
transition: 1s color;
  transition: 1s background;
}
h1,.navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .show>.nav-link,.navbar-light .navbar-brand,h4 {
  color : var(--textcolor)
}

form > input.form-control {
 background-color: var(--inputcolor);
  color: var(--textcolor);
}

.form-check-label {
  color : var(--textcolor)
}
.form-check-input:checked {
    background-color: #1a1a1d;
    border-color: aliceblue;
}
  body {
      background-color: var(--backcolor);
  }
  
 </style>
