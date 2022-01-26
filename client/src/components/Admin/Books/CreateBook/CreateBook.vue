<template>
  <div class="center">
    <p class="my-4">Hello from books!</p>

    <form v-on:submit="onSubmit">
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="author" placeholder="Author" />
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
      const title = e.target[0].value;
      const author = e.target[1].value;
      const credits = e.target[2].value;

      console.log(title, author, credits);
      
      fetch('http://localhost:5000/books', {
        method: 'POST',
        body: JSON.stringify({title, author, credits}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .catch(err => console.log(err));
    },
  },
  components: {},
};
</script>
