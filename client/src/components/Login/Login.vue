<template>
    <div class="center">
        <div class="container_register">
            <div class="text">Welcome back to E-Books</div><br/>
            <form @submit.prevent="loginUser" action="#" className="form">
                <div class="data">
                    <label for="username">Full name</label>
                    <input id="username" type="text" placeholder="Username" name="username" v-model="username"/> 
                </div>
                <div class="data">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Password" name="password" v-model="password"/> 
                </div>
                <div class="btn">
                    <div class="inner"></div>
                        <button type="submit">Login</button>
                    </div>
                <div className="signup-link">Not yet a member? <a href="#/register">Register now</a></div>
            </form>
        </div>
    </div>
</template>

<style>
  @import 'Login.css';
</style>

<script>
  import { mapActions } from 'vuex';
  export default {
      name: "Login",
      props: {
      },
      data(){
          return {
              username:"",
              password:""
          }
      },
      methods: {
      ...mapActions(["login"]),
      loginUser() {
        let user = {
          username: this.username,
          password: this.password
        };
        this.login(user)
          .then(res => {
            if (res.data.success) {
              this.$router.push("/Profile");
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  };
</script>
