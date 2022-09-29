<script>
import { mapActions } from "vuex"
import ButtonLike from "./ButtonLike.vue"
export default {
  props: {
    post: Object,
    i: Number,
  },
  components: {
    ButtonLike,
  },
  computed: {
    isLike() {
      return this.post.isLike
    },
  },
  methods: mapActions(["updateFavoritePosts"]),
}
</script>

<template>
  <div class="card">
    <h1 class="card__title">{{ post.title }}</h1>

    <p class="card__description">{{ post.body }}</p>
    <ButtonLike
      :onClickLike="() => this.updateFavoritePosts(post)"
      :isLike="isLike"
    />
  </div>
</template>

<style>
.card {
  display: flex;
  border: 2px inset #0eaabd;
  background-color: #c8e8e7;
  border-radius: 5px;
  padding: 10px;
  width: 250px;
  max-width: 350px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 3px 0px #00222e42;
}
.card__title {
  color: rgb(2, 87, 133);
  text-align: center;
  font-size: 25px;
  cursor: pointer;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 62px;
}

.title::first-letter {
  text-transform: uppercase;
}
.card__description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 20px 5px;
}
</style>
