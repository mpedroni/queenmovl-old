<script lang="ts">
import { defineComponent } from 'vue';

import Btn from '@/components/atoms/Btn.vue';
import TextInput from '@/components/atoms/TextInput.vue';
import QDialog from '@/components/atoms/Dialog.vue';

import searchMovie from '@/api/requests/searchMovie';

export default defineComponent({
  name: 'NewFilmDialog',

  components: {
    Btn,
    TextInput,
    QDialog,
  },

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    title: '',
    movies: [],
  }),

  methods: {
    async searchMovie() {
      const movies: any = await searchMovie({ name: this.title });

      this.movies = movies.results;

      console.log(movies.results);
    },
  },
});
</script>

<template>
  <QDialog id="dialog" :open="open">
      <header id="toolbar">
        <span id="toolbar-title">
          Adicionar Filme
        </span>
      </header>

      <div id="dialog-container">
        <section id="dialog-content">
          <TextInput
            v-model:value="title"
            label="Título"
            @input="title.length > 3 && searchMovie()"
          />
        </section>

        <section>
          <div v-for="movie in movies" :key="movie.id" style="margin: 4px 0">
            <span>
              {{ movie.title }}
            </span>
          </div>
        </section>

        <footer id="dialog-actions">
          <Btn id="add-btn" @click="$emit('confirm')">Adicionar</Btn>
          <Btn id="cancel-btn" @click="$emit('cancel')">Cancelar</Btn>
        </footer>
      </div>
  </QDialog>
</template>

<style scoped>
@import url('../../styles/colors.css');

#dialog {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  width: 1000px;
  height: 200px;
}

#dialog-container {
  padding: 15px;
}

#dialog #toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  color: #fff;
  padding: 15px;
}

#dialog #toolbar #toolbar-title {
  font-weight: bold;
  font-size: 1.2rem;
}

#dialog-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

#dialog-actions #add-btn {
  background-color: transparent;
  color: var(--primary)
}

#dialog-actions #cancel-btn {
  background-color: transparent;
  color: var(--error)
}
</style>
