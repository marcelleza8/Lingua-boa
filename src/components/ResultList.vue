<script lang="ts">
import { defineComponent } from "vue";
import { Definicao } from "../types/Definicao";

import ResultCard from "./ResultCard.vue";

export default defineComponent({
  setup() {
    // console.log(import.meta.env.VITE_BASE_URL);
    // console.log(import.meta.env.BASE_URL, "er");
  },
  components: { ResultCard },
  props: ["items"],
});
</script>

<template>
  <div class="container mx-auto space-y-3 p-4">
    <div class="grid grid-cols-12 gap-8">
      <ResultCard
        class="col-span-12 md:col-span-6 lg:col-span-4"
        v-for="(item, i) in items"
        :result="item"
      />
    </div>
  </div>
</template>
