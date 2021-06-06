<template>
  <v-row justify="center" align="center">
    <v-col cols="auto">
      <v-card class="mt-3 pb-3" width="1000">
        <v-card-title class="text-h5">
          <v-icon>mdi-microsoft-windows</v-icon>
          {{ $t('windowsSetup.title') }}
        </v-card-title>
        <v-card-text>
          <div class="subtitle-1 text-center mb-3">
            {{ $t('windowsSetup.additionalSteps') }}
          </div>

          <v-stepper v-model="step" non-linear>
            <v-stepper-header>
              <v-stepper-step editable step="1">{{ $t('windowsSetup.step1') }}</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step editable step="2">{{ $t('windowsSetup.step2') }}</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step editable step="3">
                {{ $t('windowsSetup.step3') }}
                <small>{{ $t('windowsSetup.optional') }}</small>
              </v-stepper-step>
              <v-stepper-step editable step="4">{{ $t('windowsSetup.step4') }}</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card class="mb-3">
                  <v-card-text>
                    <div class="mb-3">
                      <v-icon left>mdi-microphone-settings</v-icon>
                      {{ $t('windowsSetup.openRecordingDevices') }}
                    </div>
                    <v-img
                      src="/screenshots/windows-recording-devices.png"
                      contain
                      height="455"
                      alt="Recording devices"
                    />
                  </v-card-text>
                </v-card>

                <v-btn color="primary" @click="step = 2">
                  <v-icon left>mdi-chevron-right</v-icon>
                  {{ $t('windowsSetup.continue') }}
                </v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card class="mb-3">
                  <v-card-text>
                    <div class="mb-3">
                      <v-icon left>mdi-ear-hearing</v-icon>
                      <i18n path="windowsSetup.changeProperties">
                        <kbd slot="listenToThisDevice">{{ $t('windowsSetup.listenToThisDevice') }}</kbd>
                        <kbd slot="cableInput">CABLE Input</kbd>
                        <kbd slot="playbackThroughThisDevice">{{
                          $t('windowsSetup.playbackThroughThisDevice')
                        }}</kbd>
                      </i18n>
                    </div>
                    <v-img
                      src="/screenshots/windows-mic-properties.png"
                      contain
                      height="455"
                      alt="Mic properties"
                    />
                  </v-card-text>
                </v-card>

                <v-btn color="primary" @click="step = 3">
                  <v-icon left>mdi-chevron-right</v-icon>
                  {{ $t('windowsSetup.continue') }}
                </v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card class="mb-3">
                  <v-card-text>
                    <div class="mb-3">
                      <v-icon left>mdi-quality-high</v-icon>
                      <i18n path="windowsSetup.betterAudioQuality">
                        <kbd slot="cableOutput">CABLE Output</kbd>
                      </i18n>
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

                <v-btn color="primary" @click="step = 4">
                  <v-icon left>mdi-chevron-right</v-icon>
                  {{ $t('windowsSetup.continue') }}
                </v-btn>
              </v-stepper-content>

              <v-stepper-content step="4">
                <v-card class="mb-3">
                  <v-card-text>
                    <div class="mb-3">
                      <v-icon left>mdi-arrow-down-drop-circle</v-icon>
                      <i18n path="windowsSetup.selectCableInput">
                        <kbd slot="cableInput">CABLE Input</kbd>
                      </i18n>
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

                <v-btn :disabled="true">
                  <v-icon left>mdi-flag-checkered</v-icon>
                  {{ $t('windowsSetup.finished') }}
                </v-btn>
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
