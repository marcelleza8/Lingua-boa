<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Header from "../components/Header.vue";
import ResultList from "../components/ResultList.vue";

// import { audio as song } from "../data/audio";

export default defineComponent({
  name: "HomePage",
  setup() {
    const findWord = (word: string) => {
      console.log(word);
    }
    return {
      findWord
    }
  },
  components: { Header, ResultList },
});
</script>
<template>
  <Header @searchFor="findWord" />
  <div class="pt-12">
    <ResultList />
  </div>
</template>
