<script setup>
import { RouterLink } from "vue-router";
import { dataFilm } from "../store/dataFilm";

</script>

<template>
<div>

  <h1>Menambahkan Data Film</h1>
  <div class="container">

  <form>
    <label class="tips"
      >Untuk Pameran, Sutradara, dan Penulis, harap dipisahkan dengan tanda koma(,)</label>

    <div class="form-floating mb-3">
      <input  ref="Judul"
        type="text"
        class="form-control"
        id="floatingInput"
       
        placeholder="Judul"
        required
      />
      <label for="floatingInput">Judul</label>
    </div>
    <div class="form-floating mb-3">
      <select  ref="Genre" class="form-select" aria-label="Default select example" >
        <option value="Action" selected>Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Romance">Romance</option>
      </select>
      <label for="floatingInput">Genre</label>
    </div>
    <div class="form-floating mb-3">
      <input
       ref="Tanggal_liris"
        type="date"
        class="form-control"
        id="floatingPassword"
        placeholder="Tanggal Liris"
      
        required
      />
      <label for="floatingPassword">Tanggal Liris</label>
    </div>
    <div class="form-floating mb-3">
      <input
         ref="Pameran"

        type="text"
        class="form-control"
        id="floatingPassword"
        placeholder="Pameran"
       
        required
      />
      <label for="floatingPassword">Pameran</label>
    </div>
    <div class="form-floating mb-3">
      <input
       ref="Durasi"
        type="number"
        class="form-control"
        id="floatingPassword"
        placeholder="Durasi"
       
        required
      />
      <label for="floatingPassword">Durasi</label>
    </div>
    <div class="form-floating mb-3">
      <input
       ref="Sutradara"
        type="text"
        class="form-control"
        id="floatingPassword"
        placeholder="Sutradara"
       
        required
      />
      <label for="floatingPassword">Sutradara</label>
    </div>
    <div class="form-floating mb-3">
      <input
       ref="Anggaran"

        type="number"
        class="form-control"
        id="floatingPassword"
        placeholder="Anggaran"
        
        required
      />
      <label for="floatingPassword">Anggaran</label>
    </div>
    <div class="form-floating mb-3">
      <input ref="Penulis"
        type="text"
        class="form-control"
        id="floatingPassword"
        placeholder="Penulis"
       
        required
      />
      <label for="floatingPassword">Penulis</label>
    </div>
    <div class="form-floating mb-3">
      <textarea
       ref="Sinopsis"
        type="text"
        class="form-control"
        id="floatingPassword"
        placeholder="Sinopsis"
       
        required
      />
      <label for="floatingPassword">Sinopsis</label>
    </div>
    <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="gambar" value="url" checked>
    <label class="form-check-label" for="flexRadioDefault1">
      Url
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="gambar" value="file" >
    <label class="form-check-label" for="flexRadioDefault2">
      Import from file
    </label>
  </div>
    
    <div class="form-group mb-5" v-if="gambar == 'file'">
      <div class="form-floating mb-3">
        <label for="gambarFile" class="file form-control">{{!namaGambar ? "Masukkan Gambar" : namaGambar}}</label>
        <input
         
          type="file"
          accept="image"
          class="form-control"
          name="gambarFile"
          id="gambarFile"
          placeholder="URL"
          @change="uploadImage"
          required
        />
        <label for="gambarFile">Gambar</label>
      </div>
    </div>
    <div class="form-group mb-5" v-if="gambar == 'url'">
      <div class="form-floating mb-3">
        <input
         ref="Gambar"
          type="url"
          class="form-control"
          id="floatingPassword"
          placeholder="URL"
         
          required
        />
        <label for="floatingPassword">Gambar</label>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
        />
      </symbol>
      <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
        <path
          d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
        />
      </symbol>
      <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path
          d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </symbol>
    </svg>
    <div
      v-if="alert_hide"
      class="alert alert-primary d-flex align-items-center"
      role="alert"
    >
      <svg
        class="bi flex-shrink-0 me-2"
        width="24"
        height="24"
        role="img"
        aria-label="Info:"
      >
        <use xlink:href="#info-fill" />
      </svg>
      <div>Anda berhasil, silahkan tunggu Beberapa saat</div>
    </div>
    <div v-if="salah" class="alert alert-danger d-flex align-items-center" role="alert">
      <svg
        class="bi flex-shrink-0 me-2"
        width="24"
        height="24"
        role="img"
        aria-label="Danger:"
      >
        <use xlink:href="#exclamation-triangle-fill" />
      </svg>
      <div>Semua Form Harus Diisi</div>
    </div>
    <div v-if="!alert_hide" class="back">
      <button @click="submit" class="btn btn-dark">Submit</button>
    </div>
  </form>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      salah: false,
      alert_hide: false,
      gambar : "url",
      namaGambar : "",
      isiGambar : ""
    };
  },
  methods: {
   
    isEmpty(str) {
    return (!str || str.length === 0)
},
    uploadImage(e){
                const image = e.target.files[0];
               
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                   this.namaGambar = image.name
                    this.isiGambar = e.target.result;
                    console.log(this.namaGambar)
                    console.log(this.isiGambar);
                };
            },
    cek() {
      console.log(this.Genre)
    },
    submit(e) {
      e.preventDefault();
      let Judul = this.$refs.Judul.value
      let Genre = this.$refs.Genre.value
      let Anggaran = this.$refs.Anggaran.value
      let Sinopsis = this.$refs.Sinopsis.value
      let Penulis = this.$refs.Penulis.value
      let Gambar = {
        nama : this.gambar == "url" ? this.isiGambar : this.namaGambar,
        isi : this.gambar == "url" ? this.$refs.Gambar.value : this.isiGambar
      }
      let Tanggal_liris = this.$refs.Tanggal_liris.value
      let Durasi = this.$refs.Durasi.value
      let Pameran = this.$refs.Pameran.value
      let Sutradara = this.$refs.Sutradara.value
      if (
        this.isEmpty(Judul) ||
        this.isEmpty(Tanggal_liris) ||
        this.isEmpty(Pameran) ||
        this.isEmpty(Durasi) ||
        this.isEmpty(Sutradara) ||
        this.isEmpty(Anggaran) ||
        this.isEmpty(Penulis) ||
        this.isEmpty(Sinopsis) ||
        this.isEmpty(Gambar)
      ) {
        this.salah = true;
        return;
      }
      this.salah = false;
      this.alert_hide = true;
      let tanggal = new Date();
   
      tanggal.getDate() + "-" + tanggal.getMonth() + "-" + tanggal.getFullYear();
      tanggal = tanggal;
      Pameran = Pameran.split(",");
      Sutradara = Sutradara.split(",");
      Penulis = Penulis.split(",");
      let ids = dataFilm().mendapatkanidterakhir
      let hasil = {
        id : ids,
        Judul: Judul,
        Genre : Genre,
        Tanggal_liris: Tanggal_liris,
        pameran: Pameran,
        Durasi: Number(Durasi),
        Sutradara: Sutradara,
        Anggaran: Number(Anggaran),
        Penulis: Penulis,
        Sinopsis: Sinopsis,
        Gambar: Gambar,
      };
      dataFilm().menambahkanFilm(hasil);
     
          //   fetch("http://localhost:4000/tambah", {
            //     method : "POST",
          //     mode: "cors",
          //    headers: {
            //    "Content-type": "application/json; charset=UTF-8"
          //   }   ,
          //     body : JSON.stringify(hasil)
          // })
          // .then(res =>  res.json())
          // .then(data => {
            //     console.log(data)
          // }
          // ).catch(err => {
            //     console.log(err)
          // })
            setTimeout(() => {
              this.$router.push("/");
            }, 2000);
          
    },
  },
};
</script>

<style scoped src="../assets/modiDataStyle.css">


</style>
