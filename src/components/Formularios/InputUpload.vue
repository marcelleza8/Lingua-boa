<template>
  <div class="inline-block cursor-pointer">
    <label for="importJSON" class="cursor-pointer">
      <slot></slot>
    </label>
    <input
      type="file"
      id="importJSON"
      style="display: none"
      @change="handleFileChange($event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useDefinicoesStore } from "../../stores/Database";

export default defineComponent({
  setup() {
    const definicoes = useDefinicoesStore();

    const handleFileChange = ($e: Event) => {
      const fileElm = $e.target as HTMLInputElement;
      const reader = new FileReader();

      reader.onload = () => {
        try {
          const jsonData = JSON.parse(reader.result as string);
        } catch (error) {
          alert("O arquivo selecionado não é um JSON válido");
        }

        setTimeout(() => {
          definicoes.setDatabase(reader.result as string);
        }, 100);
        alert("Carregando JSON aguarde um instante");
        console.log("Carregando JSON aguarde um instante");
      };
      if (fileElm.files) reader.readAsText(fileElm.files[0]);
    };

    return {
      handleFileChange,
    };
  },
});
</script>

<style scoped></style>
