<template>
  <svg
    width="512"
    height="365.71"
    version="1.1"
    viewBox="0 0 512 365.71"
    xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(0,-73.14)" fill="#fff">
      <path
        d="m36.57 73.14h182.86c20.21 0 36.57 16.36 36.57 36.57 0 20.18-16.36 36.57-36.57 36.57h-182.86c-20.18 0.01-36.57-16.39-36.57-36.57 0-20.21 16.39-36.57 36.57-36.57zm256 292.57h182.86c20.21 0 36.57 16.36 36.57 36.57 0 20.18-16.36 36.57-36.57 36.57h-182.86c-20.18 0-36.57-16.39-36.57-36.57 0-20.21 16.39-36.57 36.57-36.57zm-256-146.28h438.86c20.21 0 36.57 16.36 36.57 36.57 0 20.18-16.36 36.57-36.57 36.57h-438.86c-20.18 0-36.57-16.39-36.57-36.57 0-20.21 16.39-36.57 36.57-36.57z"
        fill="#fff"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MenuDistro",
  props: {
    color: {
      default: "#fff",
    },
  },
});
</script>
