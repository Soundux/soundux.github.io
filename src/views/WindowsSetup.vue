<template>
  <div class="text-center">
    <h1 class="text-5xl mb-7 underline">Windows Setup</h1>
    <a href="https://github.com/Soundux/Soundux/releases" target="_blank" rel="noopener" class="center">
      <button class="btn">
        <microsoft-windows class="inline-block"/>
        Download for Windows
      </button>
    </a>
    <p class="mb-4">After you installed Soundux you have to configure VB CABLE</p>
    <div class="grid grid-cols-2 mb-8">
      <div class="center mb-2">
        <img src="../assets/screenshots/windows_recording_devices.png" alt="Recording devices"/>
      </div>
      <div class="center mb-2">
        <img src="../assets/screenshots/windows_mic_properties.png" alt="Mic properties"/>
      </div>
      <p>Open your recording settings and set CABLE Output as default</p>
      <p>Enable listen to this device in your mic properties and set playback through this device to CABLE Input</p>
    </div>
  </div>
</template>

<script>
import {MicrosoftWindows} from "mdue";

export default {
  name: "WindowsSetup",
  components: {
    MicrosoftWindows
  }
}
</script>

<style scoped>
.center {
  @apply flex justify-center;
}
</style>
