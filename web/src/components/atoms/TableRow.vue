<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'TableRow',

  props: {
    tag: {
      type: String as PropType<'th' | 'td'>,
      required: true,
    },
    items: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
});
</script>

<template>
  <tr>
    <component :is="tag" v-for="item in items" :key="item">
      {{ item }}
    </component>
  </tr>
</template>

<style scoped>
th, td {
  padding: 12px 15px;
}
</style>
