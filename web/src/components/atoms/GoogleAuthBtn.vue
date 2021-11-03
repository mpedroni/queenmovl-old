<script lang="ts">
import { defineComponent, ref } from 'vue';
import { User } from '@firebase/auth';

import { loginWithGoogle } from '@/api/firebase';

export default defineComponent({
  name: 'GoogleAuthBtn',

  setup() {
    const user = ref({} as User);

    async function login() {
      try {
        const response = await loginWithGoogle();

        user.value = response.user;
      } catch (error) {
        console.log(error)
      }
    }

    return {
      login,
    }
  },

})
</script>

<template>
  <div class="google-auth-btn" @click="login">
    <img class="google-logo" src="https://imagepng.org/wp-content/uploads/2019/08/google-icon-4.png" alt="Google Logo">

    <span class="label">
      Login com Google
    </span>
  </div>
</template>

<style scoped>
@import url('../../styles/colors.css');

.google-auth-btn {
  padding: 16px;
  color: var(--primary);
  border: solid thin var(--primary);
  border-radius: 8px;
  font-size: 1.2rem;
  width: 256px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: all 0.2s ease;
}

.google-auth-btn:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.google-auth-btn:active {
  background-color: rgba(0, 0, 0, 0.05);
}

.google-auth-btn .google-logo,
.google-auth-btn .label {
  pointer-events: none;
  user-select: none;
}

.google-auth-btn .google-logo {
  width: 36px;
  height: auto;
}

.google-auth-btn .label {
  flex-grow: 1;
  text-align: center;
}
</style>
