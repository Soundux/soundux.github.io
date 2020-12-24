<template>
  <h1 class="text-2xl mb-5 text-center" id="download">Download</h1>
  <div class="flex justify-center">
    <a href="https://github.com/Soundux/Soundux/releases" target="_blank" rel="noopener">
      <button class="btn">
        <microsoft-windows class="inline-block"/>
        Download for Windows
      </button>
    </a>
    <a href="https://flathub.org/apps/details/io.github.Soundux" target="_blank" rel="noopener">
      <button class="btn">
        <linux class="inline-block"/>
        Download for Linux (Flatpak)
      </button>
    </a>
    <a href="https://aur.archlinux.org/packages/soundux/" target="_blank" rel="noopener">
      <button class="btn">
        <arch class="inline-block"/>
        Download for Arch Linux (AUR)
      </button>
    </a>
    <button class="btn" disabled title="Not yet available">
      <apple class="inline-block"/>
      Download for macOS
    </button>
  </div>
  <p class="text-center">
    <a href="https://github.com/Soundux/Soundux/actions">Download development versions</a>
  </p>
</template>

<script>
import {MicrosoftWindows, Linux, Arch, Apple} from 'mdue';

export default {
  name: "Download",
  components: {
    MicrosoftWindows, Linux, Arch, Apple
  }
}
</script>

<style scoped>

</style>
