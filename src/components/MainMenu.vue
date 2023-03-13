<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainMenu",
});
</script>
<template>
  <nav class="fixed bottom-0 left-0 w-full md:top-0 md:bottom-auto">
    <ul
      class="flex items-center justify-between bg-gray-900 px-4 py-2 text-white shadow-lg md:justify-center md:space-x-4 md:bg-suikiri-100 md:text-black"
    >
      <li>
        <RouterLink :to="{ name: 'home' }">Aprender</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'editor-dicionario' }"
          >Editor (Dicionário)
        </RouterLink>
      </li>
      <li><a href="#">Treinar</a></li>
    </ul>
  </nav>
</template>

<style scoped>
li {
  /*  */
}
</style>
