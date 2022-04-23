<script setup> 
import { dataFilm } from '../store/dataFilm';

</script>
<template>
<div>
<div class="caridatabase">
<input ref="search" type="text" @keyup="cari" @change="cari" @keydown="cari" id="">
</div>
<pre>
    {{JSON.stringify(data, null, 2)}}
</pre>
</div>
</template>

<script>

import axios from "axios"

export default {
    created() {
       this.trending()
    },data() {
        return {
            data : {},
            api_key : "8ef11dd9fd287eb025af8de966f79db9" 
        }
    },methods : {
        cari() {
            if(!this.$refs.search.value||this.$refs.search.value.length === 0) {
                return this.trending()
            }
            let val = encodeURIComponent(this.$refs.search.value)
            axios.get("https://api.themoviedb.org/3/search/movie?api_key=8ef11dd9fd287eb025af8de966f79db9&language=id&query="+val)
            .then(res => this.data = res.data)
            console.log(val)
        },
        trending() {
        axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=8ef11dd9fd287eb025af8de966f79db9&language=id&page=1")
        .then(res => this.data = res.data)
        console.log(this.data)
    }
    },
}
</script>
<style scoped>
    div.caridatabase {
        margin: auto;
        text-align: center;
    }
</style>