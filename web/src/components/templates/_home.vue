<script lang="ts">
import { defineComponent, PropType } from 'vue';

import Film from '@/types/Film';

import AppBar from '@/components/organisms/AppBar.vue';
import FilmTable from '@/components/organisms/FilmTable.vue';

export default defineComponent({
  name: '_home',

  props: {
    films: {
      type: Array as PropType<Film[]>,
      required: true,
    },
  },

  components: {
    AppBar,
    FilmTable,
  },
});
</script>

<template>
  <div id="container">
    <AppBar />

    <main>
      <section id="film-table__section">
        <FilmTable :films="films" />
      </section>
    </main>
  </div>
</template>

<style scoped>
#container {
  margin: 0 200px 0 200px;
}

#film-table__section {
  display: flex;
  justify-content: center;
}
</style>
