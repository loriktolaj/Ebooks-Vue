<template>
    <div class="center">
        <div class="container_register">
            <div class="text">Please enter your account details to register</div><br/>
            <form @submit.prevent="registerUser" action="#" className="form" >
                <div class="data">
                    <label for="username">Full name</label>
                    <input id="username" type="text" placeholder="Full name" name="username" v-model="username"/> 
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

<style scoped>
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  .center{
    height: 100vh;
    width: 100%;
    background: linear-gradient(115deg, #808080 20%, #181716 80%);
  }
  .show-btn{
    background: #fff;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 500;
    color: #3498db;
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  }
  .show-btn, .container_register{
    position: absolute;
    top: 58%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .container_register{
    background:#fff;
    width: 20%;
    padding: 10px;
    box-shadow: 0 0 8px rgba(0,0,0,0.1);
  }
  
   .text{
    font-size: 35px;
    font-weight: 600;
    text-align: center;
  }
   .form{
    
    margin: auto;
  }
   .form .data{
    height: 45px;
    width: 100%;     /*100*/ 
    margin: 40px 0;
  }
    label{
    font-size: 18px;
  }
    input{
    height: 200%;
    width: 90%;
    padding-left: 10px;
    font-size: 17px;
    border: 1px solid silver;
  }
    input:focus{
    border-color: #3498db;
    border-bottom-width: 2px;
  }
   .forgot-pass{
    margin-top: -8px;
  }
   .forgot-pass a{
    color: #3498db;
    text-decoration: none;
  }
  .forgot-pass a:hover{
    text-decoration: underline;
  }
  .btn{
    margin: 30px 0;
    height: 45px;
    width: 100%;   /*100*/
    position: relative;
    overflow: hidden;
  }
  .btn .inner{
    height: 100%;
    width: 300%;
    position: absolute;
    left: -100%;
    z-index: -1;
    background: -webkit-linear-gradient(right, #55B4B0, #E15D44, #55B4B0, #E15D44);
    transition: all 0.4s;
  }
  .btn:hover .inner{
    left: 0;
  }
  .btn button{
    height: 100%;
    width: 100%;
    background: none;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
  }
  .signup-link{
    text-align: center;
  }
   .signup-link a{
    color: #3498db;
    text-decoration: none;
  }
   .signup-link a:hover{
    text-decoration: underline;
  }
</style>
