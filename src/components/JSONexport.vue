<script lang="ts">
import { defineComponent } from "vue";
import InputUpload from "./Formularios/InputUpload.vue";
import { saveAs } from "file-saver";
export default defineComponent({
  name: "JSONexport",
  setup(props) {
    const exportarJSON = () => {
      const jsonData = JSON.stringify(props.exportData);
      const blob = new Blob([jsonData], { type: "application/json" });
      const filename = prompt(
        "QUE NOME QUE DAR PARA O JSON?",
        "dicionário_nheengatu",
      );
      saveAs(blob, `${filename}.json`);
    };

    return {
      exportarJSON,
    };
  },
  props: {
    exportData: {
      required: true,
    },
  },
  components: { InputUpload },
});
</script>
<template>
  <div class="space-x-3">
    <InputUpload class="rounded-md border border-orange-peel-500 px-2 py-1"
      >Carregar JSON</InputUpload
    >
    <button
      @click="exportarJSON"
      class="rounded-md border border-green-600 px-2 py-1"
    >
      Exportar JSON
    </button>
  </div>
</template>
