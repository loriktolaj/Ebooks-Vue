<template>
 <div>
    <section>
	<div class="wrapper">
	 <h1 class="gamma lato thin uppercase ls-xlarge">
		 We Are<br>
		 <span class="open-sans tera ls-xlarge bold">Here</span><br>
		 <span class="epsilon ls-medium">For you</span>
		</h1>
	 </div>
	</section>
    <!-- <div class="py-1 bg-light">
        <div class="container px-5 my-5">
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-5 col-xl-7">
                    <div class="text-center">
                        <div class="fs-4 mb-4 fst-arial"><i>“And above all, watch with glittering eyes the whole world around you because the greatest secrets are always hidden in the most unlikely places. Those who don't believe in magic will never find it...”</i> - <b>Roald Dahl</b></div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
  </div> 
</template>

<script>
export default {
    name: "Header",
    components: {
        
    }
}
</script>

<style scoped>
        section{
        height: 500px;
        padding: 3rem 0;
        position: relative;
        background-image: url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80);
    }
    .wrapper{
        max-width: 53.33rem;
        margin: 0 auto;
        position: relative;
        z-index: 10;
        transform: translateY(-50%);
        top:50%;
        text-align: center;
    }
    .thin{font-weight: 100;}
    .lato{font-family: 'Lato'}
    .epsilon {
    font-size: 1.16667rem; 
    margin-bottom: 1.41429rem;
    }
    .gamma {
    font-size: 2rem; 
    margin-bottom: 0.825rem;

    }
    .tera {
    font-size: 6.5rem; 
    margin-bottom: 0.25385rem;
    }
    h1 {
    line-height: 1;
    margin-top: 0;
    color: #fff;
        display: inline-block;
        position: relative;
    }
    .ls-xlarge{letter-spacing: 12px;}
    .ls-medium{letter-spacing: 4px;}
</style>