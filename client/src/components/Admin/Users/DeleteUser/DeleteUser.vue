<template>
    <div>
        <button v-on:click="onConfirm" class="delete">Confirm</button>
        <button v-on:click="onCancel" class="link">Cancel</button>
    </div>
</template>

<style lang="css" scoped>
@import "DeleteUser.css";
</style>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
export default {
  name: "DeleteUser",
  props: {},
  data() {
    return {
      id: null,
    };
  },
  computed: {
    ...mapGetters({role : 'role'})
  },
  created() {
      if(this.role === 'user'){
        this.$router.push('../../../');
    }
  },
  methods: {
    onConfirm: function () {
      const id = this.$route.params.id;
      
      axios.delete(`http://localhost:5000/users/${id}`)
      .then(() => this.$router.push('/admin/users'));

      // fetch(`http://localhost:5000/users/${id}`, {
      //   method: 'DELETE'
      // })
      //   .then(() => this.$router.push('/admin/users'));
    },
    onCancel: function () {
      this.$router.push('/admin/users');
    },
  }
};
</script>