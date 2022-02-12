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
  </div>
</template>

<script>
export default {

}
</script>

<style>
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