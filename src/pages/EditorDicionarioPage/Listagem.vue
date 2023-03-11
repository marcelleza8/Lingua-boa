<script lang="ts">
// @ts-nocheck
import { defineComponent, ref, computed } from "vue";
import { saveAs } from "file-saver";
import { storeToRefs } from "pinia";
import Form from "../../components/Formularios/Form.vue";
import InputText from "../../components/Formularios/InputText.vue";
import InputUpload from "../../components/Formularios/InputUpload.vue";
import { Definicao } from "../../types/Definicao";
import { useDefinicoesStore } from "../../stores/Database";

export default defineComponent({
  name: "EditorDicionárioPage",
  setup() {
    const items = useDefinicoesStore();

    const { totalItems: totalPalavras, definicoes: dicionario } =
      storeToRefs(items);

    const editarPalavra = ref<Definicao>({
      id: "",
      palavra: "",
      significados: [],
      sinonimos: [],
      antonimos: [],
      etiquetas: [],
      frases: [],
    });
    const significados = ref("");

    const salvando = ref(false);

    const salvar = () => {
      const jsonData = JSON.stringify(dicionario.value);
      const blob = new Blob([jsonData], { type: "application/json" });
      const filename = prompt(
        "QUE NOME QUE DAR PARA O JSON?",
        "dicionário_nheengatu",
      );
      saveAs(blob, `${filename}.json`);
    };

    const editarItem = (palavra: any) => {
      const editar = dicionario.value.find((item) => palavra.id === item.id);
      if (editar) {
        editarPalavra.value = editar;
        significados.value = editarPalavra.value.significados.join(",");
      } else {
        alert("Não encontrado");
      }
    };

    const removerItem = (palavra: any) => {
      const remover = dicionario.value.find((item) => palavra.id === item.id);
      if (remover) {
        if (
          confirm(`Confirmar exclusão de ${remover.palavra.toUpperCase()} ?`)
        ) {
          items.delete(remover);
        }
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
      editarPalavra.value = {
        id: "",
        palavra: "",
        significados: [],
        sinonimos: [],
        antonimos: [],
        etiquetas: [],
        frases: [],
      };
      salvando.value = false;
    };

    const carregar = () => {};

    return {
      dicionario,
      editarPalavra,
      salvando,
      significados,
      totalPalavras,
      salvar,
      carregar,
      editarItem,
      removerItem,
      salvarItem,
    };
  },
  components: { Form, InputText, InputUpload },
});
</script>
<template>
  <h1>Editor de Dicionário (Total de Palavras: {{ totalPalavras ?? 0 }})</h1>
  <div class="px-2">
    <div v-if="editarPalavra.id">
      <Form>
        <h1>Editando {{ editarPalavra.palavra }}</h1>
        <InputText v-model.trim="editarPalavra.palavra" label="Palavra" />
        <InputText
          v-model.trim="significados"
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
      <div class="flex justify-evenly">
        <InputUpload class="rounded-md border border-orange-peel-500 px-2 py-1"
          >Carregar JSON</InputUpload
        >
        <button
          @click="salvar"
          class="rounded-md border border-green-600 px-2 py-1"
        >
          Salvar JSON
        </button>
      </div>

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
              <button @click="removerItem(item)">EX</button>
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

td button {
  @apply m-1 rounded-md bg-amber-500 px-2 py-1;
}
</style>
