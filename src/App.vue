<script>
import CardList from "./components/CardList.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

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
    TheHeader,
    TheFooter,
  },
};
</script>

<template>
  <div id="app">
    <TheHeader />
    <CardList :posts="posts" />
    <TheFooter />
  </div>
</template>

<style></style>
