<template>
        <div class="bookCard">
            <div class="title">{{book.title}}</div>
            <div class="cardInfo">
                <div class="image"><img v-bind:src="'http://localhost:5000/images/' + book.image"/></div>
                <div class="author">{{book.author}}</div>
                <div class="price">{{book.credits}}$</div>
            </div>
            <div class="backBtn">
                <a href="/#/books">Return</a>
            </div>    
        </div>
</template>

<script>
export default {
    name: "BookInfo",
    props: {},
    components: {},
    data: function () {
        return {
        book: {
            title:"",
            author:"",
            description:"",
            credits:0
        },
        };
    },
    created() {
        const id = this.$route.params.id;
        fetch(`http://localhost:5000/books/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => this.book = data);
    },
}
</script>

<style scoped>
    .container {
        margin-top: 30px;
    }
    .bookCard{
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        margin: 15px;
        border: 1px solid black;
        justify-content: center;
        text-decoration: none;
    }
    /* .bookCard:hover {
        transition: 500ms;
        transform: scale(1.05, 1.05);
    } */
    .cardInfo{
        margin: 20px;
        border: 1px solid black;
        display: flex;
    }
    .title {
        font-size: 30px;
        color: black;
    }
      .image img {
        width: 300px;
        height: 500px;
    }
    .author{
        margin: 30px;
        padding: 10px;
         border: 1px solid black;
         color: rgb(87, 87, 87);
        font-size: 40px;
    }
    .price{
        margin: 30px;
        padding: 10px;
        border: 1px solid black;
        font-size: 30px;
    }
    .backBtn{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .backBtn a{
        text-decoration: none;
        width: 100px;
        height: 40px;
        background-color: #0f0f0f;
        color: #dddddd;
        border-radius: 5px;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
    }
</style>