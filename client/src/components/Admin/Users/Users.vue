<template>
  <div  class="center">
    <router-link to="/admin/users/createuser" class="button"
      >Create a User</router-link
    >

  <table class="table">
    <thead>
      <tr>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
        <th scope="col">Credits</th>
        <th scope="col">Role</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr :key="user.id" v-for="user in users">
        <th scope="row">{{user.email}}</th>
        <td>{{user.password}}</td>
        <td>{{user.credits}}</td>
        <td>{{user.role}}</td>
        <td>
          <router-link v-bind:to="'/admin/users/edituser/' + user._id" class="link">Edit</router-link>
          <router-link v-bind:to="'/admin/users/deleteuser/' + user._id" class="delete">Delete</router-link>
        </td>
      </tr>
    </tbody>
  </table>

  </div>
</template>

<style lang="css" scoped>
@import "Users.css";
</style>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
export default {
  name: "Users",
  props: {},
  components: {},
  computed: {
    ...mapGetters({role : 'role'})
  },
  created() {
      if(this.role === 'user' || this.role === null){
        this.$router.push('../');
    }
  },
  data: function () {
    return {
      users: []
    };
  },
  mounted() {
    axios.get("http://localhost:5000/users")
      .then(response => (this.users = response.data))
  },
};
</script>
