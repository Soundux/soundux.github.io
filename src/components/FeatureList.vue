<template>
  <h1 class="text-2xl mb-4">Features</h1>
  <ul class="list-disc list-inside">
    <li>Dark and light theme</li>
    <li>Folder tabs</li>
    <li>Supports a variety of audio formats</li>
    <li>Sound search (can also be opened with <span class="code">CTRL</span> + <span class="code">F</span>)</li>
    <li>Sound hotkeys</li>
    <li>Stop button and hotkey</li>
  </ul>
</template>

<script>
export default {
  name: "FeatureList"
}
</script>

<style scoped>
.code {
  @apply bg-gray-500 rounded-md font-mono p-0.5;
}
</style>
