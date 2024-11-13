<template>
  <div class="page-title rounded-xl w-full shadow-lg">
    <slot name="counter"></slot>
    <slot name="question"></slot>
    <h3 class="text-center" :class="value ? 'skeleton' : ''" v-html="title"></h3>
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
