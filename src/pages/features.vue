<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="mt-3">
        <v-card-title class="text-h5">
          <v-icon left>mdi-star-circle-outline</v-icon>
          {{ $t('features.title') }}
        </v-card-title>
        <v-card-text>
          <p>{{ $t('features.clickToShowAdditionalInformation') }}</p>
          <v-list nav dense>
            <v-list-group :value="true">
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon left>mdi-theme-light-dark</v-icon>
                    {{ $t('features.darkAndLightTheme.title') }}
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
                    <v-list-item-subtitle class="text-wrap">
                      {{ $t('features.darkAndLightTheme.description') }} 👀
                    </v-list-item-subtitle>
                  </v-col>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-group>
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon left>mdi-folder</v-icon>
                    {{ $t('features.folderTabs.title') }}
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
                        {{ $t('features.folderTabs.description') }}
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
                    {{ $t('features.mediaControls.title') }}
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
                        {{ $t('features.mediaControls.description') }}
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
                    {{ $t('features.audioFormats.title') }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap">
                    <i18n path="features.audioFormats.description">
                      <a href="https://miniaud.io/" target="_blank" rel="noopener" slot="miniaudio"
                        >miniaudio</a
                      >
                    </i18n>
                    🎛
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-group>
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon left>mdi-magnify</v-icon>
                    {{ $t('features.soundSearch.title') }}
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
                        {{ $t('features.soundSearch.description') }} 🔎
                        <br />
                        <i18n path="features.soundSearch.description2">
                          <code slot="ctrl">{{ $t('input.ctrl') }}</code>
                          <code slot="f">F</code>
                        </i18n>
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
                    {{ $t('features.emulatedLaunchpad.title') }}
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
                        {{ $t('features.emulatedLaunchpad.description') }} ⌨️ <br />
                        {{ $t('features.emulatedLaunchpad.description2') }} <br />
                        {{ $t('features.emulatedLaunchpad.description3') }}
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
                    {{ $t('features.globalHotkeys.title') }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap">
                    ⌨ {{ $t('features.globalHotkeys.description') }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-group v-if="$store.getters.selectedOS && $store.getters.selectedOS.name === 'Linux'">
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon left>mdi-power-plug</v-icon>
                    {{ $t('features.passThrough.title') }}
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
                        🔌 {{ $t('features.passThrough.description') }}
                        <br />
                        <i18n path="features.passThrough.description2">
                          <code slot="ctrl">{{ $t('input.ctrl') }}</code>
                          <code slot="g">G</code>
                        </i18n>
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
