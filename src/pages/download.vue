<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="mt-3 pb-3">
        <v-card-title>
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
                  <v-icon left>mdi-github</v-icon>
                  Visit our GitHub
                </v-btn>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
          </v-alert>

          <template v-if="latestRelease">
            <span class="text-h6">Latest version: {{ latestRelease.tag_name }}</span>
            <br />
            <span>Released {{ new Date(latestRelease.published_at).toLocaleString() }}</span>
          </template>
          <v-skeleton-loader v-else type="article, actions"></v-skeleton-loader>

          <template v-if="$store.getters.selectedOS">
            <div v-if="$store.getters.selectedOS.name === 'macOS'" class="mt-5">
              Soundux is currently not supported on your operating system
            </div>
            <div v-else class="mt-5">
              Soundux is offered as different flavors for your operating system.
            </div>
            <div>If we have detected the wrong operating system just change it on the top right.</div>

            <v-row justify="center" class="mt-5">
              <template v-if="$store.getters.selectedOS.name === 'Windows'">
                <v-col cols="auto">
                  <v-btn color="primary" x-large :href="windowSetup" width="250">
                    <v-icon left>mdi-wizard-hat</v-icon>
                    <div>Download Setup</div>
                  </v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn color="primary" x-large :href="windowsPortable" width="250">
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
                    Please click the button below or watch the video for important information about
                    Windows support
                  </div>
                  <v-row justify="center" class="my-2">
                    <iframe
                      width="80%"
                      height="315"
                      src="https://odysee.com/$/embed/windows-setup/901ba77743f8f7b9e816c91e5ee2a3ca465744e0?r=AFN4vT5FPNqHqPE9pi4vvXwkgnFbEZVo"
                      title="LBRY video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-row>
                  <v-row class="my-2">
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
                <v-row justify="center">
                  <v-col cols="auto">
                    <v-row justify="center" no-gutters dense>
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
                    <v-row justify="center" dense>For all distros with Flatpak support</v-row>
                  </v-col>
                  <v-col cols="auto">
                    <v-row justify="center" align-content="center" align="center" no-gutters dense>
                      <a href="https://snapcraft.io/soundux" target="_blank">
                        <img
                          height="80"
                          alt="Get it from the Snap Store"
                          :src="`https://snapcraft.io/static/images/badges/en/snap-store-${
                            $vuetify.theme.dark ? 'black' : 'white'
                          }.svg`"
                        />
                      </a>
                    </v-row>
                    <v-row justify="center" dense>For all distros with Snap support</v-row>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="auto">
                    <v-row justify="center" no-gutters dense>
                      <v-dialog v-model="archModal" width="500">
                        <template #activator="{ on, attrs }">
                          <v-btn color="blue lighten-1" x-large dark v-bind="attrs" v-on="on">
                            <v-icon left>mdi-arch</v-icon>
                            <div>Arch Linux</div>
                          </v-btn>
                        </template>

                        <v-card>
                          <v-card-title>
                            <v-icon left>mdi-arch</v-icon>
                            Arch Linux
                            <v-spacer></v-spacer>
                            <v-icon @click="archModal = false">mdi-close</v-icon>
                          </v-card-title>
                          <v-card-text>
                            Install Soundux with your favorite AUR helper
                            <br />
                            <code class="d-block text-center">
                              <NeoTextra
                                :data="['yay', 'paru', 'pikaur', 'pacaur', 'trizen']"
                                :timer="1.5"
                                :infinite="true"
                                filter="top-bottom"
                              ></NeoTextra>
                              -S soundux</code
                            >
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue lighten-1"
                              x-large
                              dark
                              href="https://aur.archlinux.org/packages/soundux/"
                              target="_blank"
                            >
                              <v-icon left>mdi-arch</v-icon>
                              <div>Visit AUR page</div>
                            </v-btn>
                            <v-spacer></v-spacer>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </v-col>
                  <v-col cols="auto">
                    <v-row justify="center" no-gutters dense>
                      <v-dialog v-model="debianModal" width="500">
                        <template #activator="{ on, attrs }">
                          <v-btn color="red darken-1" x-large dark v-bind="attrs" v-on="on">
                            <v-icon left>mdi-debian</v-icon>
                            <div>debian</div>
                          </v-btn>
                        </template>

                        <v-card>
                          <v-card-title>
                            <v-icon left>mdi-debian</v-icon>
                            Debian
                            <v-spacer></v-spacer>
                            <v-icon @click="debianModal = false">mdi-close</v-icon>
                          </v-card-title>
                          <v-card-text>
                            Install Soundux on Debian
                            <div class="subtitle-1">via DEB package (no automatic updates)</div>
                            <code>sudo dpkg -i {{ debPackage[1] }}</code>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="red darken-1" x-large dark :href="debPackage[0]">
                              <v-icon left>mdi-debian</v-icon>
                              <div>Download DEB</div>
                            </v-btn>
                            <v-spacer></v-spacer>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </v-col>
                  <v-col cols="auto">
                    <v-row justify="center" no-gutters dense>
                      <v-dialog v-model="ubuntuModal" width="500">
                        <template #activator="{ on, attrs }">
                          <v-btn color="orange darken-2" x-large dark v-bind="attrs" v-on="on">
                            <v-icon left>mdi-ubuntu</v-icon>
                            <div>Ubuntu</div>
                          </v-btn>
                        </template>

                        <v-card>
                          <v-card-title>
                            <v-icon left>mdi-ubuntu</v-icon>
                            Ubuntu
                            <v-spacer></v-spacer>
                            <v-icon @click="ubuntuModal = false">mdi-close</v-icon>
                          </v-card-title>
                          <v-card-text>
                            Install Soundux on Ubuntu
                            <div class="subtitle-1">
                              via
                              <a href="https://github.com/pacstall/pacstall" target="_blank">Pacstall</a>
                            </div>
                            <code>sudo pacstall -I soundux</code>
                            <div class="subtitle-1">via DEB package (no automatic updates)</div>
                            <code>sudo dpkg -i {{ debPackage[1] }}</code>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="orange darken-2" x-large dark :href="debPackage[0]">
                              <v-icon left>mdi-ubuntu</v-icon>
                              <div>Download DEB</div>
                            </v-btn>
                            <v-spacer></v-spacer>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </v-col>
                  <v-col cols="auto">
                    <v-row justify="center" no-gutters dense>
                      <v-dialog v-model="fedoraModal" width="500">
                        <template #activator="{ on, attrs }">
                          <v-btn color="blue darken-3" x-large dark v-bind="attrs" v-on="on">
                            <v-icon left>mdi-fedora</v-icon>
                            <div>Fedora</div>
                          </v-btn>
                        </template>

                        <v-card>
                          <v-card-title>
                            <v-icon left>mdi-fedora</v-icon>
                            Fedora
                            <v-spacer></v-spacer>
                            <v-icon @click="fedoraModal = false">mdi-close</v-icon>
                          </v-card-title>
                          <v-card-text>
                            Install Soundux on Fedora
                            <div class="subtitle-1">
                              via
                              <a
                                href="https://copr.fedorainfracloud.org/coprs/rivenirvana/soundux/"
                                target="_blank"
                              >
                                COPR
                              </a>
                            </div>
                            <div>
                              <code>sudo dnf copr enable rivenirvana/soundux</code>
                            </div>
                            <div>
                              <code>sudo dnf install soundux</code>
                            </div>
                            <div class="text-subtitle-1">via RPM package (no automatic updates)</div>
                            <code>sudo dnf install {{ rpmPackage[1] }}</code>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-3" x-large dark :href="rpmPackage[0]">
                              <v-icon left>mdi-fedora</v-icon>
                              <div>Download RPM</div>
                            </v-btn>
                            <v-spacer></v-spacer>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </v-col>
                </v-row>
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
        <v-card-title>
          <v-icon left>mdi-chart-line</v-icon>
          Downloads per version
        </v-card-title>
        <v-card-subtitle>Latest 10 versions</v-card-subtitle>
        <v-card-text>
          <v-sparkline
            v-if="oldToNewReleases.length > 0"
            :value="downloadsPerRelease"
            :gradient="['#f72047', '#ffd200', '#1feaea']"
            :smooth="10"
            :line-width="2"
            stroke-linecap="round"
            auto-draw
            show-labels
            :padding="15"
          >
            <template v-slot:label="item">{{ releaseTags[item.index] }}</template>
          </v-sparkline>
          <v-skeleton-loader v-else type="list-item-three-line"></v-skeleton-loader>
        </v-card-text>
      </v-card>

      <v-card class="mt-3 pb-3" rounded>
        <v-card-title>
          <v-icon left>mdi-arrow-down-bold-circle-outline</v-icon>
          Old versions
        </v-card-title>
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
                  Released {{ new Date(release.published_at).toLocaleString() }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-skeleton-loader v-else type="list-item-two-line@3"></v-skeleton-loader>
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
      oldToNewReleases: [] as GithubRelease[],
      error: '',
      // modals
      archModal: false,
      debianModal: false,
      ubuntuModal: false,
      fedoraModal: false,
    };
  },
  computed: {
    downloadsPerRelease(): number[] {
      return this.oldToNewReleases.map(release => {
        const assetDownloads = release.assets.map(asset => asset.download_count);
        return assetDownloads ? assetDownloads.reduce((a, b) => a + b) : 0;
      });
    },
    releaseTags(): string[] {
      return this.oldToNewReleases.map(release => release.tag_name);
    },
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
    debPackage(): [string, string] {
      if (this.latestRelease) {
        const asset = this.latestRelease.assets.find(({ name }) => name.endsWith('.deb'));
        if (asset) {
          return [asset.browser_download_url, asset.name];
        }
      }
      return ['https://github.com/Soundux/Soundux/releases/latest', 'soundux-*.deb'];
    },
    rpmPackage(): [string, string] {
      if (this.latestRelease) {
        const asset = this.latestRelease.assets.find(({ name }) => name.endsWith('.rpm'));
        if (asset) {
          return [asset.browser_download_url, asset.name];
        }
      }
      return ['https://github.com/Soundux/Soundux/releases/latest', 'soundux-*.rpm'];
    },
  },
  async mounted() {
    try {
      const gitHubData = await fetch(`https://api.github.com/repos/Soundux/Soundux/releases`);
      if (gitHubData) {
        const releases = await gitHubData.json();
        if (Array.isArray(releases)) {
          const nonBeta = releases.filter(
            release => !release.prerelease && !release.tag_name.includes('b')
          );
          this.releases = nonBeta;
          this.oldToNewReleases = [...nonBeta].reverse().slice(Math.max(nonBeta.length - 10, 1));
        } else {
          this.error = 'JSON was not an array';
        }
      }
    } catch (error) {
      console.error(error);
      this.error = error.message;
    }
  },
});
</script>
