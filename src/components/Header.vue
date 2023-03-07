<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const handleInputChange = () => {};
    const handleSubmit = () => {};
    const handleInputKeyDown = () => {};

    const value = "";

    return {
      handleInputChange,
      handleSubmit,
      handleInputKeyDown,
      value,
    };
  },
});
</script>
<template>
  <div class="w-100 absolute top-4 z-10 px-2">
    <input
      class="px-4 py-2 md:w-80"
      type="text"
      placeholder="Pesquisar..."
      @change="handleInputChange"
      :value="value"
      @keydown="handleInputKeyDown"
    />
    <button
      class="border-l bg-blue-400 px-4 py-2 text-white"
      @click="handleSubmit"
    >
      Pesquisar
    </button>
  </div>
</template>
