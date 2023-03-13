<script lang="ts">
import { defineComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import MenuDistro from "./Icons/MenuDistro.vue";

export default defineComponent({
  name: "Sidebar",
  setup() {
    const isSidebarOpen = ref(false);

    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };

    return {
      isSidebarOpen,
      toggleSidebar,
    };
  },
  components: {
    MenuDistro,
    RouterLink,
  },
});
</script>

<template>
  <div
    class="sidebar-container"
    @click.self="toggleSidebar"
    :class="!isSidebarOpen ? '!hidden' : ''"
  >
    <div class="sidebar">
      <nav class="flex-1">
        <ul class="space-y-1 py-2">
          <li>
            <RouterLink class="link_anchor" :to="{ name: 'home' }"
              >Início</RouterLink
            >
          </li>
          <li>
            <RouterLink class="link_anchor" :to="{ name: 'editor-dicionario' }"
              >Editor de dicionário</RouterLink
            >
          </li>
          <li>
            <a href="#" class="link_anchor"> Configurações </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <button @click="toggleSidebar" class="sidebar-toggle">
    <MenuDistro />
  </button>
</template>

<style scoped>
.sidebar-container {
  @apply fixed top-0 left-0 bottom-0 right-0 z-20 flex;
}

.sidebar {
  @apply h-full w-56 overflow-auto bg-gray-100;
}

.sidebar-toggle {
  /* @apply absolute top-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-800 text-white; */
  @apply fixed bottom-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-800 p-2 text-white;
}

.link_anchor {
  @apply block bg-green-600 px-2 py-1 text-gray-800 hover:bg-gray-200;
}
</style>
