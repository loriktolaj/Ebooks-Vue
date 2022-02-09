<template>
    <div class="center">
        <div class="container_register">
            <div class="text">Please enter your account details to register</div><br/>
            <form @submit.prevent="registerUser" action="#" className="form" >
                <div class="data">
                    <label for="username">Username</label>
                    <input id="username" type="text" placeholder="Username" name="username" v-model="username"/> 
                </div>
                <div class="data">
                    <label for="email">Email</label>
                    <input id="email" type="email" placeholder="Email" name="email" v-model="email"/> 
                </div>
                <div class="data">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Password" name="password" v-model="password"/> 
                </div>
                <div class="data">
                    <label for="confirm_password">Confirm Password</label>
                    <input id="confirm_password" type="password" placeholder="Confirm Password" name="confirm_password" v-model="confirm_password"/> 
                </div>
                <!--
                <div>
                    <input className="test" type="radio" name="gender" value="male"/> Male<br/>
                    <input className="test" type="radio" name="gender" value="female"/> Female<br/>
                </div> 
                -->
                <div class="btn">
                    <div class="inner"></div>
                        <button type="submit">Register</button>
                    </div>
                <div className="signup-link">Already a member? <a href="#/login">Login now</a></div>
            </form>
        </div>
    </div>
</template>

<style lang="css" scoped>
  @import 'Register.css';
</style>


<script>
import { mapActions } from "vuex";
 export default {
    name: "Register",
    props: {
    },
    data(){
        return {
            username: "",
            password: "",
            confirm_password: "",
            email:""
        }
    },
    methods: {
        ...mapActions(['register']),
        registerUser(){
            let user = {
                username: this.username,
                password: this.password,
                confirm_password: this.confirm_password,
                email: this.email
            }
            this.register(user).then(res => {
                if(res.data.success){
                    this.$router.push('login');
                }
            });
        }
    }
 };
</script>
