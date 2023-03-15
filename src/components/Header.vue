<script lang="ts">
import { defineComponent, ref } from "vue";
import LetrasWrapper from "./LetrasWrapper.vue";

export default defineComponent({
  name: "Header",
  setup() {
    const handleInputChange = () => {};
    const handleSubmit = () => {};
    const handleInputKeyDown = () => {};

    const inputSearch = ref<HTMLInputElement | null>(null);
    const searchFor = ref<string>("");

    const includeLetter = (e: any) => {
      searchFor.value += e;
      if (inputSearch.value) inputSearch.value.focus();
    };

    return {
      handleInputChange,
      handleSubmit,
      handleInputKeyDown,
      inputSearch,
      searchFor,
      includeLetter,
    };
  },
  components: { LetrasWrapper },
});
</script>
<template>
  <div class="pt-4 text-center">
    <div class="form-control inline-block w-10/12">
      <div class="input-group w-full">
        <input
          type="text"
          placeholder="Busque em nheengatu ou português"
          class="w-full focus:border-orange-500 focus:ring-0"
          ref="inputSearch"
          @change="handleInputChange"
          v-model="searchFor"
          @keydown="handleInputKeyDown"
        />
        <button @click="handleSubmit" class="btn-square btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
    <LetrasWrapper
      class="mx-auto mt-4 w-1/2 space-x-4 sm:w-1/4 md:w-1/5 lg:w-1/6"
      @change="includeLetter"
    />
  </div>
</template>
