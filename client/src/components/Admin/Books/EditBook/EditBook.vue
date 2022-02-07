<template>
  <div class="center">
    <form v-on:submit="onSubmit" enctype="multipart/form-data">
      <input type="text" name="title" placeholder="Title" :value="user.title" />
      <input type="text" name="author" placeholder="Author" :value="user.author" />
      <input type="file" name="image" />
      <input type="number" name="credits" placeholder="Credits" :value="user.credits" />
      <button type="submit" class="btn btn-info">Edit</button>
    </form>
  </div>
</template>

<style lang="css">
  @import "EditBook.css";
</style>

<script>
export default {
  name: "EditBook",
  props: {},
  data() {
    return {
      user: {
        title: "",
        auhtor: "",
        credits: 0
      }
    };
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
  },
  created() {
    const id = this.$route.params.id;

    fetch(`http://localhost:5000/books/${id}`)
      .then(response => response.json())
      .then(user => {
        this.user = user
        console.log(this.user);
      });
  },
  components: {},
};
</script>
