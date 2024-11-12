<template>
  <div class="page-title border-round-xl w-full">
    <slot name="counter"></slot>
    <slot name="questionCounter"></slot>
    <h3
      class="text-center fadein animation-duration-500"
      :class="value ? 'skeleton' : ''"
      v-html="title"
    ></h3>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  value: Boolean
})
</script>
<style scoped lang="scss">
.page-title {
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  padding: 2rem 1rem;

  &:before {
    content: '';
    width: 60px;
    height: 60px;
    background: #fff;
    display: block;
    position: absolute;
    top: -30px;
    left: calc(50% - 30px);
    border-radius: 100%;
  }
}

.page-title h3 {
  color: var(--text-color);
  font-weight: 500;
  line-height: normal;
  margin: 0;
  position: relative;
}
</style>
