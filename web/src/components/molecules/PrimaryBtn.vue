<script lang="ts">
import { defineComponent } from 'vue';

import Btn from '@/components/atoms/Btn.vue';

export default defineComponent({
  name: 'PrimaryBtn',

  components: {
    Btn,
  },
});
</script>

<template>
  <Btn v-bind="$attrs">
    <slot />
  </Btn>
</template>

<style scoped>
@import url('../../styles/colors.css');

button {
  background-color: var(--primary);
  color: #fff;
}

button:hover {
  box-shadow: 0 0.5em 0.5em -0.4em var(--primary);
  background-color: var(--primary);
}
</style>
