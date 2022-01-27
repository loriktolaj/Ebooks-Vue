<template>
  <div class="center">
    <router-link to="/admin/users/createuser" class="button"
      >Create a User</router-link
    >
    <!-- <b-table-simple hover small caption-top responsive>
      <colgroup><col><col></colgroup>
      <colgroup><col><col><col></colgroup>
      <colgroup><col><col></colgroup>
      <b-thead head-variant="dark">
        <b-tr>
          <b-th>Email</b-th>
          <b-th>Password</b-th>
          <b-th>Credits</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr :key="user.id" v-for="user in users">
          <b-td>{{ user.email }}</b-td>
          <b-td>{{ user.password }}</b-td>
          <b-td>{{ user.credits }}</b-td>
          <b-td>
             <router-link v-bind:to="'/admin/users/edituser/' + user._id" class="link"
              >Edit</router-link
            >
             <router-link v-bind:to="'/admin/users/deleteuser/' + user._id" class="link"
              >Delete</router-link
            >
          </b-td>
        </b-tr>
      </b-tbody>
  </b-table-simple> -->
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
        <th scope="col">Credits</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr :key="user.id" v-for="user in users">
        <th scope="row">{{user.email}}</th>
        <td>{{user.password}}</td>
        <td>{{user.credits}}</td>
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
export default {
  name: "Users",
  props: {},
  components: {},
  data: function () {
    return {
      users: [],
    };
  },
  created() {
        fetch("http://localhost:5000/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => this.users = data);
  },
};
</script>
