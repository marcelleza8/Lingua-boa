<script lang="ts">
import { defineComponent, ref } from "vue";
import LetrasWrapper from "./LetrasWrapper.vue";

export default defineComponent({
  name: "Header",
  setup() {
    const handleInputChange = () => {};
    const handleSubmit = () => {};
    const handleInputKeyDown = () => {};

    const inputSearch = ref<HTMLInputElement | null>(null);
    const searchFor = ref<string>("");

    const includeLetter = (e: any) => {
      searchFor.value += e;
      if (inputSearch.value) inputSearch.value.focus();
    };

    return {
      handleInputChange,
      handleSubmit,
      handleInputKeyDown,
      inputSearch,
      searchFor,
      includeLetter,
    };
  },
  components: { LetrasWrapper },
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
  <LetrasWrapper @change="includeLetter" />
</template>
