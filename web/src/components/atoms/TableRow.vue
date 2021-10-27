<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'TableRow',

  props: {
    empty: {
      type: Boolean,
      default: false,
    },
    emptyMessage: {
      type: String,
      default: 'Nenhum dado cadastrado',
    },
    items: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    tag: {
      type: String as PropType<'th' | 'td'>,
      required: true,
    },
  },
});
</script>

<template>
  <tr v-if="empty">
    <component
      :is="tag"
      colspan="100%"
      class="empty"
    >
      <fa-icon :icon="{ prefix: 'fa', iconName: 'exclamation' }" class="alert-icon" />
      {{ emptyMessage }}
    </component>
  </tr>

  <tr v-else>
    <component
      v-for="item in items"
      :key="item"
      :is="tag"
    >
      {{ item }}
    </component>
  </tr>
</template>

<style scoped>
th, td {
  padding: 12px 15px;
}

.empty {
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
}

.empty .alert-icon {
  margin-right: 5px;
}
</style>
