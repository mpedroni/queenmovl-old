<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextInput',
});
</script>

<template>
  <input type="text">
</template>

<style scoped>
input {
  padding: 5px 15px;
  width: 50%;
  height: 56px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px 8px 0 0;
  border: none;
  outline: none;
}
</style>
