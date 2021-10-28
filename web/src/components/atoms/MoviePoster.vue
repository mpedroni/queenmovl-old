<script lang="ts">
import { defineComponent, PropType } from 'vue';

import Movie from '@/types/Movie';

export default defineComponent({
  name: 'MoviePoster',

  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: true,
    },
  },
})
</script>

<template>
  <img v-if="movie.posterPath" :src="`https://image.tmdb.org/t/p/w92/${movie.posterPath}`" :alt="`${movie.title} movie poster`">
  <img v-else src="../../assets/no-image-holder.svg" alt="Default movie poster" />
</template>

<style scoped>
img {
  border-radius: 8px;
}
</style>
