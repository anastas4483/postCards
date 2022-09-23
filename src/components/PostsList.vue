<script>
import CardItem from "./CardItem.vue"
export default {
  props: ["posts"],
  components: {
    CardItem,
  },
}
</script>

<template>
  <div class="list">
    <CardItem v-for="post of this.posts" :key="post.id" :post="post" />
  </div>
</template>

<style scoped>
.list {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
