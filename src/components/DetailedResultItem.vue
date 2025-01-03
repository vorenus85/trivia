<template>
  <div
    class="accordion mb-5 p-3 rounded-lg"
    :class="[
      { opened: isOpen },
      { 'bg-red-50': !isCorrect && givenAnswer?.length },
      { 'bg-stone-100': !isCorrect && !givenAnswer?.length },
      { 'bg-green-50': isCorrect }
    ]"
    @click="toggle"
  >
    <img
      src="@/assets/img/svg/iconArrow.svg"
      width="24"
      height="24"
      class="my-auto ml-2 accordion-arrow"
    />
    <div class="accordion-title font-medium pt-2 pb-2 pr-5" v-html="question.question"></div>
    <div class="accordion-content grid grid-cols-2 gap-2">
      <SelectButton
        v-for="answer in question.answers"
        :id="answer"
        :key="answer"
        :title="answer"
        size="small"
        class="rounded-xl"
        :class="[
          { correct: correctAnswer === answer },
          { wrong: correctAnswer !== answer && givenAnswer === answer }
        ]"
      />
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useTriviaStore } from '@/stores/trivia'
import SelectButton from './SelectButton.vue'
const triviaStore = useTriviaStore()

const props = defineProps({
  question: Object,
  index: Number
})

const isOpen = ref(false)
const correctAnswer = computed(() => {
  return triviaStore.questions[props.index]?.correct_answer
})
const givenAnswer = computed(() => {
  return triviaStore.answers[props.index]
})

const isCorrect = computed(() => {
  return correctAnswer.value === givenAnswer.value
})

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.accordion-content {
  max-height: 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}

.accordion-title {
  font-size: 13px;
}

.accordion.opened .accordion-content {
  max-height: 200px;
}

.accordion-arrow {
  position: absolute;
  right: 25px;
  transform: rotate(90deg);
  transition: all 0.3s ease-in-out;
}

.accordion.opened .accordion-arrow {
  transform: rotate(270deg);
}
</style>
<style>
.correct .select-button {
  border-color: var(--success-color);
  background-color: rgb(220 252 231); /* bg-green-100 */
}

.wrong .select-button {
  border-color: var(--danger-color);
  background-color: rgb(254 226 226); /* bg-red-100 */
}
</style>
