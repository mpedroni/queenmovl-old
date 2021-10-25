<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextInput',

  props: {
    label: {
      type: String,
      default: '',
    },
  },
});
</script>

<template>
  <div class="input__wrapper">
    <input id="text-input" type="text" v-bind="$attrs" placeholder="&nbsp;">
    <label for="text-input">
      {{ label }}
    </label>
  </div>
</template>

<style scoped>
@import url('../../styles/colors.css');

* {
  box-sizing: border-box;
}

.input__wrapper {
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

.input__wrapper label {
  position: absolute;
  left: 12px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  transition: all .2s ease 0s;
  top: 20px;
  pointer-events: none;
}

.input__wrapper input {
  height: 56px;
  padding: 16px 12px 0 12px;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 0 0;
  border-bottom: solid thin rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease;
}

.input__wrapper > input:hover {
  background-color: rgba(0, 0, 0, 0.115);
  border-bottom-color: rgba(0, 0, 0, 0.6);
}

.input__wrapper > input:focus {
  border-bottom-color: var(--primary);
  background-color: rgba(0, 0, 0, 0.2);
}

.input__wrapper input:not(:placeholder-shown) + label {
  top: 8px;
  font-size: 13px;
}

.input__wrapper > input:focus + label {
  font-size: 13px;
  transition: all .2s ease 0s;
  color: var(--primary);
  top: 8px;
}
</style>
