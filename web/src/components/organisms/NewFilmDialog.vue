<script lang="ts">
import { defineComponent } from 'vue';

import PrimaryTextInput from '@/components/molecules/PrimaryTextInput.vue';
import QDialog from '@/components/atoms/Dialog.vue';

export default defineComponent({
  name: 'NewFilmDialog',

  components: {
    PrimaryTextInput,
    QDialog,
  },

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<template>
  <QDialog id="dialog">
      <header id="toolbar">
        <span id="toolbar-title">
          Adicionar Filme
        </span>
      </header>

      <section id="form">
        <PrimaryTextInput />
      </section>
  </QDialog>
</template>

<style scoped>
@import url('../../css/colors.css');

#dialog {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  width: 1000px;
  height: 200px;
}

#dialog #toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  color: #fff;
  padding: 15px;
}

#dialog #toolbar #toolbar-title {
  font-weight: bold;
  font-size: 1.2rem;
}

#form {
  padding: 15px
}
</style>
