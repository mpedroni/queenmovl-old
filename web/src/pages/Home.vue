<script lang="ts">
import { defineComponent, ref } from 'vue';

import HomeTemplate from '@/components/templates/_home.vue';

export default defineComponent({
  name: 'Home',

  components: {
    HomeTemplate,
  },

  setup() {
    const films = ref([
      {
        name: 'Euforia',
        suggestedBy: 'Eduarda',
        plataform: 'Netflix',
        grade: 10,
      },
      {
        name: 'O Mestre dos Genios',
        suggestedBy: 'Matheus',
        plataform: 'Prime Video',
        grade: null,
      },
      {
        name: 'Your Name',
        suggestedBy: 'Eduarda',
        plataform: 'Disney Plus',
        grade: 8.5,
      },
      {
        name: 'Beleza Oculta',
        suggestedBy: 'Eduarda',
        plataform: 'Netflix',
        grade: 9,
      },
      {
        name: 'Um Cadáver para Sobreviver',
        suggestedBy: 'Matheus',
        plataform: 'Netflix',
        grade: 6,
      },
    ]);

    return {
      films,
    };
  },
});
</script>

<template>
  <HomeTemplate :films="films" />
</template>
