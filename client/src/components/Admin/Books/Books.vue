<template>
  <div class="center">
    <router-link to="/admin/books/createbook" class="button"
      >Create a Book</router-link
    >

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Credits</th>
          <th scope="col">Image</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr :key="book.id" v-for="book in books">
          <th scope="row">{{book.title}}</th>
          <td>{{book.author}}</td>
          <td>{{book.credits}}</td>
          <td>
            <img v-bind:src="'http://localhost:5000/images/' + book.image" style="width: 80px"/>
          </td>
          <td>
            <router-link v-bind:to="'/admin/books/editbook/' + book._id" class="link">Edit</router-link>
            <router-link v-bind:to="'/admin/books/deletebook/' + book._id" class="delete">Delete</router-link>
          </td>
        </tr>
      </tbody>
  </table>
  </div>
</template>

<style lang="css" scoped>
@import "Books.css";
</style>

<script>
export default {
  name: "Books",
  props: {},
  components: {},
  data: function () {
    return {
      books: [],
    };
  },
  created() {
    fetch("http://localhost:5000/books")
      .then((response) => {
        return response.json();
      })
      .then((data) => this.books = data);
  },
};
</script>
