<template>
  <v-row justify="center" align="center">
    <v-col cols="auto">
      <v-card class="mt-3 pb-3" width="1000">
        <v-card-title class="text-h5">
          <v-icon>mdi-microsoft-windows</v-icon>
          Windows Setup
        </v-card-title>
        <v-card-text>
          <v-row justify="center subtitle-1">
            Additional steps after installing are required to get it working properly on Windows:
          </v-row>
          <v-row v-resize="onResize" justify="center">
            <v-col cols="auto">
              <v-card outlined width="434" height="581.3">
                <v-card-subtitle class="text-wrap">
                  <v-icon left>mdi-microphone-settings</v-icon>
                  Open the recording devices screen
                </v-card-subtitle>
                <v-card-text>
                  <div class="d-flex justify-end" :style="cardsWrapped ? '' : 'height: 508px'">
                    <div class="flex-grow-0 align-self-end">
                      <img src="screenshots/windows-recording-devices.png" alt="Recording devices" />
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card outlined width="434" height="581.3">
                <v-card-subtitle class="text-wrap">
                  <v-icon left>mdi-ear-hearing</v-icon>
                  Open the properties of your mic, enable <kbd>Listen to this device</kbd> and select
                  <kbd>CABLE Input</kbd> under <kbd>Playback through this device</kbd>
                </v-card-subtitle>
                <v-card-text>
                  <img src="screenshots/windows-mic-properties.png" alt="Mic properties" />
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WindowsSetup',
  data() {
    return {
      cardsWrapped: false,
    };
  },
  methods: {
    onResize() {
      this.cardsWrapped = window.innerWidth < 963;
    },
  },
});
</script>
