<template>
  <div class="center">
    <form v-on:submit="onSubmit">
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="password" />
      <input type="number" name="age" placeholder="Age" />
      <input type="number" name="credits" placeholder="Credits" />
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<style lang="css" scoped>
@import "CreateUser.css";
</style>

<script>
export default {
  name: "CreateUser",
  props: {},
  data() {
    return {
      username: "",
    };
  },
  methods: {
    onSubmit: function (e) {
      e.preventDefault();
      const name = e.target[0].value;
      const email = e.target[1].value;
      // const password = e.target[2].value;
      const age = e.target[3].value;
      const credits = e.target[4].value;
      console.log(name, email, email, age, credits);
      
      fetch('http://localhost:5000/users', {
        method: 'POST',
        body: JSON.stringify({email, password: 'test', credits}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => this.$router.push('/admin/users'));
    },
  },
  components: {},
};
</script>
