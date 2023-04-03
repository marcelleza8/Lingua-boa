<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./components/Sidebar.vue";
import TailwindDebugBar from "./components/Debug/TailwindDebugBar.vue";
import MainMenu from "./components/MainMenu.vue";

export default defineComponent({
  name: "App",
  components: { Sidebar, MainMenu, TailwindDebugBar },
});
</script>

<template>
  <!-- <Sidebar /> -->
  <MainMenu />
  <div class="mb-9 md:mb-0 md:mt-10">
    <RouterView />
  </div>
  <TailwindDebugBar v-if="true" />
</template>
