<template>
  <div class="noBooksAlert" v-if="books.length === 0">
    <h1>No books</h1>
  </div>
  <div class="container" v-else>
    <router-link
      v-bind:to="'/books/info/' + book._id"
      :key="book.id"
      v-for="book in books"
      class="bookCard"
    >
      <div class="cardInfo">
        <div class="image">
          <img v-bind:src="'http://localhost:5000/images/' + book.image" />
        </div>
        <div class="title">{{ book.title }}</div>
        <div class="author">{{ book.author }}</div>
        <div class="price">{{ book.credits }}$</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Books",
  props: {},
  components: {},
  data: function () {
    return {
      books: [],
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["getProfile"]),
  },
  created() {
      this.getProfile();
      const uId = this.user._id;
      console.log(uId);
      axios
      .get(`http://localhost:5000/users/getBooks/${uId}`)
      .then((response) => this.books = response.data);
  },
};
</script>
<style scoped>
.noBooksAlert {
  width: 300px;
  height: 100px;
  border: 0.5px solid black;
  color: rgb(4, 27, 27);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -150px;
}
.container {
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}
.bookCard {
  width: 280px;
  height: 500px;
  background: white;
  display: flex;
  margin: 10px 20px;
  border: 1px solid #aaaaaa;
  justify-content: center;
  text-decoration: none;
  box-shadow: 10px 10px 30px 0px #4d4d4d;
  /* box-shadow: 5px 5px 30px 0px #4d4d4d; */
}
.bookCard:hover {
  transition: 500ms;
  transform: scale(1.05, 1.05);
}
.cardInfo {
  margin: 20px;
}
.title,
.author,
.price,
.buttons {
  color: black;
}
.title {
  font-size: 30px;
  padding: 0px 10px;
  word-wrap: break-word;
}
.price {
  font-weight: bold;
  color: darkslategray;
}
.image {
  width: 280px;
  height: 300px;
  display: flex;
  justify-content: center;
}
.image img {
  width: 200px;
  height: 300px;
}
</style>
