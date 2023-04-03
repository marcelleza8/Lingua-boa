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
    const findWord = (word: string) => {
      axios
        .get("/buscar", {
          params: {
            palavra: word,
            significadosTotal: true,
          },
        })
        .then((r) => {
          results.value = r.data.data;
        });
    };
    return {
      findWord,
      results,
    };
  },
  components: { Header, ResultList },
});
</script>
<template>
  <div class="container mx-auto grid h-screen place-items-center px-3">
    <Header @searchFor="findWord" class="w-full" />
    <div class="pt-12">
      <ResultList :items="results" />
    </div>
  </div>
</template>
