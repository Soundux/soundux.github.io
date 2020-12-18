<template>
  <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
    <div class="feature">
      <h2>Cross-platform</h2>
      <p>Full support for Linux & Windows (macOS planned)</p>
    </div>
    <div class="feature">
      <h2>Supports common formats</h2>
      <p>
        As we make use of <a href="https://miniaud.io" target="_blank" rel="noopener">miniaudio</a> we support common audio formats like mp3,
        wav, ogg
      </p>
    </div>
    <div class="feature">
      <h2>Folder tabs</h2>
      <p>
        You don't have to add single sounds. Just put them in a folder and add
        it as a tab. It will automatically populate with all the supported audio
        formats
      </p>
    </div>
  </div>
  <a href="https://discord.gg/4HwSGN4Ec2" target="_blank" rel="noopener" class="mx-auto mt-4">
    <button class="btn btn-blue">
      <discord class="inline-block"/>
      Join our Discord
    </button>
  </a>
</template>

<script>
import {Discord} from 'mdue';
export default {
  name: "Features",
  components: {
    Discord
  }
};
</script>

<style scoped>
.feature > h2 {
  @apply text-2xl mb-4 text-center;
}
.feature > p {
  @apply text-center;
}
</style>
