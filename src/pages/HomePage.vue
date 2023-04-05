<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Header from "../components/Header.vue";
import ResultList from "../components/ResultList.vue";
import axios from "../services/api";

// import { audio as song } from "../data/audio";

export default defineComponent({
  name: "HomePage",
  setup() {
    const results = ref("");
    const disableSearch = ref<boolean>(false);
    const findWord = (word: string) => {
      disableSearch.value = true;
      axios
        .get("/buscar", {
          params: {
            palavra: word,
            significadosTotal: true,
          },
        })
        .then((r) => {
          results.value = r.data.data;
        })
        .catch(() => {})
        .finally(() => {
          disableSearch.value = false;
        });
    };
    return {
      findWord,
      results,
      disableSearch,
    };
  },
  components: { Header, ResultList },
});
</script>
<template>
  <div class="container mx-auto grid h-screen place-items-center px-3">
    <Header @searchFor="findWord" :disabled="disableSearch" class="w-full" />
    <div class="pt-12">
      <ResultList :items="results" />
    </div>
  </div>
</template>
