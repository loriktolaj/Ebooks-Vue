<template>
  <div class="center">
    <form v-on:submit="onSubmit" enctype="multipart/form-data">
      <input type="text" name="title" placeholder="Title" :value="user.title" />
      <input type="text" name="author" placeholder="Author" :value="user.author" />
      <input type="file" name="image" @change="handleImg" />
      <img v-if="url" :src="url" style="width: 500px"/>
      <img v-if="user.image" v-bind:src="'http://localhost:5000/images/' + user.image" style="width: 500px"/>
      <input type="number" name="credits" placeholder="Credits" :value="user.credits" />
      <button type="submit" class="btn btn-info">Edit</button>
    </form>
  </div>
</template>

<style lang="css">
  @import "EditBook.css";
</style>

<script>
import { mapGetters } from 'vuex';
// import axios from 'axios';

export default {
  name: "EditBook",
  props: {},
  data() {
    return {
      user: {
        title: "",
        author: "",
        credits: 0,
        image: null
      },
      url: null
    };
  },
    computed: {
    ...mapGetters({role : 'role'})
  },
  created() {
      if(this.role === 'user' || this.role === null){
        this.$router.push('../../../');
    }
  },
  methods: {
    onSubmit: function (e) {
      e.preventDefault();
      const fileField = document.querySelector('input[type="file"]');

      const title = e.target[0].value;
      const author = e.target[1].value;
      const credits = e.target[3].value;
      const image = fileField.files[0];

      const formData = new FormData();
      formData.append('title', title);
      formData.append('author', author);
      formData.append('image', image);
      formData.append('credits', credits);

      fetch(`http://localhost:5000/books/${this.user._id}`, {
        method: 'PUT',
        body: formData
      })
      .then(() => this.$router.push('/admin/books'))
      .catch(err => console.log(err))
    },
    handleImg: function (e) {
      const file = e.target.files[0];
      this.user.image = null;
      this.url = URL.createObjectURL(file);
      URL.revokeObjectURL(file);
    }
  },
  mounted() {
    const id = this.$route.params.id;

    fetch(`http://localhost:5000/books/${id}`)
      .then(response => response.json())
      .then(user => {
        this.user = user
      });
  },
  components: {},
};
</script>
