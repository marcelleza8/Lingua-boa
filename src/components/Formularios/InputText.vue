<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "InputText",
  setup(props) {
    const idError = ref(false);
    return {
      idError,
    };
  },
  props: {
    label: {
      required: true,
      default: "",
    },
  },
});
</script>
<template>
  <label for="id" class="mb-2 block font-bold text-gray-700">{{ label }}</label>
  <input
    id="id"
    type="text"
    :class="{ 'border-red-500': idError }"
    class="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
    :placeholder="label"
  />
</template>
