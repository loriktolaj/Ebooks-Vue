<template>
  <div class="center">
    <form v-on:submit="onSubmit" enctype="multipart/form-data">
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="author" placeholder="Author" />
      <input type="file" name="image" @change="handleImg" />
      <img v-if="url" :src="url" style="width: 500px"/>
      <input type="number" name="credits" placeholder="Credits" />
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<style lang="css">
  @import "CreateBook.css";
</style>

<script>
import { mapGetters } from 'vuex';
// import axios from 'axios';
export default {
  name: "CreateBook",
  props: {},
  data() {
    return {
      username: "",
      url: null
    };
  },
   computed: {
    ...mapGetters({role : 'role'})
  },
  created() {
      if(this.role === 'user'){
        this.$router.push('../../');
    }
  },
  methods: {
    onSubmit: function (e) {
      e.preventDefault();
      const fileField = document.querySelector('input[type="file"]');

      const title = e.target[0].value;
      const author = e.target[1].value;
      const image = fileField.files[0];
      const credits = e.target[3].value;

      // console.log(title, author, image, credits);

      const formData = new FormData();
      formData.append('title', title);
      formData.append('author', author);
      formData.append('image', image);
      formData.append('credits', credits);
      // console.log(formData);
      // axios.post('http://localhost:5000/books', {
      //   data: formData
      // }).then(() => this.$router.push('/admin/books'))
      // .catch(err => console.log(err));

      fetch('http://localhost:5000/books', {
        method: 'POST',
        body: formData
      })
      .then(() => this.$router.push('/admin/books'))
      .catch(err => console.log(err));
    },
    handleImg: function (e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      URL.revokeObjectURL(file);
    }
  },
  components: {},
};
</script>