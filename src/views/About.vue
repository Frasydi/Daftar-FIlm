<template>
<div>
    <h1>About</h1>
    <div class="isiAbout">
        <p class="isiKonten">
            Ini adalah website yang menunjukkan data-data dari film-film. Kalian dapat menambahkan data film ke list, maupun mengedit atau menghapusnya. 
        </p>
        <h3>Anggota</h3>
        <div class="uls">
            <div class="listNama" v-for="ang in anggota" :key="ang" > {{ang}} </div>
        </div>
    </div>
    <div class="abgroup">
        <div class="abitem">
            <h5>Git Hub</h5>
            <a class="gamicon" @click="redirect('https://github.com/Frasydi/Daftar-FIlm')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
            </a>
        </div>
    </div>
    
        
        
</div>
    
</template>

<script>
export default {
    methods : {
        redirect(url) {
           var a = document.createElement('a');
            a.target="_blank";
            a.href=url;
            a.click();
        }
    },data() {
        return {
            anggota : ['Muhammad Fachri Rasyidi', "Ikbal", "Ibnul Imamul Muttaqin", "Haedir"]
        }
    }
}
</script>

<style>
.isiAbout {
    margin : auto;
    width : 90%;
    height: 50vh;
    background-color: rgb(105, 105, 105);
    border-width: 2px;
}
.isiAbout>h3 {
    font-size: large;
    font-weight: bold;
    text-align: center;
}
.isiAbout {
    color : var(--textcolor)
}
.isiAbout>div.uls {
    display: flex;
    flex-direction: column;
    gap : 4%;
    font-size: larger;
    font-weight: bold;
    text-align: center;

}

.isiAbout>p {
    font-size: x-large;
    font-weight: bolder;
    padding-top : 5%;
    text-align: center;
}
.abitem {
    width:100px;
    height:100px;
    
}
.abgroup > * {
    margin : 3%;
}
.abitem>h5 {
    text-align: center;
}
.abitem>* {
    color : var(--textcolor)
}
a.gamicon:hover {
    cursor : pointer;
    color : var(--notactivecolor)
}
.abgroup {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>