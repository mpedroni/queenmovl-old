<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Logo',

  props: {
    size: {
      type: [String, Number],
      default: '2rem',
    },
  },
})
</script>

<template>
  <span id="logo" :style="{ 'font-size': size }">
    <img src="../../assets/logo.svg" alt="Queenmovl Logo">
    queenmovl
  </span>
</template>

<style scoped>
@import url('../../styles/colors.css');

#logo {
  display: inline-flex;
  align-items: center;
  font-family: monospace;
  font-weight: bold;
  color: var(--primary);
  user-select: none;
}

#logo img {
  width: 56px;
  height: auto;
  margin-right: 5px;
}
</style>
