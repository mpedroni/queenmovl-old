<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mapState } from 'vuex';
import { RootState } from '@/store'
import HomeTemplate from '@/components/templates/_home.vue';
import LoginTemplate from '@/components/templates/_login.vue';
import UserCredential from '@/types/UserCredential';

export default defineComponent({
  name: 'Home',

  components: {
    HomeTemplate,
    LoginTemplate,
  },

  computed: {
    ...mapState<UserCredential>({
      user: ({ auth }: RootState) => auth?.user,
    }),
  },
});
</script>

<template>
  <HomeTemplate v-if="user" />
  <LoginTemplate v-else />
</template>
