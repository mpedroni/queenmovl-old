<script lang="ts">
import { defineComponent, ref } from 'vue';
import HomeTemplate from '@/components/templates/_home.vue';
import LoginTemplate from '@/components/templates/_login.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HomeTemplate,
    LoginTemplate,
  },
  setup() {
    const films = ref([]);
    const user = ref(null);
    return {
      films,
      user,
    };
  },
});
</script>

<template>
  <HomeTemplate v-if="user" :films="films" />
  <LoginTemplate v-else />
</template>
