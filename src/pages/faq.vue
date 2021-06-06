<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="mt-3 pb-3">
        <v-card-title class="text-h5">
          <v-icon left>mdi-frequently-asked-questions</v-icon>
          {{ $t('faq.title') }}
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-if="$store.getters.selectedOS && $store.getters.selectedOS.name === 'Linux'">
              <v-list-item-content>
                <v-list-item-title class="text-wrap">
                  <v-icon left color="grey lighten-1">mdi-help-circle-outline</v-icon>
                  {{ $t('faq.discordInputDevice.question') }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-wrap">
                  <v-icon left color="primary">mdi-information-outline</v-icon>
                  <i18n path="faq.discordInputDevice.answer">
                    <kbd slot="neverAskAgain">{{ $t('faq.discordInputDevice.neverAskAgain') }}</kbd>
                  </i18n>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-wrap">
                  <v-icon left color="grey lighten-1">mdi-help-circle-outline</v-icon>
                  {{ $t('faq.discordAudioQuality.question') }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-wrap">
                  <v-icon left color="primary">mdi-information-outline</v-icon>
                  <i18n path="faq.discordAudioQuality.answer">
                    <kbd slot="echoCancellation">
                      {{ $t('faq.discordAudioQuality.echoCancellation') }}
                    </kbd>
                    <kbd slot="noiseReduction">{{ $t('faq.discordAudioQuality.noiseReduction') }}</kbd>
                    <kbd slot="voiceAndVideo">{{ $t('faq.discordAudioQuality.voiceAndVideo') }}</kbd>
                  </i18n>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-wrap">
                  <v-icon left color="grey lighten-1">mdi-help-circle-outline</v-icon>
                  {{ $t('faq.cantHearSounds.question') }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-wrap">
                  <v-icon left color="primary">mdi-information-outline</v-icon>
                  {{ $t('faq.cantHearSounds.answer') }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item v-if="$store.getters.selectedOS && $store.getters.selectedOS.name === 'Linux'">
              <v-list-item-content>
                <v-list-item-title class="text-wrap">
                  <v-icon left color="grey lighten-1">mdi-help-circle-outline</v-icon>
                  {{ $t('faq.passThroughFails.question') }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-wrap">
                  <div class="mb-2">
                    <v-icon left color="primary">mdi-information-outline</v-icon>
                    <i18n path="faq.passThroughFails.answer">
                      <code slot="fileName">.alsoftrc</code>
                    </i18n>
                  </div>
                  <pre style="white-space: pre-line">
                    [pulse]
                    allow-moves=yes
                  </pre>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FAQ',
});
</script>
