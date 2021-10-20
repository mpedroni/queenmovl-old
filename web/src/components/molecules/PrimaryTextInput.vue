<script lang="ts">
import { defineComponent } from 'vue';

import TextInput from '@/components/atoms/TextInput.vue';

export default defineComponent({
  name: 'PrimaryTextInput',

  components: {
    TextInput,
  },
});
</script>

<template>
  <TextInput v-bind="$attrs" />
</template>

<style scoped>
@import url('../../css/colors.css');

</style>
