<script lang="ts">
import { defineComponent, ref } from 'vue';

import HomeTemplate from '@/components/templates/_home.vue';

export default defineComponent({
  name: 'Home',

  components: {
    HomeTemplate,
  },

  setup() {
    const films = ref([]);

    return {
      films,
    };
  },
});
</script>

<template>
  <HomeTemplate :films="films" />
</template>
