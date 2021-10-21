<script lang="ts">
import { defineComponent } from 'vue';

import Btn from '@/components/atoms/Btn.vue';
import PrimaryTextInput from '@/components/molecules/PrimaryTextInput.vue';
import QDialog from '@/components/atoms/Dialog.vue';

export default defineComponent({
  name: 'NewFilmDialog',

  components: {
    Btn,
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
  <QDialog id="dialog" :open="open">
      <header id="toolbar">
        <span id="toolbar-title">
          Adicionar Filme
        </span>
      </header>

      <div id="dialog-container">
        <section id="dialog-content">
          <PrimaryTextInput />
        </section>

        <footer id="dialog-actions">
          <Btn id="add-btn" @click="$emit('confirm')">Adicionar</Btn>
          <Btn id="cancel-btn" @click="$emit('cancel')">Cancelar</Btn>
        </footer>
      </div>
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

#dialog-container {
  padding: 15px;
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

#dialog-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

#dialog-actions #add-btn {
  background-color: transparent;
  color: var(--primary)
}

#dialog-actions #cancel-btn {
  background-color: transparent;
  color: var(--error)
}
</style>
