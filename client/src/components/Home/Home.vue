<template>
 <div class="home">
    <body>
        <header class="bg-dark py-5">
            <div class="container px-5">
                <div class="row gx-5 align-items-center justify-content-center">
                    <div class="col-lg-5 col-xl-7 col-xxl-6">
                        <div class="my-5 text-center text-xl-start">
                            <h1 class="display-5 fw-bolder text-white mb-2">E-Books</h1>
                            <p class="lead fw-normal text-white-50 mb-4">Board in and let your imagination reach imppecable heights meant to open new doors & opportunities to challenge your lives!</p>
                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                <a class="btn btn-primary btn-lg px-4 me-sm-1" href="/#/register">Get Started</a>
                                <a class="btn btn-outline-light btn-lg px-4" href="/#/books">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src="https://media.istockphoto.com/photos/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-picture-id1222550815?b=1&k=20&m=1222550815&s=170667a&w=0&h=MTxBeBrrrYtdlpzhMpD1edwLYQf3OPgkNeDEgIzYJww=" alt="..." /></div>
                </div>
            </div>
        </header>
        <div class="py-1 bg-light">
            <div class="container px-3 my-3">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-2 col-xl-7">
                        <div class="text-center">
                            <div class="fs-4 mb-4 fst-arial"><i>“And above all, watch with glittering eyes the whole world around you because the greatest secrets are always hidden in the most unlikely places. Those who don't believe in magic will never find it...”</i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
   <!-- <Header/> -->
    <Footer/>
 </div>
</template>

<style>
  @import 'Home.css';
</style>

<script>
//import Header from '../Header.vue';
import Footer from '../Footer.vue';

export default {
  name: "Home",
  components: {
    //Header,
    Footer
  }
}
</script>

<style>

</style>