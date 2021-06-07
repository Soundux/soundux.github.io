<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <img src="/icon.svg" alt="Logo" class="mb-5" width="150" />
      </div>
      <div class="text-center text-h3 mb-3">Soundux</div>
      <div class="text-center mb-3 grey--text text--lighten-1">{{ $t('index.tagline') }} 🔊</div>
      <v-row justify="center" dense>
        <v-col cols="auto">
          <v-btn color="blue" href="https://discord.gg/4HwSGN4Ec2" target="_blank" x-large>
            <v-icon left>mdi-discord</v-icon>
            Discord
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="primary" nuxt to="/download" x-large>
            <v-icon left>mdi-download</v-icon>
            {{ $t('index.download') }}
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn href="https://github.com/Soundux/Soundux" target="_blank" x-large>
            <v-icon left>mdi-github</v-icon>
            GitHub
          </v-btn>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="auto" class="text-center">
          {{ $t('index.universalArchitecture') }}
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <v-icon left>mdi-discord</v-icon>
          Discord
        </v-col>
        <v-col cols="auto">
          <v-icon left>mdi-headset</v-icon>
          TeamSpeak
        </v-col>
        <v-col cols="auto">
          <v-icon left>mdi-skype</v-icon>
          Skype
        </v-col>
        <v-col cols="auto">
          <v-icon left>mdi-steam</v-icon>
          Steam
        </v-col>
        <v-col cols="auto">
          <v-icon left>mdi-battlenet</v-icon>
          Battle.net
        </v-col>
        <v-col cols="auto">
          <v-icon left>mdi-origin</v-icon>
          Origin
        </v-col>
        <v-col cols="auto">
          <v-icon left>mdi-ubisoft</v-icon>
          Ubisoft
        </v-col>
        <v-col cols="auto">
          <v-icon left>mdi-dots-horizontal</v-icon>
          {{ $t('index.andManyMore') }}
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn color="yellow darken-2" light nuxt to="/features" x-large>
            <v-icon left>mdi-star-circle-outline</v-icon>
            {{ $t('index.seeAllFeatures') }}
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="yellow darken-3" light nuxt to="/screenshots" x-large>
            <v-icon left>mdi-image</v-icon>
            {{ $t('index.screenshots') }}
          </v-btn>
        </v-col>
      </v-row>
      <template v-if="$store.getters.selectedOS && $store.getters.selectedOS.name === 'Linux'">
        <v-divider class="my-5"></v-divider>
        <v-row justify="center">{{ $t('index.nativeSupportFor') }}</v-row>
        <v-row justify="center" align="center">
          <v-col cols="auto">
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-img src="/pulse.png" width="80" contain v-bind="attrs" v-on="on"></v-img>
              </template>
              <span>PulseAudio</span>
            </v-tooltip>
          </v-col>
          <v-col cols="auto">
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-img src="/pipewire.svg" width="80" contain v-bind="attrs" v-on="on"></v-img>
              </template>
              <span>PipeWire</span>
            </v-tooltip>
          </v-col>
        </v-row>
        <v-divider class="my-5"></v-divider>
      </template>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>
