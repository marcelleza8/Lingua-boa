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
  <div class="flex h-[86vh] flex-col items-stretch">
    <div class="grow overflow-x-auto">
      <ResultList :items="results" />
    </div>
    <Header @searchFor="findWord" :disabled="disableSearch" class="w-full" />
  </div>
</template>
