<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header.vue";
import ResultList from "../components/ResultList.vue";

export default defineComponent({
  name: "HomePage",
  setup() {},
  components: { Header, ResultList },
});
</script>
<template>
  <Header />
  <div class="pt-12">
    <ResultList />
  </div>
</template>
