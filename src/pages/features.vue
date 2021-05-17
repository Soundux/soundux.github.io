<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="mt-3">
        <v-card-title class="text-h5">
          <v-icon left>mdi-star-circle-outline</v-icon>
          Features
        </v-card-title>
        <v-card-text>
          <p>Click on the different features to reveal additional information about them</p>
          <v-list nav dense>
            <v-list-group :value="true">
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon left>mdi-theme-light-dark</v-icon>
                    Dark and light theme
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item>
                <v-list-item-content>
                  <NeoImageCompare
                    left-img-src="https://raw.githubusercontent.com/Soundux/screenshots/screenshots/home-light.png"
                    right-img-src="https://raw.githubusercontent.com/Soundux/screenshots/screenshots/home-dark.png"
                    :aspect-ratio="{ width: 1360, height: 795 }"
                  ></NeoImageCompare>
                  <v-col class="text-center">
                    <v-list-item-subtitle class="text-wrap">Pick your poison 👀</v-list-item-subtitle>
                  </v-col>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-group>
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon left>mdi-folder</v-icon>
                    Folder tabs
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap">
                    <v-col class="text-center">
                      <img
                        :src="`/screenshots/folder-tabs-${$vuetify.theme.dark ? 'dark' : 'light'}.png`"
                        alt="Folder tabs"
                        width="100%"
                      />
                      <br />
                      <span>
                        You don't have to add single sounds. Just put them in a folder 📂 and add it as a
                        tab. It will automatically populate with all the supported audio formats 🎧
                      </span>
                    </v-col>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-group>
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon left>mdi-play-pause</v-icon>
                    Media controls
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap">
                    <v-col class="text-center">
                      <img
                        :src="`https://raw.githubusercontent.com/Soundux/screenshots/screenshots/media-controls-${
                          $vuetify.theme.dark ? 'dark' : 'light'
                        }.png`"
                        alt="Media controls"
                        width="100%"
                      />
                      <br />
                      <span>
                        We have individual media controls for each playing sound. You can play/pause ⏯,
                        seek 🔼, repeat 🔂 or stop ⏹ them.
                      </span>
                    </v-col>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-group>
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon left>mdi-headphones</v-icon>
                    Supports a variety of audio formats
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap">
                    As we make use of
                    <a href="https://miniaud.io/" target="_blank" rel="noopener">miniaudio</a>
                    we support common audio formats like mp3, wav, flac 🎛
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-group>
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon left>mdi-magnify</v-icon>
                    Sound search
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap">
                    <v-col class="text-center">
                      <img
                        :src="`https://raw.githubusercontent.com/Soundux/screenshots/screenshots/search-${
                          $vuetify.theme.dark ? 'dark' : 'light'
                        }.png`"
                        alt="Search"
                        width="100%"
                      />
                      <br />
                      <span>
                        A global search for all tabs 🔎 <br />
                        Can also be opened with <code>CTRL</code> + <code>F</code>
                      </span>
                    </v-col>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-group>
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon left>mdi-gamepad-square-outline</v-icon>
                    Emulated Launchpad mode
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap">
                    <v-col class="text-center">
                      <img
                        :src="`https://raw.githubusercontent.com/Soundux/screenshots/screenshots/launchpad-view-${
                          $vuetify.theme.dark ? 'dark' : 'light'
                        }.png`"
                        alt="Launchpad view"
                        width="100%"
                      />
                      <br />
                      <span>
                        An emulated launchpad on your keyboard ⌨️ <br />
                        Press the corresponding key seen in the top right to play a sound <br />
                        Navigate pages with your arrow keys
                      </span>
                    </v-col>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-group>
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon left>mdi-keyboard</v-icon>
                    Global hotkeys
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap">
                    ⌨ You can set hotkeys for each sound and to stop all sounds. There is also an option
                    to only trigger hotkeys from the currently selected tab
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-group v-if="$store.getters.selectedOS && $store.getters.selectedOS.name === 'Linux'">
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon left>mdi-power-plug</v-icon>
                    Application pass-through
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap">
                    <v-col class="text-center">
                      <figure style="height: 225px; overflow: hidden">
                        <img
                          :src="`https://raw.githubusercontent.com/Soundux/screenshots/screenshots/pass-through-drawer-${
                            $vuetify.theme.dark ? 'dark' : 'light'
                          }.png`"
                          alt="App pass through"
                        />
                      </figure>
                      <br />
                      <span>
                        🔌 Application pass through allows you to redirect any application's sound to
                        another. You can use it as a workaround for Discord's share audio feature<br />
                        Can also be opened with <code>CTRL</code> + <code>G</code>
                      </span>
                    </v-col>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
// TODO: use a left sidebar to change to content on the right?

export default Vue.extend({
  name: 'Features',
});
</script>
