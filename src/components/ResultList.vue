<script lang="ts">
import { defineComponent } from "vue";
import MeanigList from "./MeanigList.vue";
import Example from "./Example.vue";
import Synonym from "./Synonym.vue";
import Antonym from "./Antonym.vue";

export default defineComponent({
  components: {
    MeanigList,
    Example,
    Synonym,
    Antonym,
  },
});
</script>

<template>
  <div class="container mx-auto max-w-2xl space-y-3 p-4">
    <div
      v-for="i in [...new Array(100)]"
      class="rounded-md bg-red-300 py-4 px-2"
    >
      <h3 class="mt-4 text-2xl font-bold">Significado e definição:</h3>
      <MeanigList mean="{response}" />
      <h3 class="mt-4 text-2xl font-bold">Exemplo:</h3>
      <Example mean="{response}" />
      <h3 class="mt-4 text-2xl font-bold">Sinônimo:</h3>
      <Synonym mean="{response}" />
      <h3 class="mt-4 text-2xl font-bold">Antônimo:</h3>
      <Antonym mean="{response}" />
    </div>
  </div>
</template>
