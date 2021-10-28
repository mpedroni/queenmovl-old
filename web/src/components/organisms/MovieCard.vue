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
    addMovie() {
      console.log('add movie');
    },
  },
});
</script>

<template>
  <div class="movie-card" @click="addMovie">
    <section class="poster">
      <img :src="`https://image.tmdb.org/t/p/w92/${movie.posterPath}`" :alt="`${movie.title} movie poster`">
    </section>

    <section class="main">
      <h2 @click.stop="() => {}">{{ movie.title }}</h2>
      <h3 @click.stop="() => {}">
        {{ movie.originalTitle }}<span v-if="movie.originalTitle && movie.releaseDate">, </span>
        {{ movie.releaseDate && formatDate(movie.releaseDate) }}
      </h3>

      <p @click.stop="() => {}">{{ movie.overview || 'Sinopse não encontrada' }}</p>
    </section>

    <section class="infos">
      <fa-icon class="icon" :icon="{prefix: 'fas', iconName: 'plus'}" />
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
  transition: border 0.2s ease;
  transition: background 0.2s ease;
}

.movie-card .poster img {
  border-radius: 8px;
}

.movie-card h2, h3, p {
  cursor: text;
  user-select: all;
}

.movie-card .main h2 {
  font-size: 18px;
  transition: color 0.2s ease;
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

.movie-card .icon {
  color: rgba(0, 0, 0, 0.3);
  transition: border 0.2s ease;
}

.movie-card:hover .main h2,
.movie-card:hover .infos .icon {
  color: var(--primary);
}

.movie-card:hover {
  border-color: var(--primary);
  background-color: rgba(0, 0, 0, 0.05);
  cursor: pointer;
}

</style>
