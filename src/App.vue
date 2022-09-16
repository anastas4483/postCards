<template>
  <div id="app">
    <CardList :posts="posts" />
  </div>
</template>

<script>
import CardList from "./components/CardList.vue";

export default {
  name: "App",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async getPosts() {
      const postsFetched = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // postsFetched.then((response) => (this.posts = response));
      postsFetched.json().then((response) => (this.posts = response));
    },
  },
  mounted() {
    this.getPosts();
  },

  components: {
    CardList,
  },
};
</script>

<style>
#app {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
</style>
