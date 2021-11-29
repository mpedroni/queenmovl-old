<script lang="ts">
import { defineComponent } from 'vue';

import HomeTemplate from '@/components/templates/_home.vue';
import LoginTemplate from '@/components/templates/_login.vue';

import useAuth from '@/composables/useAuth';

export default defineComponent({
  name: 'Home',

  components: {
    HomeTemplate,
    LoginTemplate,
  },

  setup() {
    const { user } = useAuth();

    return {
      user,
    }
  },

});
</script>

<template>
  <HomeTemplate v-if="user" />
  <LoginTemplate v-else />
</template>
