<template>
  <div class="inline-block cursor-pointer">
    <label for="fileInput" class="cursor-pointer">
      <slot></slot>
    </label>
    <input
      type="file"
      id="fileInput"
      ref="fileInput"
      style="display: none"
      @change="handleFileChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useDefinicoesStore } from "../../stores/Database";

export default defineComponent({
  setup() {
    const fileInput = ref(null);

    const definicoes = useDefinicoesStore();

    const handleFileChange = () => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          if (typeof reader.result == "string") {
            const jsonData = JSON.parse(reader.result);
            definicoes.setDatabase(reader.result);
          }
        } catch (error) {
          alert("O arquivo selecionado não é um JSON válido");
        }
      };
      if (fileInput.value != null)
        reader.readAsText(fileInput.value["files"][0]);
    };

    return {
      fileInput,
      handleFileChange,
    };
  },
});
</script>

<style scoped></style>
