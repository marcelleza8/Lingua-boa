<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  name: "TailwindDebugBar",
  setup() {
    const dim = ref({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });

    const tailwindDebugBar = ref(null);

    const dragStart = () => {};

    const dragEnd = () => {};

    const handleResize = () => {
      dim.value.windowWidth = window.innerWidth;
      dim.value.windowHeight = window.innerHeight;
    };

    onMounted(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      dim,
      dragStart,
      dragEnd,
      tailwindDebugBar,
    };
  },
});
</script>
<template>
  <div
    @mousedown="dragStart"
    @mouseup="dragEnd"
    ref="tailwindDebugBar"
    class="fixed left-0 bottom-0 z-50 items-center bg-blue-500 p-1.5 text-center font-mono text-gray-700 sm:bg-pink-400 md:bg-yellow-300 lg:bg-red-400 xl:bg-green-300 2xl:bg-blue-200"
  >
    <div>
      <p>{{ dim.windowWidth }}_{{ dim.windowHeight }}</p>
    </div>
    <div
      class="hidden flex-grow flex-row sm:hidden md:hidden lg:hidden xl:hidden 2xl:visible 2xl:block"
    >
      <div><span class="debug-width-container mr-2"></span>2XL</div>
      <div class="text-sm">miW:1536</div>
    </div>
    <div
      class="hidden flex-grow flex-row sm:hidden md:hidden lg:hidden xl:visible xl:block 2xl:hidden"
    >
      <div><span class="debug-width-container mr-2"></span>XL</div>
      <div class="text-sm">miW:1280</div>
      <div class="text-sm">maW:1535</div>
    </div>
    <div
      class="hidden flex-grow flex-row sm:hidden md:hidden lg:visible lg:block xl:hidden 2xl:hidden"
    >
      <div><span class="debug-width-container mr-2"></span>LG</div>
      <div class="text-sm">miW:1024</div>
      <div class="text-sm">maW:1279</div>
    </div>
    <div
      class="hidden flex-grow flex-row sm:hidden md:visible md:block lg:hidden xl:hidden 2xl:hidden"
    >
      <div><span class="debug-width-container mr-2"></span>MD</div>
      <div class="text-sm">miW:768</div>
      <div class="text-sm">maW:1023</div>
    </div>
    <div
      class="hidden flex-grow flex-row sm:visible sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
    >
      <div><span class="debug-width-container mr-2"></span>SM</div>
      <div class="text-sm">miW:640</div>
      <div class="text-sm">maW:767</div>
    </div>
    <div
      class="visible block flex-grow sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
    >
      <div><span class="debug-width-container mr-2"></span>&lt; SM</div>
      <div class="text-sm">maW:639</div>
    </div>
  </div>
</template>
