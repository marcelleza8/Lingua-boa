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
  <div class="bg-gray-700">
    <div class="container mx-auto py-8">
      <h1 class="text-center text-3xl font-bold text-white">
        Dicionário de Nheengatú
      </h1>
      <p class="mt-1 mb-10 text-center text-lg text-slate-300">
        Busque por palavras
      </p>

      <div class="mt-5 flex items-center justify-center">
        <div class="flex rounded border-2 border-gray-200">
          <input
            class="px-4 py-2 md:w-80"
            type="text"
            placeholder="Perquisar..."
            @change="handleInputChange"
            :value="value"
            @keydown="handleInputKeyDown"
          />
          <button
            class="border-l bg-blue-400 px-4 py-2 text-white"
            @click="handleSubmit"
          >
            Perquisar
          </button>
        </div>
      </div>

      <h3 class="mt-4 text-center text-gray-50">
        Resultados de : <span class="font-bold text-white">busca</span>
      </h3>
    </div>
  </div>
</template>
