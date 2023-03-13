<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const handleInputChange = () => {};
    const handleSubmit = () => {};
    const handleInputKeyDown = () => {};

    const inputSearch = ref(null);
    const searchFor = ref("");

    const addLetra = ($e: any) => {
      searchFor.value += $e.target.innerText;
    };

    return {
      handleInputChange,
      handleSubmit,
      handleInputKeyDown,
      inputSearch,
      searchFor,
      addLetra,
    };
  },
});
</script>
<template>
  <div class="pt-4 text-center">
    <input
      class="px-4 py-2 md:w-80"
      type="text"
      placeholder="Pesquisar..."
      ref="inputSearch"
      @change="handleInputChange"
      v-model="searchFor"
      @keydown="handleInputKeyDown"
    />
    <button
      class="border-l bg-suikiri-700 px-4 py-2 text-white"
      @click="handleSubmit"
    >
      Pesquisar
    </button>
  </div>
  <div class="letras">
    <button @click="addLetra($event)">ẽ</button>
    <button @click="addLetra($event)">ĩ</button>
    <button @click="addLetra($event)">ũ</button>
    <button @click="addLetra($event)">ã</button>
  </div>
</template>

<style scoped>
.letras {
  @apply mt-4 space-x-3 text-center;
}
.letras button {
  @apply rounded-lg bg-orange-600 px-3 py-2;
}
</style>
