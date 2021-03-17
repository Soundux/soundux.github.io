<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="mt-3 pb-3">
        <v-card-title class="text-h5">
          <v-icon left>mdi-download</v-icon>
          Download Soundux now
        </v-card-title>
        <v-card-text>
          <v-alert :value="!!error" text type="error" elevation="5" dense transition="scale-transition">
            <h3 class="text-h5">Failed to fetch information from GitHub</h3>
            <div>
              {{ error }}
            </div>
            <v-divider class="my-4"></v-divider>
            <v-row align="center" no-gutters>
              <v-spacer></v-spacer>
              <v-col class="shrink">
                <v-btn
                  color="orange darken-3"
                  href="https://github.com/Soundux/Soundux/releases"
                  target="_blank"
                >
                  Visit our GitHub
                </v-btn>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
          </v-alert>

          <template v-if="latestRelease">
            <span class="text-h6">Latest version: {{ latestRelease.tag_name }}</span>
            <br />
            <span class="text-h6">Released on {{ latestRelease.published_at }}</span>
          </template>
          <v-skeleton-loader v-else type="article, actions"></v-skeleton-loader>

          <template v-if="$store.getters.selectedOS">
            <div v-if="$store.getters.selectedOS.name === 'macOS'" class="mt-5">
              Soundux is currently not supported on your operating system
            </div>
            <div v-else class="mt-5">
              Soundux is offered as different flavors for your operating system
            </div>
            <div>If we have detected the wrong operating system just change it on the top right.</div>

            <v-row justify="center" class="mt-5">
              <template v-if="$store.getters.selectedOS.name === 'Windows'">
                <v-col cols="auto">
                  <v-btn color="primary" x-large :href="windowSetup" target="_self" width="250">
                    <v-icon left>mdi-wizard-hat</v-icon>
                    <div>Download Setup</div>
                  </v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn color="primary" x-large :href="windowsPortable" target="_self" width="250">
                    <v-icon left>mdi-briefcase-outline</v-icon>
                    <div>Download Portable</div>
                  </v-btn>
                </v-col>
                <v-alert type="info" class="text-center mt-3 mx-4" dense>
                  We highly recommend you downloading the Setup as it automatically downloads and
                  installs the required dependencies (WebView2 Runtime and VB-Cable).
                </v-alert>
                <v-alert
                  outlined
                  color="warning"
                  elevation="5"
                  dense
                  transition="scale-transition"
                  class="mx-5"
                >
                  <h3 class="text-h5">Important!</h3>
                  <div>
                    Please click the button below for important information about Windows support
                  </div>
                  <v-row align="center" class="my-2">
                    <v-spacer></v-spacer>
                    <v-col class="shrink">
                      <v-btn color="red" nuxt to="/windows-setup">
                        <v-icon left>mdi-chevron-right</v-icon>
                        Additional Setup steps
                        <v-icon right>mdi-alert</v-icon>
                      </v-btn>
                    </v-col>
                    <v-spacer></v-spacer>
                  </v-row>
                </v-alert>
              </template>
              <template v-else-if="$store.getters.selectedOS.name === 'macOS'">
                <v-col cols="auto">
                  <v-btn class="text-none" :disabled="true" color="primary" x-large>
                    <v-icon left>mdi-download</v-icon>
                    <div>Download for macOS<br />(coming soon™)</div>
                  </v-btn>
                </v-col>
              </template>
              <template v-else>
                <v-col cols="auto">
                  <v-row justify="center" class="mb-3">
                    <a href="https://flathub.org/apps/details/io.github.Soundux" target="_blank">
                      <img
                        width="240"
                        alt="Download on Flathub"
                        :src="`https://flathub.org/assets/badges/flathub-badge${
                          $vuetify.theme.dark ? '' : '-i'
                        }-en.png`"
                      />
                    </a>
                  </v-row>
                  <v-row justify="center" class="mb-3">
                    <v-btn
                      color="primary"
                      x-large
                      href="https://aur.archlinux.org/packages/soundux/"
                      target="_blank"
                    >
                      <v-icon left>mdi-arch</v-icon>
                      <div>Download from AUR</div>
                    </v-btn>
                  </v-row>
                  <v-row justify="center">
                    <v-btn color="primary" x-large :href="debPackage">
                      <v-icon left>mdi-debian</v-icon>
                      <div>Download DEB</div>
                    </v-btn>
                  </v-row>
                  <v-row justify="center" class="mb-3">For Ubuntu 20.04+ / Debian sid</v-row>
                  <v-row justify="center">
                    <v-btn color="primary" x-large :href="rpmPackage">
                      <v-icon left>mdi-fedora</v-icon>
                      <div>Download RPM</div>
                    </v-btn>
                  </v-row>
                  <v-row justify="center" class="">For Fedora 33</v-row>
                </v-col>
              </template>
            </v-row>
          </template>

          <details v-if="latestRelease">
            <summary role="button" class="text-h6 cursor-pointer mt-6">Changelog</summary>
            <RenderMarkdown :source="latestRelease.body" :options="{ html: true }" />
          </details>
        </v-card-text>
      </v-card>

      <v-card class="mt-3 pb-3" rounded>
        <v-card-title class="text-h5">Old versions</v-card-title>
        <v-card-text>
          If you have problems with the latest version they might not occur in an old version. You can
          try out older versions here:
          <v-list v-if="oldReleases.length > 0" class="text-center">
            <v-list-item v-for="release in oldReleases" :key="release.id">
              <v-list-item-content>
                <v-list-item-title>
                  <a :href="release.html_url" target="_blank">Version {{ release.tag_name }}</a>
                </v-list-item-title>
                <v-list-item-subtitle class="text-wrap">
                  Released on {{ release.published_at }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-skeleton-loader
            v-else
            type="list-item-two-line, list-item-two-line, list-item-two-line"
          ></v-skeleton-loader>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { GithubRelease } from '~/types/github';

export default Vue.extend({
  name: 'Download',
  data() {
    return {
      releases: [] as GithubRelease[],
      error: '',
    };
  },
  computed: {
    latestRelease(): GithubRelease {
      return this.releases[0];
    },
    oldReleases(): GithubRelease[] {
      return this.releases.slice(1, this.releases.length);
    },
    windowSetup(): string {
      if (this.latestRelease) {
        const asset = this.latestRelease.assets.find(({ name }) => name.includes('windows-setup'));
        if (asset) {
          return asset.browser_download_url;
        }
      }
      return 'https://github.com/Soundux/Soundux/releases/latest';
    },
    windowsPortable(): string {
      if (this.latestRelease) {
        const asset = this.latestRelease.assets.find(({ name }) => name.includes('windows-portable'));
        if (asset) {
          return asset.browser_download_url;
        }
      }
      return 'https://github.com/Soundux/Soundux/releases/latest';
    },
    debPackage(): string {
      if (this.latestRelease) {
        const asset = this.latestRelease.assets.find(({ name }) => name.endsWith('.deb'));
        if (asset) {
          return asset.browser_download_url;
        }
      }
      return 'https://github.com/Soundux/Soundux/releases/latest';
    },
    rpmPackage(): string {
      if (this.latestRelease) {
        const asset = this.latestRelease.assets.find(({ name }) => name.endsWith('.rpm'));
        if (asset) {
          return asset.browser_download_url;
        }
      }
      return 'https://github.com/Soundux/Soundux/releases/latest';
    },
  },
  async mounted() {
    try {
      const gitHubData = await fetch(`https://api.github.com/repos/Soundux/Soundux/releases`);
      if (gitHubData) {
        this.releases = await gitHubData.json();
      }
    } catch (error) {
      console.error(error);
      this.error = error.message;
    }
  },
});
</script>
