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
  <div>
    <section>
      <img :src="`https://image.tmdb.org/t/p/w92/${movie.posterPath}`" :alt="`${movie.title} movie poster`">
    </section>

    <section>
      <h1>{{ movie.title }}</h1>
      <p>{{ movie.overview }}</p>
    </section>

    <section>
      {{ movie.releaseDate }}
    </section>
  </div>
</template>
