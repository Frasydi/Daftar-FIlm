<template>
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <div class="jumbotron myjumbo">
                <div class="container">
                    <h1 class="display-2 dsp">Selamat Datang di Taras Film</h1>
                    <p class="lead">Kami adalah perusahaan yang menyajikan film-film terbaik, baik dalam maupun di luar negeri supaya dapat ditonton oleh Anda sekalian secara cuma-cuma</p>
                </div>
            </div>
            </div>
            <div class="carousel-item">
            <div class="jumbotron myjumbo d-block w-100">
                <div class="container">
                    <h1 class="display-4 dsp">Untuk Masuk ke List Film buatan kami. Silahkan Tekan Tombol di bawah ini</h1>
                    <div class="tolist">
                    <router-link to="/film">
                    <button class="btn btn-link tolist"> Ke link list kami </button>
                    </router-link>
                    </div>
                </div>
            </div>
            </div>
            <div class="carousel-item">
                <div class="jumbotron myjumbo d-block w-100">
                <div class="container">
                    <h1 class="display-4 dsp">Sementara untuk masuk ke List Film buatan TMDB. Silahkan Tekan Tombol di bawah ini</h1>
                    <div class="tolist">
                    <router-link to="/tmdb">
                    <button class="btn btn-link tolist"> Ke link TMDB list </button>
                    </router-link>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>

        

    </div>
</template>

<style>
div.tolist {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
    .myjumbo {
        margin-top: -5%;
        padding-top: 20%;
        height: 100%;
        width : 100%;
        background: var(--gradient);
        padding-bottom: 21%;
    }
    
    .myjumbo>.container>h1.display-4 {
        width: 100%;
        text-align: center;
    }
    .myjumbo>.container>p {
        width: 100%;
        text-align: center;
    }
</style>