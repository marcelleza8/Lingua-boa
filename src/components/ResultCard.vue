<script lang="ts">
// @ts-nocheck
import { defineComponent } from "vue";
import MeanigList from "./MeanigList.vue";
import Example from "./Example.vue";
import Synonym from "./Synonym.vue";
import Antonym from "./Antonym.vue";
import ShareIcon from "./Icons/ShareIcon.vue";

export default defineComponent({
  name: "ResultCard",
  setup() {
    const compartilhar = () => {
      alert("Em breve");
    };

    return {
      compartilhar,
    };
  },
  props: {
    result: {
      required: true,
    },
  },
  components: {
    ShareIcon,
    MeanigList,
    Example,
    Synonym,
    Antonym,
  },
});
</script>
<template>
  <div
    class="rounded-md border border-slate-600 py-4 px-2 shadow-md"
    v-if="result"
  >
    <div class="flex justify-between">
      <h1 class="text-2xl">{{ result.palavra }}</h1>
      <div class="flex items-center">
        <div>
          <ShareIcon @click="compartilhar" class="w-6" />
        </div>
      </div>
    </div>
    <span class="mt-4 block">{{ result.significados.join(", ") }}</span>
    <!-- <h3 class="mt-4 text-2xl font-bold">Significado e definição:</h3> -->
    <!-- <MeanigList mean="{response}" /> -->
    <!-- <h3 class="mt-4 text-2xl font-bold">Exemplo:</h3> -->
    <!-- <Example mean="{response}" /> -->
    <!-- <h3 class="mt-4 text-2xl font-bold">Sinônimo:</h3> -->
    <!-- <Synonym mean="{response}" /> -->
    <!-- <h3 class="mt-4 text-2xl font-bold">Antônimo:</h3> -->
    <!-- <Antonym mean="{response}" /> -->
  </div>
</template>
