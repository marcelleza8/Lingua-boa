<script lang="ts">
import { defineComponent, ref } from "vue";
import Form from "../components/Formularios/Form.vue";
import InputText from "../components/Formularios/InputText.vue";
import { saveAs } from "file-saver";

import dicionario_data from "../data/dicionario_nheengatu.js";
export default defineComponent({
  name: "EditorDicionárioPage",
  setup() {
    const dicionario = ref(dicionario_data);

    const salvar = () => {
      const jsonData = JSON.stringify(dicionario.value);
      const blob = new Blob([jsonData], { type: "application/json" });
      saveAs(blob, "data.json");
    };

    return {
      dicionario,
      salvar,
    };
  },
  components: { Form, InputText },
});
</script>
<template>
  <h1>Editor de Dicionário</h1>
  <div class="px-2">
    <div>
      <button
        @click="salvar"
        class="rounded-md border border-orange-peel-500 px-2 py-1"
      >
        Salvar como JSON
      </button>
    </div>
    <table class="w-full table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">Palavra</th>
          <th class="px-4 py-2">Significado</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dicionario" :key="item.id">
          <td>{{ item.palavra }}</td>
          <td>{{ item.significados }}</td>
          <td>
            <button>Ed</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="false">
    <Form>
      <h1>Formulário</h1>
      <InputText label="ID" />
      <InputText label="Palavra" />
    </Form>
  </div>
</template>

<style scoped>
td {
  @apply border px-4 py-2;
}
</style>
