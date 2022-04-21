<template>
<div class="utama">
    <button class="keluar" @click="mematikanmodal">X</button>
    <div class="card" >
        <div class="container-fluit">
           <div class="container texts">
<span>Judul</span>&emsp;&emsp;&emsp;&emsp;: &nbsp;{{datafilm.Judul}}<br>
<span>Genre</span>&emsp;&emsp;&emsp;&emsp;: &nbsp;{{datafilm.Genre}}<br>
<span>Tanggal Liris </span>&nbsp;: &nbsp; {{datafilm.Tanggal_liris}}  <br>
<span>Pameran </span>&emsp;&emsp;: &nbsp;{{datafilm.pameran.join(", ")}}<br>
<span>durasi </span>&emsp;&emsp;&emsp; :  &nbsp; {{datafilm.durasi}} menit<br>
<span>Sutradara </span>&emsp;&nbsp; :  &nbsp; {{datafilm.Sutradara.join(", ")}}  <br>
<span>Anggaran </span>&emsp;&nbsp; :  &nbsp; ${{datafilm.Anggaran}} juta  <br>
<span>Penulis </span>&emsp;&emsp;&nbsp; :  &nbsp; {{datafilm.Penulis.join(", ")}}  <br>
<span>Sinopsis </span> : <p class="sinopsis" v-html="datafilm.Sinopsis"> </p> <br>


            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        inject : ["datafilm"],
        methods: {
            mematikanmodal() {
                console.log("dapat")
                this.$emit('modaloffs')
            }
        },
        props : {
            dark : Boolean
        }
        
    }
</script>

<style scoped>
.dark {
    --backcolor : #1a1a1d;
    --textcolor : aliceblue;
}
.light {
  --backcolor : aliceblue;
    --textcolor : #1a1a1d;
}
* {
    color : var(--textcolor)
}

.pameran {
    width: 60%;
}
p {
  margin: 0;
  text-indent: 3ch;
}

.utama {
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
    position : fixed;
    background-color: rgba(0, 0, 0, 0.3);
    overflow: hidden;
}
.sinopsis {
    overflow: auto;
    height: 270px;
    width: 100%;
}
img {
    
    width : 408px;
    height : 460px;
    border-radius: 10% 10% 0 0;
}
.container {
    text-align: center;
}
span {
    font-weight:bold;
}
.container.texts {
    white-space: pre-wrap;
    text-align: left;
}
.container.texts {
    margin-top: 3%;
}
.keluar {
    position :absolute;
    right : 0;
    border: none;
    font-size: medium;
    background-color: var(--backcolor);
}
.card {
    border: 1px 1px 1px black;
    
    z-index: auto;
    height: 90%;
    width:90%;
    top : 50%;
    left : 50%;
    transform: translate(-50%,-50%);
    background-color: var(--backcolor);
    
}
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
</style>