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
import { mapGetters } from 'vuex';
import axios from 'axios';
export default {
  name: "Dashboard",
  props: {},
  data: function () {
    return {
      totalUsers: 0,
      totalBooks: 0
    };
  },
   computed: {
    ...mapGetters({role : 'role'})
  },
  created() {
      if(this.role === 'user'){
        this.$router.push('../');
    }
  },
   mounted() {
    axios.get("http://localhost:5000/dashboard")
      .then(response => {
        this.totalUsers = response.data.totalUsers;
         this.totalBooks = response.data.totalBooks;
      })
  }
};
</script>
