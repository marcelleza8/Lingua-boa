<script lang="ts">
import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";
import Form from "../../components/Formularios/Form.vue";
import InputText from "../../components/Formularios/InputText.vue";
import InputUpload from "../../components/Formularios/InputUpload.vue";
import { useDefinicoesStore } from "../../stores/Database";
import LetrasWrapper from "../../components/LetrasWrapper.vue";
import router from "../../routes";

export default defineComponent({
  setup(props) {
    const items = useDefinicoesStore();

    const { definicoes: dicionario } = storeToRefs(items);

    const editarPalavra = ref(items.find(props.uuid));

    const palavraElm = ref();

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

    const addLetra = (letra: string) => {
      if (editarPalavra.value) editarPalavra.value.palavra += letra;
      if (palavraElm.value) palavraElm.value.focusInput();
    };

    return {
      editarPalavra,
      salvando,
      significados,
      salvarItem,
      addLetra,
      palavraElm,
    };
  },
  components: { Form, InputText, InputUpload, LetrasWrapper },
  props: ["uuid"],
});
</script>
<template>
  <Form v-if="editarPalavra">
    <div class="px-5">
      <h1
        class="text-center text-xl md:text-3xl"
        :class="!editarPalavra.palavra ? 'text-transparent' : ''"
      >
        Editando {{ editarPalavra.palavra }}
      </h1>
      <div class="space-y-4">
        <div>
          <InputText
            v-model="editarPalavra.palavra"
            input-id="input-palavra"
            class="teste"
            ref="palavraElm"
            label="Palavra"
          />
          <LetrasWrapper
            class="mx-auto mt-4 w-1/2 space-x-4 sm:w-1/4 md:w-1/5 lg:w-1/6"
            @change="addLetra"
          />
        </div>
        <div>
          <InputText
            v-model="significados"
            input-id="input-significados"
            label="Significados (separados por vírgula)"
          />
        </div>
      </div>
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
    </div>
  </Form>
</template>
