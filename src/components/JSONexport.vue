<script lang="ts">
import { defineComponent } from "vue";
import InputUpload from "./Formularios/InputUpload.vue";
import { saveAs } from "file-saver";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import ChevronDownIcon from "./Icons/ChevronDown.vue";

export default defineComponent({
  name: "JSONexport",
  setup(props) {
    const exportarJSON = () => {
      const jsonData = JSON.stringify(props.exportData);
      const blob = new Blob([jsonData], { type: "application/json" });
      const filename = prompt(
        "QUE NOME QUE DAR PARA O JSON?",
        "dicionário_nheengatu",
      );
      saveAs(blob, `${filename}.json`);
    };

    return {
      exportarJSON,
    };
  },
  props: {
    exportData: {
      required: true,
    },
  },
  components: {
    InputUpload,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
  },
});
</script>
<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        JSON
        <ChevronDownIcon />
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <MenuItem v-slot="{ active }">
          <button @click="exportarJSON" class="block px-4 py-2 text-sm">
            Exportar JSON
          </button>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <InputUpload class="block px-4 py-2 text-sm"
            >Carregar JSON</InputUpload
          >
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
