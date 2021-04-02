<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <img src="/icon.svg" alt="Logo" class="mb-5" width="150" />
      </div>
      <div class="text-center text-h3 mb-3">Soundux</div>
      <div class="text-center mb-3 grey--text text--lighten-1">A cross-platform soundboard 🔊</div>
      <v-row justify="center" dense>
        <v-col cols="auto">
          <v-btn color="blue" href="https://discord.gg/4HwSGN4Ec2" target="_blank" x-large width="150">
            <v-icon left>mdi-discord</v-icon>
            Discord
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="primary" nuxt to="/download" x-large width="150">
            <v-icon left>mdi-download</v-icon>
            Download
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn href="https://github.com/Soundux/Soundux" target="_blank" x-large width="150">
            <v-icon left>mdi-github</v-icon>
            GitHub
          </v-btn>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.smAndDown" cols="auto">
          <v-btn color="yellow darken-2" light nuxt to="/features" x-large width="150">
            <v-icon left>mdi-star-circle-outline</v-icon>
            Features
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.mdAndUp" justify="center" dense>
        <v-col cols="auto" class="">
          <v-btn color="yellow darken-2" light nuxt to="/features" x-large width="150">
            <v-icon left>mdi-star-circle-outline</v-icon>
            Features
          </v-btn>
        </v-col>
      </v-row>

      <div class="text-center my-5">
        <v-carousel cycle show-arrows-on-hover>
          <v-carousel-item
            v-for="screenshot in screenshots"
            :key="screenshot"
            :src="`https://raw.githubusercontent.com/Soundux/screenshots/screenshots/${screenshot}${
              $vuetify.theme.dark ? '-dark' : '-light'
            }.png`"
          >
          </v-carousel-item>
        </v-carousel>
      </div>
      <!--<hr class="my-3" />-->
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      screenshots: ['playing', 'grid-view', 'multiple-playing', 'pass-through', 'search', 'settings'],
    };
  },
});
</script>
