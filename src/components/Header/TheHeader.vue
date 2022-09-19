<script>
import TheHeaderMenu from "./components/TheHeaderMenu.vue";
import TheFavoriteList from "./components/TheFavoriteList.vue";
export default {
  components: { TheHeaderMenu, TheFavoriteList },
};
</script>

<template>
  <div class="header">
    <TheHeaderMenu />
    <TheFavoriteList />
  </div>
</template>

<style>
.header {
  width: 100%;
  height: 70px;
  background-color: #30909f;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
