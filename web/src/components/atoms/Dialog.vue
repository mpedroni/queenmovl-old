<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QDialog',

  mounted() {
    const dialog = window.document.querySelector('dialog');

    /* eslint-disable-next-line */
    // @ts-ignore
    dialog.showModal();
  },
});
</script>

<template>
  <dialog>
    <slot />
  </dialog>
</template>

<style scoped>
dialog {
  border: none;
  padding: 0;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

</style>
