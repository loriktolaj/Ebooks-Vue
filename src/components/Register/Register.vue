<template>
    <div class="center">
        <div class="container_register">
            <div class="text">Please enter your account details to register</div><br/>
            <form action="#" className="form" >
                <div class="data">
                    <label>Full name</label>
                    <input type="text" name="username"/> 
                </div>
                <div class="data">
                    <label>Email</label>
                    <input type="text" name="email"/> 
                </div>
                <div class="data">
                    <label>Password</label>
                    <input type="password" name="password"/> 
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
 export default {
    name: "Register",
    props: {
    }
 };
</script>
