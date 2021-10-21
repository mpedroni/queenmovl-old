<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QDialog',

  props: {
    /**
     * Controls the state of the dialog (open or closed)
     */
    open: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    dialog() {
      return this.$el as HTMLDialogElement & { showModal(): void, close(): void, open: boolean };
    },
  },

  watch: {
    open(open: boolean) {
      this.dialog[open ? 'showModal' : 'close']();
    },
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
