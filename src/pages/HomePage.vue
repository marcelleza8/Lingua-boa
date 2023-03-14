<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Header from "../components/Header.vue";
import ResultList from "../components/ResultList.vue";

// import { audio as song } from "../data/audio";

export default defineComponent({
  name: "HomePage",
  setup() {
    /* onMounted(() => {
      const audioContext = new window.AudioContext();
      console.log(audioContext);

      // Criar um elemento de áudio
      const audio = new Audio();

      // Definir o atributo src como a string base64
      audio.src = "data:audio/mp3;base64," + song;

      console.log(audio);

      // Reproduzir o áudio
      audio.play();
    }); */
  },
  components: { Header, ResultList },
});
</script>
<template>
  <Header />
  <div class="pt-12">
    <ResultList />
  </div>
</template>
