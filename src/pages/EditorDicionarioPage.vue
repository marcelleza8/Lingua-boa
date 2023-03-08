<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import Form from "../components/Formularios/Form.vue";
import InputText from "../components/Formularios/InputText.vue";
import { saveAs } from "file-saver";

import dicionario_data from "../data/dicionario_nheengatu.js";
export default defineComponent({
  name: "EditorDicionárioPage",
  setup() {
    const dicionario = ref(dicionario_data);

    const editarPalavra = ref({});
    const significados = ref("");

    const salvando = ref(false);

    const salvar = () => {
      const jsonData = JSON.stringify(dicionario.value);
      const blob = new Blob([jsonData], { type: "application/json" });
      saveAs(blob, "data.json");
    };

    const editarItem = (palavra: any) => {
      const editar = dicionario.value.find((item) => palavra.id === item.id);
      if (editar) {
        editarPalavra.value = editar;

        console.log(significados.value);
        significados.value = editarPalavra.value.significados.join(",");
        console.log(typeof significados.value);
      } else {
        alert("Não encontrado");
      }
    };

    const salvarItem = () => {
      salvando.value = true;
      const indice = dicionario.value.findIndex(
        (item) => editarPalavra.value.id === item.id,
      );

      let signifs = significados.value.split(",");

      editarPalavra.value.significados = signifs
        .map((i: string) => i.trim())
        .filter((i: string) => i.length);

      dicionario.value[indice] = editarPalavra.value;
      editarPalavra.value = {};
      salvando.value = false;
    };

    const totalPalavras = computed(() => dicionario.value.length);

    return {
      dicionario,
      editarPalavra,
      salvando,
      significados,
      totalPalavras,
      salvar,
      editarItem,
      salvarItem,
    };
  },
  components: { Form, InputText },
});
</script>
<template>
  <h1>Editor de Dicionário (Total de Palavras: {{ totalPalavras }})</h1>
  <div class="px-2">
    <div v-if="Object.keys(editarPalavra).length">
      <Form>
        <h1>Editando {{ editarPalavra.palavra }}</h1>
        <InputText v-model="editarPalavra.palavra" label="Palavra" />
        <InputText
          v-model="significados"
          label="Significados (separados por vírgula)"
        />
        <div class="mt-3">
          <button
            :disabled="salvando"
            @click="salvarItem"
            class="rounded-lg border border-suikiri-700 px-2 py-1 disabled:bg-gray-700"
          >
            Salvar
          </button>
          <span v-if="salvando"
            >Salvando Palavra, aguarde um instante ....</span
          >
        </div>
      </Form>
    </div>
    <div v-else>
      <button
        @click="salvar"
        class="rounded-md border border-orange-peel-500 px-2 py-1"
      >
        Salvar como JSON
      </button>

      <table class="w-full table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">Palavra</th>
            <th class="px-4 py-2">Significados</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in dicionario" :key="item.id">
            <td class="font-bold">{{ item.palavra }}</td>
            <td class="space-x-2">
              <span
                class="rounded bg-suikiri-700 px-2 py-1 font-bold text-orange-peel-400"
                v-for="significado in item.significados"
                >{{ significado }}</span
              >
            </td>
            <td>
              <button @click="editarItem(item)">Ed</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
td {
  @apply border px-4 py-2;
}
</style>
