<script lang="ts">
import { defineComponent, ref } from "vue";
import Sidebar from "./components/Sidebar.vue";
import TailwindDebugBar from "./components/Debug/TailwindDebugBar.vue";
import MainMenu from "./components/MainMenu.vue";

export default defineComponent({
  name: "App",
  setup() {
    const dev = ref<boolean>(import.meta.env.VITE_ENVIRONMENT == "development");
    return {
      dev,
    };
  },
  components: { Sidebar, MainMenu, TailwindDebugBar },
});
</script>

<template>
  <!-- <Sidebar /> -->
  <MainMenu />
  <div class="mb-9 md:mb-0 md:mt-10">
    <RouterView />
  </div>
  <TailwindDebugBar v-if="dev" />
</template>
