<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import { dataFilm, lampu } from './store/dataFilm';
    import { search } from './store/dataFilm';
</script>

<template>
<div class="app-main">
<nav class="navbar navbar-expand-lg navbar-light" id="mynavbar">
  <div class="container">
    <h6 class="navbar-brand">FILM</h6>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink  class="nav-link active" to="/"> Home </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink  class="nav-link active" to="/film"> My List </RouterLink>
        </li>
         <li class="nav-item">
          <RouterLink to="/tmdb" class="nav-link">
          TMDB
          </RouterLink>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Genre
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#" @click="mengantiGenre('all')">All</a></li>
            <li><a class="dropdown-item" href="#" @click="mengantiGenre('Action')">Action</a></li>
            <li><a class="dropdown-item" href="#" @click="mengantiGenre('Romance')">Romance</a></li>
            <li><a class="dropdown-item" href="#" @click="mengantiGenre('Comedy')">Comedy</a></li>
          </ul>
        </li>
        
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link">
          About me
          </RouterLink>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Setting
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li class="dropdown-item">
            <form class="form-check form-switch" id="lampus">
            <input class="form-check-input" :checked="lampu().lampu" @change="lampu().Darkmode()" type="checkbox" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault">{{lampu().cekifdark()}}</label>
            </form>

            </li>
            
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>


  <router-view v-slot="{ Component}">
  <transition :name="transisitonname" mode="out-in">
    <component :is="Component"  />
  </transition>
</router-view>
</div>
</template>



<script>
export default {
  
  data() {
    return {
      transisitonname : "",
      
    }
  },
  watch : {
    $route(to, from) {
      console.log(typeof from.meta.transition == 'undefined')
      this.transisitonname = typeof from.meta.transition == 'undefined' ? 'routerkanankiri' :from.meta.transition >to.meta.transition ? 'routerkanankiri' : 'routerkirikanan'
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
    vm.prevRoute = from.path
  })
  },
  methods : {
    mengantiGenre(genre) {
      search().changeGenre(genre)
      dataFilm().dapatDataFilm()
    },
    transname() {
      
      console.log(this.$route.fullPath) 
    }
  }
}
</script>

 <style>
 
 .routerkirikanan-enter-from {
   opacity: 0;
   transform: translateX(100px);
 }

 .routerkirikanan-enter-active {
   transition: all 0.4s ease-out;
 }

 .routerkirikanan-leave-to {
   opacity : 0;
   transform: translateX(-100px);
 }
 .routerkirikanan-leave-active {
   transition: all 0.4s ease-in;
 }


 .routerkanankiri-enter-from {
   opacity: 0;
   transform: translateX(-100px);
 }

 .routerkanankiri-enter-active {
   transition: all 0.4s ease-out;
 }

 .routerkanankiri-leave-to {
   opacity : 0;
   transform: translateX(100px);
   
 }
 .routerkanankiri-leave-active {
   transition: all 0.4s ease-in;
 }


#mynavbar {
  background: rgba(255, 255, 255, 0.2);
}
 .dark {
   
    --backcolor : #1a1a1d;
    --backcolor2 : #1a1a1d;
    --textcolor : aliceblue;
    --inputcolor : #1a1a1d;
    --navicon : url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    --notactivecolor : rgba(255,255,255,0.6);
}
.light {
  --gradient : linear-gradient( #ffafbd ,#ffc3a0);
  --backcolor2 : linear-gradient(#a1c4fd, #c2e9fb);
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
.dropdown-menu.show>li.dropdown-item,.dropdown-menu.show li.dropdown-item .form-check.form-switch .form-check-label {
  color : #1a1a1d
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
.nav-link:hover {
  animation : navselected 0.2s forwards ease-out
}
@keyframes navselected {
  to {
    transform : scale(105%, 105%)
  }
}
.form-check-label {
  color : var(--textcolor)
}
.form-check-input:checked {
    background-color: #1a1a1d;
    border-color: aliceblue;
}
  html {
    height : 100%;
  }
  body{
      background-image: var(--backcolor2);
      height: 100%;
      margin: 0;
      background-repeat: no-repeat;
      background-attachment: fixed;
      
  }
  
 </style>
