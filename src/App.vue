<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import ResultList from "./components/ResultList.vue";
import Sidebar from "./components/Sidebar.vue";

export default defineComponent({
  name: "App",
  components: { Header, ResultList, Sidebar },
});
</script>

<template>
  <Sidebar />
  <Header />
  <div class="pt-10">
    <ResultList />
  </div>
</template>
