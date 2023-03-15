<script lang="ts">
import { defineComponent } from "vue";
import { Definicao } from "../types/Definicao";

import ResultCard from "./ResultCard.vue";

export default defineComponent({
  components: { ResultCard },
});
</script>

<template>
  <div class="container mx-auto space-y-3 p-4">
    <div class="grid grid-cols-12 gap-8">
      <ResultCard
        class="col-span-12 md:col-span-6 lg:col-span-4"
        v-for="(item, i) in [...new Array(20)].map((v, i): Definicao => ({
          palavra:
            `Resultado ` +
            (Number((++i).toFixed(3)) / 100).toString().replace('.', ''),
          significados: [`primeiro`, `segundo`],
          sinonimos:[],
          antonimos: [],
          frases:[],
          etiquetas:[]
        }))"
        :result="item"
      />
    </div>
  </div>
</template>
