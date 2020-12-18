<template>
  <div class="mx-auto">
    <img alt="Logo" class="mx-auto w-36" src="../assets/logo.png"/>
    <h1 class="text-3xl my-3 text-center">Soundux</h1>
      <a href="#download">
        <button class="btn">
          <download class="inline-block"/>
          Download now
        </button>
      </a>
  </div>
</template>

<script>
import {Download} from 'mdue';

export default {
  name: "Banner",
  components: {
    Download
  },
};
</script>

<style scoped>
</style>
