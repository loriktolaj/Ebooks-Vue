<template>
<div>
  <Header />
 <div class="container">
    <div class="bookInfo">
      <div class="leftSide">
        <div class="image">
          <img v-bind:src="'http://localhost:5000/images/' + book.image" />
        </div>
      </div>
      <div class="rightSide">
        <div class="title">{{ book.title }}</div>
        <div class="author">
          <span>Author: </span>
          <span>{{ book.author }}</span>
        </div>
        <div class="price">
          <span>Price: </span>
          <span>{{ book.credits }}$</span>
        </div>
        <div>
          <a class="button" v-on:click="buy">Buy</a>
        </div>
        <div>
          <a class="button" href="/#/books">Back</a>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "BookInfo",
  props: {},
  components: {
    Header, 
    Footer
  },
  data: function () {
    return {
      book: {
        title: "",
        author: "",
        description: "",
        credits: 0,
      },
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["getProfile"]),
    buy: function () {
      const bookId = this.$route.params.id;
      const uId = this.user._id;
      if (this.user.credits <= 0) {
        alert("Not enough credits");
      } else {
        axios
          .post(`http://localhost:5000/books/creds/${bookId}/${uId}`)
          .then(() => {
            this.$router.push("../../userBooks");
          });
      }
    },
  },
  created() {
    const id = this.$route.params.id;
    fetch(`http://localhost:5000/books/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => (this.book = data));
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Serif&display=swap");
.container {
  margin-top: 30px;
}
.container {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-decoration: none;
}
.bookInfo {
  display: flex;
  padding: 20px;
  justify-content: space-around;
}
.leftSide {
  margin-left: 20px;
  display: flex;
}
.rightSide {
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.title {
  font-size: 50px;
  color: black;
  font-family: "Roboto Serif", serif;
}
.image img {
  width: 300px;
  height: 500px;
}
span {
  font-family: "Roboto Serif", serif;
}
.author {
  color: rgb(87, 87, 87);
  font-size: 25px;
  font-family: "Noto Serif Display", serif;
}
.price {
  font-size: 25px;
}
.button {
  display: inline-block;
  background: #b3b2ab;
  color: #fff !important;
  text-transform: uppercase;
  width: 150px;
  padding: 10px 50px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0px 17px 10px -10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  -webkit-transition: all ease-in-out 300ms;
  transition: all ease-in-out 300ms;
}
.button:hover {
  box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.2);
  -webkit-transform: translate(0px, -10px) scale(1.2);
  transform: translate(0px, -10px) scale(1.2);
}
@media screen and (max-width:800px) {
  .bookInfo{
    flex-direction: column;
  }
  .leftSide, .rightSide {
    justify-content: center;
    margin: 0px;
  }
}
</style>
