<script lang="ts">
import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";
import Form from "../../components/Formularios/Form.vue";
import InputText from "../../components/Formularios/InputText.vue";
import InputUpload from "../../components/Formularios/InputUpload.vue";
import { useDefinicoesStore } from "../../stores/Database";

import router from "../../routes";

export default defineComponent({
  setup(props) {
    const items = useDefinicoesStore();

    const { definicoes: dicionario } = storeToRefs(items);

    const editarPalavra = ref(items.find(props.uuid));

    const significados = ref(editarPalavra.value?.significados.join(",") || "");

    const salvando = ref(false);

    const salvarItem = () => {
      salvando.value = true;

      let signifs = significados.value.split(",");

      if (editarPalavra.value)
        editarPalavra.value.significados = signifs
          .map((i: string) => i.trim())
          .filter((i: string) => i.length);

      setTimeout(() => {
        if (editarPalavra) {
          if (editarPalavra.value?.id) {
            items.update(editarPalavra.value);
          } else {
            if (editarPalavra.value) items.create(editarPalavra.value);
          }
        }

        salvando.value = false;
        router.push({ name: "editor-dicionario" });
      }, 500);
    };

    return {
      editarPalavra,
      salvando,
      significados,
      salvarItem,
    };
  },
  components: { Form, InputText, InputUpload },
  props: ["uuid"],
});
</script>
<template>
  <Form v-if="editarPalavra">
    <h1
      class="text-center text-3xl"
      :class="!editarPalavra.palavra ? 'text-transparent' : ''"
    >
      Editando {{ editarPalavra.palavra }}
    </h1>
    <InputText v-model="editarPalavra.palavra" label="Palavra" />
    <InputText
      v-model="significados"
      label="Significados (separados por vírgula)"
    />
    <div class="mt-3 flex justify-around">
      <button
        :disabled="salvando"
        @click="salvarItem"
        class="rounded-lg border border-suikiri-700 px-2 py-1 disabled:bg-gray-700"
      >
        Salvar
      </button>
      <span v-if="salvando">Salvando Palavra, aguarde um instante ....</span>
      <router-link
        :to="{ name: 'editor-dicionario' }"
        class="rounded-lg border border-orange-300 px-2 py-1 disabled:bg-gray-700"
        >Voltar</router-link
      >
    </div>
  </Form>
</template>
