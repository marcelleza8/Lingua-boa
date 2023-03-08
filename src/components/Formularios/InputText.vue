<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "InputText",
  setup(props, context) {
    const idError = ref(false);

    const handleInput = ($e: any) => {
      context.emit("update:modelValue", $e.target.value);
    };

    return {
      idError,
      handleInput,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },
    modelValue: {
      required: true,
    },
  },
});
</script>
<template>
  <label for="id" class="mb-2 block font-bold text-gray-700">{{ label }}</label>
  <input
    id="id"
    type="text"
    :value="modelValue"
    @input="handleInput"
    :class="{ 'border-red-500': idError }"
    class="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
    :placeholder="label"
  />
</template>
