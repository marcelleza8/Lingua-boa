<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useDefinicoesStore } from "../../stores/Database";
import JSONexport from "../../components/JSONexport.vue";

export default defineComponent({
  name: "EditorDicionárioPage",
  setup() {
    const items = useDefinicoesStore();

    const { totalItems: totalPalavras, definicoes: dicionario } =
      storeToRefs(items);

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

    return {
      dicionario,
      totalPalavras,
      removerItem,
    };
  },
  components: { JSONexport },
});
</script>
<template>
  <h1>Editor de Dicionário (Total de Palavras: {{ totalPalavras ?? 0 }})</h1>
  <div class="px-2">
    <div>
      <div class="flex justify-evenly">
        <router-link
          class="rounded-md border border-green-600 px-2 py-1"
          :to="{ name: 'editor-dicionario.form', params: { uuid: 'novo' } }"
        >
          Nova palavra
        </router-link>
        <JSONexport :export-data="dicionario" />
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
            <td class="actions">
              <router-link
                :to="{
                  name: 'editor-dicionario.form',
                  params: { uuid: item.id },
                }"
                >ED</router-link
              >
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
td.actions {
  @apply flex;
}
td.actions * {
  @apply m-1 rounded-md bg-amber-500 px-2 py-1;
}
</style>
