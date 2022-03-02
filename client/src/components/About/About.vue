<template>
  <div class="about">
	  <Header/>
        <div class="container text-center">
			<br>
			<b><i><h2 class="thin">The best place to tell people why we're here</h2></i></b>
			<!-- <img src="https://www.svgrepo.com/show/3978/presenter-talking-about-people-on-a-screen.svg" alt=""/> -->
			<p class="text-muted">
			The difference between involvement and commitment is like an eggs-and-ham breakfast:<br>
			the chicken was involved, the pig was committed.
			</p>
		</div>
    <div class="jumbotron top-space">
		<div class="container">
			<b><i><h3 class="text-center thin">~ What makes this community tick? ~</h3></i></b><br/><br/>
			<div class="row">
				<div class="col-md-3 col-sm-6 highlight">
					<div class="h-caption"><h4>Company</h4></div>
					<div class="h-body text-center">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquid adipisci aspernatur. Soluta quisquam dignissimos earum quasi voluptate. Amet, dignissimos, tenetur vitae dolor quam iusto assumenda hic reprehenderit?</p>
					</div>
				</div>
				<div class="col-md-3 col-sm-6 highlight">
					<div class="h-caption"><h4><i class="fa fa-flash fa-5"></i>Project</h4></div>
					<div class="h-body text-center">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, commodi, sequi quis ad fugit omnis cumque a libero error nesciunt molestiae repellat quos perferendis numquam quibusdam rerum repellendus laboriosam reprehenderit! </p>
					</div>
				</div>
				<div class="col-md-3 col-sm-6 highlight">
					<div class="h-caption"><h4><i class="fa fa-heart fa-5"></i>Legacy</h4></div>
					<div class="h-body text-center">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, vitae, perferendis, perspiciatis nobis voluptate quod illum soluta minima ipsam ratione quia numquam eveniet eum reprehenderit dolorem dicta nesciunt corporis?</p>
					</div>
				</div>
				<div class="col-md-3 col-sm-6 highlight">
					<div class="h-caption"><h4><i class="fa fa-smile-o fa-5"></i>Revenue</h4></div>
					<div class="h-body text-center">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, excepturi, maiores, dolorem quasi reprehenderit illo accusamus nulla minima repudiandae quas ducimus reiciendis odio sequi atque temporibus facere corporis eos expedita? </p>
					</div>
				</div>
			</div> 
		</div>
	</div>
	<Footer/>
  </div>
</template>

<script>
import Header from '../Header.vue';
import Footer from '../Footer.vue';

    export default{
        name: "About",
        components: {
			Header,
			Footer
        }
    }
</script>

<style>
	
</style>