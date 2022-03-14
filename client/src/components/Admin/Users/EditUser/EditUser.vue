<template>
  <div class="center">
    <form v-on:submit="onSubmit">
      <input type="email" name="email" placeholder="Email" :value="user.email" />
      <input type="password" name="password" placeholder="password" :value="user.password" />
      <input type="number" name="credits" placeholder="Credits" :value="user.credits" />
      <select name="role" id="">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" class="btn btn-info">Edit</button>
    </form>
  </div>
</template>

<style lang="css">
@import "EditUser.css";
</style>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
export default {
  name: "EditUser",
  props: {},
  data() {
    return {
      user: {
        email: "",
        title: "",
        credits: 0
      }
    };
  },
  computed: {
    ...mapGetters({role : 'role'})
  },
  created() {
      if(this.role === 'user' || this.role === null){
        this.$router.push('../../../');
    }
  },
  methods: {
    onSubmit: function (e) {
      e.preventDefault();

      const email = e.target[0].value;
      const password = e.target[1].value;
      const credits = e.target[2].value;
      const role = e.target[3].value;

      axios.put(`http://localhost:5000/users/${this.user._id}`, {
        email, password, credits, role
      }).then(() => this.$router.push("/admin/users"))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    const id = this.$route.params.id;
    axios.get(`http://localhost:5000/users/${id}`).then(response => this.user = response.data);
  },
  components: {},
};
</script>
