<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import Film from '@/types/Film';

import QTable from '@/components/molecules/Table.vue';

export default defineComponent({
  name: 'FilmTable',

  components: {
    QTable,
  },

  props: {
    films: {
      type: Array as PropType<Film[]>,
      required: true,
    },
  },

  setup() {
    const headers = ref([
      {
        label: 'Nome',
        property: 'name',
      },
      {
        label: 'Sugerido por',
        property: 'suggestedBy',
      },
      {
        label: 'Plataforma',
        property: 'plataform',
      },
      {
        label: 'Nota',
        property: 'grade',
      },
    ]);

    return {
      headers,
    };
  },
});
</script>

<template>
  <QTable
    :headers="headers.map(header => header.label)"
    :items="films.map(film => Object.values(film))"
  />
</template>
