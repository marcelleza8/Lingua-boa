<script lang="ts">
import { propsToAttrMap } from "@vue/shared";
import { defineComponent } from "vue";
export default defineComponent({
  name: "LetrasWrapper",
  setup(props, { emit }) {
    const addLetra = ($e: any) => {
      emit("change", $e.target.innerText);
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
  @apply flex-1 rounded-lg bg-orange-600 px-3 py-2;
}
</style>
