<script setup>
import ChooseCategory from './views/ChooseCategory.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div class="centered-content">
    <Header />
    <div class="container ml-auto mr-auto p-3 content">
      <ChooseCategory />
    </div>
  </div>
</template>

<style scoped lang="scss">
.centered-content {
  display: flex;
  height: calc(100vh - 2rem);
  align-items: center;
  padding: 1rem;
  flex-direction: column;
  overflow: hidden;
}

.content {
  height: 60vh;
  margin-top: -3rem;
  position: relative;
}
</style>
