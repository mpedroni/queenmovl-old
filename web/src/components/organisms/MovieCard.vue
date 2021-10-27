<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import Movie from '@/types/Movie';

export default defineComponent({
  name: 'MovieCard',

  props: {
    movie: Object as PropType<Movie>,
  },

  methods: {
    formatDate(date: string) {
      return format(parseISO(date), 'LLLL/yyyy', { locale: ptBR })
    },
  },
});
</script>

<template>
  <div class="movie-card">
    <section class="poster">
      <img :src="`https://image.tmdb.org/t/p/w92/${movie.posterPath}`" :alt="`${movie.title} movie poster`">
    </section>

    <section class="main">
      <h2>{{ movie.title }}</h2>
      <h3>
        {{ movie.originalTitle }}<span v-if="movie.originalTitle && movie.releaseDate">, </span>
        {{ movie.releaseDate && formatDate(movie.releaseDate) }}
      </h3>

      <p>{{ movie.overview || 'Sinopse não encontrada' }}</p>
    </section>

    <section class="infos">
      <fa-icon :icon="{prefix: 'fas', iconName: 'chevron-right'}" />
    </section>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.movie-card p, h2, h3 {
  margin: 0;
}

.movie-card {
  display: grid;
  box-sizing: border-box;
  grid-template-columns: auto 11fr 1fr;
  align-items: flex-start;
  grid-gap: 12px;
  padding: 12px;
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.1);
}

.movie-card .poster img {
  border-radius: 8px;
}

.movie-card .main h2 {
  font-size: 18px;
}

.movie-card .main h3 {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
  margin-bottom: 10px
}

.movie-card .main p {
  font-size: 13px;
  line-height: 1.5;
}

.movie-card .infos {
  align-self: stretch;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
