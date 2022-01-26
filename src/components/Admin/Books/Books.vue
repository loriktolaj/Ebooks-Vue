<template>
  <div class="center">
         <router-link to="/admin/books/createbook" class="button"
      >Create a Book</router-link
    >

    <b-table-simple hover small caption-top responsive>
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
          <b-th>Country</b-th>
          <b-th>City</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr :key="user.id" v-for="user in users">
          <b-td>{{ user.name }}</b-td>
          <b-td>{{ user.age }}</b-td>
          <b-td>
            <router-link to="/admin/books/editbook" class="link"
              >Edit</router-link
            >
            <button class="btn btn-danger">Delete</button>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<style lang="css">
@import "Books.css";
</style>

<script>
export default {
  name: "Books",
  props: {},
  components: {
  },
  data: function () {
    return {
      users: Array,
    };
  },
  created() {
    this.users = [
      { id: 1, name: "albitest", age: 22 },
      { id: 2, name: "albitest", age: 22 },
      { id: 3, name: "albitest", age: 22 },
      { id: 4, name: "albitest", age: 22 },
    ];
  },
};
</script>
