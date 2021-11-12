<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Avatar',

  props: {
    url: {
      type: String,
      default: '',
    },
  },
})
</script>

<template>
  <img
    :src="url"
    v-bind="$attrs"
    class="avatar"
  />
</template>

<style scoped>
.avatar {
  width: 128px;
  align-self: center;
  cursor: pointer;
}
</style>
