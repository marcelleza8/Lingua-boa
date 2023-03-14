<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "InputText",
  setup(props, { emit }) {
    const idError = ref(false);

    const inputText = ref<HTMLInputElement>();

    const handleInput = ($e: any) => {
      emit("update:modelValue", $e.target.value);
    };

    return {
      idError,
      inputText,
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
    inputId: {
      default: `input-text-${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 9)}`,
    },
  },
});
</script>
<template>
  <div class="form-control w-full">
    <label class="label" :for="inputId">
      <span class="label-text">{{ label }}</span>
    </label>
    <input
      type="text"
      :id="inputId"
      :value="modelValue"
      ref="inputText"
      @input="handleInput"
      :placeholder="label"
      class="input-bordered input w-full"
    />
    <label v-if="false" class="label">
      <span class="label-text-alt">ERRO</span>
    </label>
  </div>
</template>
