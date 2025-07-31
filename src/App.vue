<script setup>
import sidebar from './components/sidebar.vue';
</script>

<template>
  <div class="app">
    <sidebar />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/variables.scss" as *;
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
button{
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app{
  display: flex;
  background: $background;
  main{
    flex: 1 1 0;
    padding: 2rem;
  }
}
</style>
