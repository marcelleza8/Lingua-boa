<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Sidebar",
  setup() {
    const isSidebarOpen = ref(true);

    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };

    return {
      isSidebarOpen,
      toggleSidebar,
    };
  },
});
</script>

<template>
  <div class="sidebar-container" :class="!isSidebarOpen ? '!hidden' : ''">
    <div class="sidebar">
      <!-- Conteúdo do menu -->
    </div>
  </div>
  <button @click="toggleSidebar" class="sidebar-toggle">
    {{ isSidebarOpen ? "Ocultar" : "Mostrar" }}
  </button>
</template>

<style>
.sidebar-container {
  @apply fixed top-0 left-0 bottom-0 right-0 flex;
}

.sidebar {
  @apply h-full w-56 overflow-auto bg-gray-100 p-4;
}

.sidebar-toggle {
  @apply absolute top-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-800 text-white;
}
</style>
