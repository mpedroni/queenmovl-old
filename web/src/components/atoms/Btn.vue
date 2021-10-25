<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Btn',
});
</script>

<template>
  <button v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped>
@import url('../../styles/colors.css');

button {
  width: fit-content;
  max-width: 100%;
  padding: 10px 20px;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
  height: 43px;
  border: none;
  transition: 0.2s;
}

button:hover {
  cursor: pointer;
  transform: translateY(-0.25em);
  opacity: 0.9;
}

button:active {
  opacity: 0.75;
}
</style>
