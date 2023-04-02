<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "VoiceRecorderWrapper",
  setup() {
    const inputFile = ref(null);
    console.log(inputFile.value);

    return {
      inputFile,
    };
  },
});
</script>
<template>
  <input type="file" ref="inputFile" />
</template>
