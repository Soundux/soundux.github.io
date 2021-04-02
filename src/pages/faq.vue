<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="mt-3 pb-3">
        <v-card-title class="text-h5">
          <v-icon left>mdi-frequently-asked-questions</v-icon>
          Frequently asked questions
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-wrap">
                  <v-icon left color="grey lighten-1">mdi-help-circle-outline</v-icon>
                  Discord asks me if I want to change my input device, what to do?
                </v-list-item-title>
                <v-list-item-subtitle class="text-wrap">
                  <v-icon left color="primary">mdi-information-outline</v-icon>
                  Click on <kbd>Never ask again</kbd>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-wrap">
                  <v-icon left color="grey lighten-1">mdi-help-circle-outline</v-icon>
                  Why is the audio quality in Discord so bad?
                </v-list-item-title>
                <v-list-item-subtitle class="text-wrap">
                  <v-icon left color="primary">mdi-information-outline</v-icon>
                  Try disabling <kbd>Echo Cancellation</kbd> and <kbd>Noise Reduction</kbd> in Discord's
                  settings under <kbd>Voice & Video</kbd>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item v-if="$store.getters.selectedOS && $store.getters.selectedOS.name === 'Linux'">
              <v-list-item-content>
                <v-list-item-title class="text-wrap">
                  <v-icon left color="grey lighten-1">mdi-help-circle-outline</v-icon>
                  When I try to pass-through an application it fails
                </v-list-item-title>
                <v-list-item-subtitle class="text-wrap">
                  <div class="mb-2">
                    <v-icon left color="primary">mdi-information-outline</v-icon>
                    Some apps use OpenAL for audio which may prevent this. To solve this create a file
                    named
                    <code>.alsoftrc</code> in your home folder with the following contents:
                  </div>
                  <pre style="white-space: pre-line">
                    [pulse]
                    allow-moves=yes
                  </pre>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <div class="text-center">more to come...</div>
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
