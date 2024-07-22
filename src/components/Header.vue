<template>
  <div class="header border-round-xl">
    <div class="circle circle-1 circle-lg"></div>
    <div class="circle circle-2 circle-lg"></div>
    <div class="circle circle-3"></div>
    <div class="circle circle-4 circle-lg"></div>
  </div>
</template>
<style scoped lang="scss">
.header {
  height: 30vh;
  width: 100%;
  background: var(--primary-color);
  position: relative;
}

.circle {
  background: rgba(255, 255, 255, 0.1);
  width: 45px;
  height: 45px;
  position: absolute;
  border-radius: 100%;

  &-lg {
    width: 90px;
    height: 90px;
  }

  &-1 {
    top: calc(33.3% - 45px);
    left: -45px;
  }

  &-2 {
    left: calc(33% - 45px);
    top: -30px;
  }

  &-3 {
    left: 66%;
    top: 20%;
  }

  &-4 {
    top: calc(50% - 45px);
    right: -45px;
  }
}
</style>
