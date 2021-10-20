<script lang="ts">
import { defineComponent, PropType } from 'vue';

import TableRow from '@/components/atoms/TableRow.vue';

export default defineComponent({
  name: 'Table',

  components: {
    TableRow,
  },

  props: {
    headers: {
      type: Array as PropType<string[]>,
      required: true,
    },
    items: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
});
</script>

<template>
  <table>
    <thead>
      <TableRow tag="th" :items="headers" />
    </thead>

    <tbody>
      <TableRow v-for="item in items" :key="item" tag="td" :items="item" />
    </tbody>
  </table>
</template>

<style scoped>
@import url('../../css/colors.css');

table {
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  min-width: 800px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
}

table thead tr {
  background-color: var(--primary);
  color: #ffffff;
  text-align: left;
}

table tbody tr {
  border-bottom: 1px solid #dddddd;
}

table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

table tbody tr:last-of-type {
  border-bottom: 2px solid var(--primary);
}
</style>
