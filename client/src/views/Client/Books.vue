<template>
    <div class="container">
        <router-link v-bind:to="'/books/info/' + book._id" :key="book.id" v-for="book in books"  class="bookCard">
            <div class="cardInfo">
                <div class="image"></div>
                <div class="title">{{book.title}}</div>
                <div class="author">{{book.author}}</div>
                <div class="price">{{book.credits}}$</div>
            </div>
        </router-link>
        
    </div>
</template>

<script>
export default {
    name: "Books",
    props: {},
    components: {},
    data: function () {
        return {
        books: [],
        };
    },
    created() {
        fetch("http://localhost:5000/books")
        .then((response) => {
            return response.json();
        })
        .then((data) => this.books = data);
    },
}
</script>

<style scoped>
    .container {
        display: flex;
        margin-top: 30px;
    }
    .bookCard{
        width: 250px;
        height: 350px;
        display: flex;
        margin: 15px;
        border: 1px solid black;
        justify-content: center;
        text-decoration: none;
    }
    .bookCard:hover {
        transition: 500ms;
        transform: scale(1.05, 1.05);
    }
    .cardInfo{
        margin: 20px;
    }
    .title, .author, .price, .buttons {
        color: black;
    }
    .title {
        font-size: 30px;
    }
    .image {
        width: 200px;
        height: 200px;
        background-color: burlywood;
    }
</style>