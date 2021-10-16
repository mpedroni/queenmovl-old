<script lang="ts">
import { defineComponent } from 'vue';

import Logo from '@/components/atoms/Logo.vue';

export default defineComponent({
  name: 'AppBar',

  components: {
    Logo,
  },
});
</script>

<template>
  <nav>
    <Logo />
  </nav>
</template>
