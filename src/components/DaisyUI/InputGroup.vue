<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputGroup",
  props: {
    value: {
      default: "",
    },
    readonly: {
      default: false,
      type: Boolean,
    },
  },
});
</script>

<template>
  <div class="form-control inline-block">
    <div class="input-group w-full">
      <input
        type="text"
        placeholder=""
        :readonly="readonly"
        :value="value"
        class="w-full focus:ring-0"
      />
      <button class="btn-square btn border-transparent">
        <slot name="icon"></slot>
      </button>
    </div>
  </div>
</template>
