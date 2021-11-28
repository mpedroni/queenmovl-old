<script lang="ts">
import { defineComponent, ref } from 'vue';

import Btn from '@/components/atoms/Btn.vue';
import QDialog from '@/components/atoms/Dialog.vue';
import TextInput from '@/components/atoms/TextInput.vue';

import useUserLists from '@/composables/useUserLists';

export default defineComponent({
  name: 'NewListDialog',

  components: {
    Btn,
    QDialog,
    TextInput,
  },

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    const headers = ref('');
    const name = ref('');
    const type = ref('');

    const { create } = useUserLists();

    const createList = async () => {
      try {
        const parsedHeaders = headers.value.split(',').map((header) => header.trim());
        await create({ name: name.value, type: type.value, headers: parsedHeaders });
      } catch (error) {
        console.log(error);
      }
    }

    return {
      createList,
      headers,
      name,
      type,
    }
  },
});
</script>

<template>
  <QDialog id="dialog" :open="open">
    <header id="toolbar">
      <span id="toolbar-title">
        Adicionar Lista
      </span>
    </header>

    <div id="dialog-container">
      <section class="data-inputs">
        <TextInput
          v-model:value="name"
          label="Nome"
          class="input"
        />

        <TextInput
          v-model:value="type"
          label="Tipo"
          class="input"
        />
      </section>

      <section>
        <TextInput
          v-model:value="headers"
          label="Cabeçalhos"
          class="input"
        />
        <span class="input-hint">Digite os cabeçalhos separados por vírgulas</span>
        <span class="input-hint">Ex: Nome, Plataforma, Data Lançamento, Nota...</span>
      </section>

      <footer id="dialog-actions">
        <Btn
          id="add-btn"
          @click="createList"
        >
          Adicionar
        </Btn>
        <Btn id="cancel-btn" @click="$emit('cancel')">Cancelar</Btn>
      </footer>
    </div>
  </QDialog>
</template>

<style scoped>
#dialog {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  width: 1000px;
  height: fit-content;
  max-height: 700px;
  margin: auto;
}

#dialog-container {
  padding: 15px;
  display: flex;
  flex-direction: column;
}

#dialog-container .data-inputs {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
}

.input-hint {
  display: block;
  color: #888;
  font-size: 14px;
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
  color: var(--primary);
}

#dialog-actions #cancel-btn {
  background-color: transparent;
  color: var(--error);
}
</style>
