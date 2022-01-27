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
export default {
  name: "DeleteUser",
  props: {},
  data() {
    return {
      id: null,
    };
  },
  methods: {
    onConfirm: function () {
      const id = this.$route.params.id;
      
      fetch(`http://localhost:5000/users/${id}`, {
        method: 'DELETE'
      })
        .then(() => this.$router.push('/admin/users'));
    },
    onCancel: function () {
      this.$router.push('/admin/users');
    },
  }
};
</script>