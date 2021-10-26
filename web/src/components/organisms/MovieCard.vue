<script lang="ts">
import { defineComponent, PropType } from 'vue';

import Movie from '@/types/Movie';

export default defineComponent({
  name: 'MovieCard',

  props: {
    movie: Object as PropType<Movie>,
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
      <h3>{{ movie.originalTitle }}</h3>

      <p>{{ movie.overview }}</p>
    </section>

    <section class="infos">
      {{ movie.releaseDate }}
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
  grid-template-columns: auto 3fr 1fr;
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
  font-size: 11px;
  color: rgba(0, 0, 0, 0.3);
  margin-bottom: 10px
}

.movie-card .main p {
  font-size: 13px;
  line-height: 1.5;
}

.movie-card .infos {

}

</style>
