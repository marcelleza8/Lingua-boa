<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./components/Sidebar.vue";
import TailwindDebugBar from "./components/Debug/TailwindDebugBar.vue";

export default defineComponent({
  name: "App",
  components: { Sidebar, TailwindDebugBar },
});
</script>

<template>
  <Sidebar />
  <RouterView />
  <TailwindDebugBar v-if="false" />
</template>
