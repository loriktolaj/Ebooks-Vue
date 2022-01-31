<template>
  <div class="centerDb">
     <div class="users">
        <p>Total Users: {{totalUsers}}</p>
     </div>
     <div class="books">
        <p>Total Books: {{totalBooks}}</p>
     </div>
  </div>
</template>

<style lang="css" scoped>
@import "Dashboard.css";
</style>
<script>

export default {
  name: "Dashboard",
  props: {},
  data: function () {
    return {
      totalUsers: 0,
      totalBooks: 0
    };
  },
  created() {
    fetch("http://localhost:5000/dashboard")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
         this.totalUsers = data.totalUsers;
         this.totalBooks = data.totalBooks;
      });
  },
};
</script>
