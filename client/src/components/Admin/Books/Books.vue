<template>
  <div class="center">
    <router-link to="/admin/books/createbook" class="button"
      >Create a Book</router-link
    >

    <!-- <b-table-simple hover small caption-top responsive>
      <colgroup>
        <col />
        <col />
      </colgroup>
      <colgroup>
        <col />
        <col />
        <col />
      </colgroup>
      <colgroup>
        <col />
        <col />
      </colgroup>
      <b-thead head-variant="dark">
        <b-tr>
          <b-th>Title</b-th>
          <b-th>Author</b-th>
          <b-th>Credits</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr :key="book.id" v-for="book in books">
          <b-td>{{ book.title }}</b-td>
          <b-td>{{ book.author }}</b-td>
          <b-td>{{ book.credits }}</b-td>
          <b-td>
             <router-link v-bind:to="'/admin/books/editbook/' + book._id" class="link"
              >Edit</router-link
            >
             <router-link v-bind:to="'/admin/books/deletebook/' + book._id" class="delete"
              >Delete</router-link
            >
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple> -->


    <table class="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Credits</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr :key="book.id" v-for="book in books">
          <th scope="row">{{book.title}}</th>
          <td>{{book.author}}</td>
          <td>{{book.credits}}</td>
          <td>
            <router-link v-bind:to="'/admin/books/editbook/' + book._id" class="link">Edit</router-link>
            <router-link v-bind:to="'/admin/books/deletebook/' + book._id" class="delete">Delete</router-link>
          </td>
        </tr>
      </tbody>
  </table>
  </div>
</template>

<style lang="css">
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
