<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="10">
      <v-card class="mt-3">
        <v-card-title class="text-h5">
          <v-icon left>mdi-image</v-icon>
          {{ $t('index.screenshots') }}
        </v-card-title>
        <v-card-text>
          <v-row justify="center" class="text-subtitle-1">
            {{ $t('screenshots.hint') }}
          </v-row>
          <v-row justify="center" class="my-5">
            <v-col v-for="screenshot in screenshots" :key="screenshot" cols="auto">
              <v-img
                :src="`https://raw.githubusercontent.com/Soundux/screenshots/screenshots/${screenshot}${
                  $vuetify.theme.dark ? '-dark' : '-light'
                }.png`"
                width="500"
                contain
              >
              </v-img>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
// TODO: use a left sidebar to change to content on the right?

export default Vue.extend({
  name: 'Screenshots',
  data() {
    return {
      screenshots: ['playing', 'grid-view', 'multiple-playing', 'pass-through', 'search', 'settings'],
    };
  },
});
</script>
