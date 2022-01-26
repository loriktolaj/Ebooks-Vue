<template>
    <div class="center">
        <div class="container_register">
            <div class="text">Welcome back to eBooks</div><br/>
            <form action="#" className="form">
                <div class="data">
                    <label>Email</label>
                    <input type="text" name="email"/> 
                </div>
                
                <div class="data">
                    <label>Password</label>
                    <input type="text" name="password"/> 
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

<style lang="css" scoped>
  @import 'Login.css';
</style>

<script>
 export default {
    name: "Login",
    props: {
    }
 };
</script>
