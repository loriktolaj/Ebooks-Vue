<template>
  <div class="center">
    <form v-on:submit="onSubmit">
      <input type="text" name="username" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="password" />
      <input type="number" name="age" placeholder="Age" />
      <input type="number" name="credits" placeholder="Credits" />
      <select name="role" id="">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<style lang="css" scoped>
@import "CreateUser.css";
</style>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
export default {
  name: "CreateUser",
  props: {},
  data() {
    return {
      username: "",
    };
  },
   computed: {
    ...mapGetters({role : 'role'})
  },
  created() {
      if(this.role === 'user'){
        this.$router.push('../../');
    }
  },
  methods: {
    onSubmit: function (e) {
      e.preventDefault();
      const username = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const age = e.target[3].value;
      const credits = e.target[4].value;
      const role = e.target[5].value;
      axios.post('http://localhost:5000/users', {
        username, password, email, age, credits, role
      }).then(() => {
        this.$router.push('/admin/users');
      })
    },
  },
  components: {},
};
</script>
