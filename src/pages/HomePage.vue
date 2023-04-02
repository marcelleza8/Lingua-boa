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
    // alert(process.env.VITE_BASE_URL);
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
  <Header @searchFor="findWord" />
  <div class="pt-12">
    <ResultList :items="results" />
  </div>
</template>
