<template>
    <div v-for="(fil, name) in datafilm" :key="name" >
        <li v-if="name !== 'Gambar'">
            {{name}} : {{fil}}
        </li>
    </div>
    <li>
        Gambar :
        <br><br>
        <img :src="datafilm.Gambar"/>
    </li>
   
    
</template>
<script>
export default {
   props : {
       datafilm : Array
   },created() {
       console.log(this.datafilm)
   }
   ,methods : {
       consoledata() {
           console.log(this.datafilm)
       }
   }
}
</script>
<style scoped>
    * {
        font-family: 'Courier New', Courier, monospace;
        text-align: left;
    }
    .li-awal {
        font-weight: bold;
    }
</style>