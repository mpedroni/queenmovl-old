<script lang="ts">
import { defineComponent, PropType } from 'vue';

import Film from '@/types/Film';

import PrimaryBtn from '@/components/molecules/PrimaryBtn.vue';

import AppBar from '@/components/organisms/AppBar.vue';
import FilmTable from '@/components/organisms/FilmTable.vue';
import NewFilmDialog from '@/components/organisms/NewFilmDialog.vue';

export default defineComponent({
  name: '_home',

  components: {
    PrimaryBtn,

    AppBar,
    FilmTable,
    NewFilmDialog,
  },

  props: {
    films: {
      type: Array as PropType<Film[]>,
      required: true,
    },
  },

  data: () => ({
    dialog: false,
  }),
});
</script>

<template>
  <div id="container">
    <AppBar />

    <main>
      <NewFilmDialog
        :open="dialog"
        @confirm="dialog = false"
        @cancel="dialog = false"
      />

      <section>
        <div>
          <div id="btn-container">
            <PrimaryBtn @click="dialog = true">
              <fa-icon :icon="{prefix: 'fas', iconName: 'plus'}" />
            </PrimaryBtn>
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
  justify-content: flex-end;
  margin-bottom: 15px;
}

</style>
