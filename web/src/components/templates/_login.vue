<script lang="ts">
import { defineComponent } from 'vue';

import GoogleAuthBtn from '@/components/atoms/GoogleAuthBtn.vue';
import Logo from '@/components/atoms/Logo.vue';

export default defineComponent({
  name: '_login',

  components: {
    GoogleAuthBtn,
    Logo,
  },
});
</script>

<template>
  <header class="alert">
    <fa-icon class="icon" :icon="{ prefix: 'fa', iconName: 'exclamation' }" />

    <span>
        Queenmovl é um projeto em desenvolvimento.
        Portanto, o acesso está limitado apenas para alguns usuários.
    </span>
  </header>

  <div class="container">

    <section>
      <header>
        <Logo class="logo" size="3rem" />
      </header>

      <main>
        <p>Faça login para continuar</p>
        <GoogleAuthBtn />
      </main>
    </section>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.alert {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 24px;
  text-align: center;
  background-color: #2196f333;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 500;
  font-size: 0.9rem;
}

.alert .icon {
  margin-right: 16px;
}

.container section header {
  margin-bottom: 50px;
}

.container main p {
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.2rem;
  text-align: center;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
