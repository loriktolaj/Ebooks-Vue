<template>
  <div class="center">
    <p class="my-4">Hello from books!</p>

    <form v-on:submit="onSubmit">
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="number" name="age" placeholder="Age" />
      <input type="number" name="credits" placeholder="Credits" />
      <button type="submit" class="btn btn-info">Add</button>
    </form>
  </div>
</template>

<style lang="css">
@import "CreateBook.css";
</style>

<script>
export default {
  name: "CreateBook",
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
      const age = e.target[2].value;
      const credits = e.target[3].value;
      console.log(name, email, email, age, credits);
    },
  },
  components: {},
};
</script>
