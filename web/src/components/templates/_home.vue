<script lang="ts">
import { defineComponent, PropType } from 'vue';

import Film from '@/types/Film';

import AppBar from '@/components/organisms/AppBar.vue';
import FilmTable from '@/components/organisms/FilmTable.vue';
import PrimaryBtn from '@/components/molecules/PrimaryBtn.vue';

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
    PrimaryBtn,
  },
});
</script>

<template>
  <div id="container">
    <AppBar />

    <main>
      <section>
        <div>
          <div id="btn-container">
            <primary-btn>
              <fa-icon :icon="{prefix: 'fas', iconName: 'plus'}" />
            </primary-btn>
          </div>

          <div>
            <FilmTable :films="films" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
#container {
  margin: 0 200px 0 200px;
}

section {
  display: flex;
  justify-content: center;
}

#btn-container {
  display: flex;
  justify-content: end;
  margin-bottom: 15px;
}

</style>
