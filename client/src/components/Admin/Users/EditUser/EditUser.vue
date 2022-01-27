<template>
  <div class="center">
    <form v-on:submit="onSubmit">
      <input type="email" name="email" placeholder="Email" :value="user.email" />
      <input type="password" name="password" placeholder="password" :value="user.password" />
      <input type="number" name="credits" placeholder="Credits" :value="user.credits" />
      <button type="submit" class="btn btn-info">Edit</button>
    </form>
  </div>
</template>

<style lang="css">
@import "EditUser.css";
</style>

<script>
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
  methods: {
    onSubmit: function (e) {
      e.preventDefault();

      const email = e.target[0].value;
      const password = e.target[1].value;
      const credits = e.target[2].value;

      fetch(`http://localhost:5000/users/${this.user._id}`, {
        method: "PUT",
        body: JSON.stringify({ email, password, credits }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => this.$router.push("/admin/users"))
        .catch((err) => console.log(err));
    },
  },
  created() {
    const id = this.$route.params.id;

    fetch(`http://localhost:5000/users/${id}`)
      .then((response) => response.json())
      .then((user) => this.user = user);
  },
  components: {},
};
</script>
