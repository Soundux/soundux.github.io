<template>
  <v-row justify="center" align="center">
    <v-col cols="auto">
      <v-card class="mt-3 pb-3" width="1000">
        <v-card-title class="text-h5">
          <v-icon>mdi-microsoft-windows</v-icon>
          Windows Setup
        </v-card-title>
        <v-card-text>
          <div class="subtitle-1 text-center mb-3">
            Additional steps after installing are required to get it working properly on Windows:
          </div>

          <v-stepper v-model="step" non-linear>
            <v-stepper-header>
              <v-stepper-step editable step="1">Recording devices</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step editable step="2">Enable microphone</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step editable step="3">
                Improve quality
                <small>Optional</small>
              </v-stepper-step>
              <v-stepper-step editable step="4">Select in Soundux</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card class="mb-3">
                  <v-card-text>
                    <div class="mb-3">
                      <v-icon left>mdi-microphone-settings</v-icon>
                      Open the recording devices screen
                    </div>
                    <v-img
                      src="/screenshots/windows-recording-devices.png"
                      contain
                      height="455"
                      alt="Recording devices"
                    />
                  </v-card-text>
                </v-card>

                <v-btn color="primary" @click="step = 2">Continue</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card class="mb-3">
                  <v-card-text>
                    <div class="mb-3">
                      <v-icon left>mdi-ear-hearing</v-icon>
                      Open the properties of your mic, enable <kbd>Listen to this device</kbd> and select
                      <kbd>CABLE Input</kbd> under <kbd>Playback through this device</kbd>
                    </div>
                    <v-img
                      src="/screenshots/windows-mic-properties.png"
                      contain
                      height="455"
                      alt="Mic properties"
                    />
                  </v-card-text>
                </v-card>

                <v-btn color="primary" @click="step = 3">Continue</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card class="mb-3">
                  <v-card-text>
                    <div class="mb-3">
                      <v-icon left>mdi-quality-high</v-icon>
                      For better audio quality open the properties of the <kbd>CABLE Output</kbd> and set
                      the sample rate to the same as your microphone
                    </div>
                    <v-row justify="center">
                      <v-col cols="auto">
                        <v-img
                          src="/screenshots/windows-sample-rate.png"
                          contain
                          width="455"
                          alt="Sample rate"
                        />
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>

                <v-btn color="primary" @click="step = 4">Continue</v-btn>
              </v-stepper-content>

              <v-stepper-content step="4">
                <v-card class="mb-3">
                  <v-card-text>
                    <div class="mb-3">
                      <v-icon left>mdi-arrow-down-drop-circle</v-icon>
                      In Soundux select <kbd>CABLE Input</kbd> in the top right selection
                    </div>
                    <v-row justify="center">
                      <v-col cols="auto">
                        <v-img
                          src="/screenshots/windows-selection.png"
                          contain
                          width="350"
                          alt="Selection"
                        />
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>

                <v-btn :disabled="true">Finished</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
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
      step: 1,
    };
  },
});
</script>
