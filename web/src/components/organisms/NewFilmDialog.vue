<script lang="ts">
import { defineComponent } from 'vue';

import Movie from '@/types/Movie';

import Btn from '@/components/atoms/Btn.vue';
import MovieCard from '@/components/organisms/MovieCard.vue';
import QDialog from '@/components/atoms/Dialog.vue';
import TextInput from '@/components/atoms/TextInput.vue';

import searchMovie from '@/api/requests/searchMovie';

export default defineComponent({
  name: 'NewFilmDialog',

  components: {
    Btn,
    MovieCard,
    QDialog,
    TextInput,
  },

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    error: '',
    movies: [] as Movie[],
    title: '',
  }),

  methods: {
    async searchMovie() {
      const response = await searchMovie({ name: this.title });

      if ('statusCode' in response) {
        this.error = response.statusMessage;
        return;
      }

      this.movies = response.results;
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
      <section id="dialog-text-input">
        <TextInput
          v-model:value="title"
          label="Título"
          @input="title.length > 3 && searchMovie()"
        />
      </section>

      <section v-if="title.length < 3">
        <span>Digite pelo menos 3 letras para pesquisar</span>
      </section>

      <section v-else-if="!movies.length">
        <span>Nenhum com filme esse nome foi encontrado :(</span>
      </section>

      <article v-else class="movie-list">
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" class="movie" />
      </article>

      <footer id="dialog-actions">
        <Btn id="add-btn" @click="$emit('confirm')">Adicionar</Btn>
        <Btn id="cancel-btn" @click="$emit('cancel')">Cancelar</Btn>
      </footer>
    </div>
  </QDialog>
</template>

<style scoped>
@import url("../../styles/colors.css");

#dialog {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  width: 1000px;
  height: fit-content;
  max-height: 700px;
}

#dialog-container {
  padding: 15px;
}

#dialog-text-input {
  margin-bottom: 15px;
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
  color: var(--primary);
}

#dialog-actions #cancel-btn {
  background-color: transparent;
  color: var(--error);
}

.movie-list .movie:not(:last-child) {
  margin-bottom: 15px;
}
</style>
