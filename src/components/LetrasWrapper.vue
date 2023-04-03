<script lang="ts">
import { propsToAttrMap } from "@vue/shared";
import { defineComponent } from "vue";
export default defineComponent({
  name: "LetrasWrapper",
  setup(props, { emit }) {
    const addLetra = ($e: any) => {
      emit("change", $e.target.innerText.toLowerCase());
    };
    return {
      addLetra,
    };
  },
  props: {
    modelValue: {
      required: false,
    },
  },
});
</script>
<template>
  <div class="letras">
    <button @click="addLetra($event)">ẽ</button>
    <button @click="addLetra($event)">ĩ</button>
    <button @click="addLetra($event)">ũ</button>
    <button @click="addLetra($event)">ã</button>
  </div>
</template>

<style scoped>
.letras {
  @apply flex;
}
.letras button {
  @apply flex-1 rounded-lg bg-vista-blue-300 px-3 py-2 font-extrabold uppercase text-green-kelp-800;
}
</style>
