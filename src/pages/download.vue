<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="mt-3 pb-3">
        <v-card-title>
          <v-icon left>mdi-download</v-icon>
          {{ $t('download.downloadNow') }}
        </v-card-title>
        <v-card-text>
          <v-alert :value="!!error" text type="error" elevation="5" dense transition="scale-transition">
            <h3 class="text-h5">{{ $t('download.failedToFetch') }}</h3>
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
                  {{ $t('download.visitOurGitHub') }}
                </v-btn>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
          </v-alert>

          <template v-if="latestRelease">
            <span class="text-h6">{{ $t('download.latestVersion') }}: {{ latestRelease.tag_name }}</span>
            <br />
            <span>
              {{ $t('download.released') }}
              {{ new Date(latestRelease.published_at).toLocaleString() }}
            </span>
          </template>
          <v-skeleton-loader v-else type="article, actions"></v-skeleton-loader>

          <template v-if="$store.getters.selectedOS">
            <div v-if="$store.getters.selectedOS.name === 'macOS'" class="mt-5">
              {{ $t('download.notSupported') }}
            </div>
            <div v-else class="mt-5">
              {{ $t('download.differentFlavors') }}
            </div>
            <div>{{ $t('download.wrongOS') }}</div>

            <v-row justify="center" class="mt-5">
              <template v-if="$store.getters.selectedOS.name === 'Windows'">
                <v-col>
                  <v-btn color="primary" x-large :href="windowSetup" width="100%">
                    <v-icon left>mdi-wizard-hat</v-icon>
                    <div>{{ $t('download.windows.downloadSetup') }}</div>
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn color="primary" x-large :href="windowsPortable" width="100%">
                    <v-icon left>mdi-briefcase-outline</v-icon>
                    <div>{{ $t('download.windows.downloadPortable') }}</div>
                  </v-btn>
                </v-col>
                <v-alert type="info" class="text-center mt-3 mx-4" dense>
                  {{ $t('download.windows.recommendSetup') }}
                </v-alert>
                <v-alert
                  outlined
                  color="warning"
                  elevation="5"
                  dense
                  transition="scale-transition"
                  class="mx-5"
                >
                  <h3 class="text-h5">{{ $t('download.windows.important') }}</h3>
                  <div>
                    {{ $t('download.windows.importantInformation') }}
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
                      <v-btn color="red" dark nuxt to="/windows-setup">
                        <v-icon left>mdi-chevron-right</v-icon>
                        {{ $t('download.windows.additionalSteps') }}
                        <v-icon right>mdi-alert</v-icon>
                      </v-btn>
                    </v-col>
                    <v-spacer></v-spacer>
                  </v-row>
                </v-alert>
              </template>
              <template v-else-if="$store.getters.selectedOS.name === 'macOS'">
                <v-col cols="auto">
                  <v-btn :disabled="true" color="primary" x-large>
                    <v-icon left>mdi-download</v-icon>
                    <div>Download for macOS</div>
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
                    <v-row justify="center" dense>{{ $t('download.linux.flatpak') }}</v-row>
                  </v-col>
                  <!-- <v-col cols="auto">
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
                    <v-row justify="center" dense>{{ $t('download.linux.snap') }}</v-row>
                  </v-col>-->
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
                            {{ $t('download.linux.archLinux') }}
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
                              <div>{{ $t('download.linux.aurPage') }}</div>
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
                            {{ $t('download.linux.debian') }}
                            <DownloadMPR></DownloadMPR>
                            <div class="subtitle-1">
                              {{ $t('download.linux.debPackage') }}
                              ({{ $t('download.linux.noAutomaticUpdates') }})
                            </div>
                            <code>sudo dpkg -i {{ debPackage[1] }}</code>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="red darken-1" x-large dark :href="debPackage[0]">
                              <v-icon left>mdi-debian</v-icon>
                              <div>{{ $t('download.linux.downloadDeb') }}</div>
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
                            {{ $t('download.linux.ubuntu') }}
                            <i18n tag="div" class="subtitle-1" path="download.linux.pacstall">
                              <a
                                slot="pacstall"
                                href="https://github.com/pacstall/pacstall"
                                target="_blank"
                              >
                                Pacstall
                              </a>
                            </i18n>
                            <code>pacstall -I soundux</code>
                            <DownloadMPR></DownloadMPR>
                            <div class="subtitle-1">
                              {{ $t('download.linux.debPackage') }}
                              ({{ $t('download.linux.noAutomaticUpdates') }})
                            </div>
                            <code>sudo dpkg -i {{ debPackage[1] }}</code>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="orange darken-2" x-large dark :href="debPackage[0]">
                              <v-icon left>mdi-ubuntu</v-icon>
                              <div>{{ $t('download.linux.downloadDeb') }}</div>
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
                            {{ $t('download.linux.fedora') }}
                            <i18n tag="div" class="subtitle-1" path="download.linux.copr">
                              <a
                                slot="copr"
                                href="https://copr.fedorainfracloud.org/coprs/rivenirvana/soundux/"
                                target="_blank"
                              >
                                COPR
                              </a>
                            </i18n>
                            <div>
                              <code>sudo dnf copr enable rivenirvana/soundux</code>
                            </div>
                            <div>
                              <code>sudo dnf install soundux</code>
                            </div>
                            <div class="text-subtitle-1">
                              {{ $t('download.linux.rpmPackage') }}
                              ({{ $t('download.linux.noAutomaticUpdates') }})
                            </div>
                            <code>sudo dnf install {{ rpmPackage[1] }}</code>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-3" x-large dark :href="rpmPackage[0]">
                              <v-icon left>mdi-fedora</v-icon>
                              <div>{{ $t('download.linux.downloadRpm') }}</div>
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
            <summary role="button" class="text-h6 cursor-pointer mt-6">
              {{ $t('download.changelog') }}
            </summary>
            <RenderMarkdown :source="latestRelease.body" :options="{ html: true }" />
          </details>
        </v-card-text>
      </v-card>

      <v-card class="mt-3 pb-3" rounded>
        <v-card-title>
          <v-icon left>mdi-chart-line</v-icon>
          {{ $t('download.downloadsPerVersion') }}
        </v-card-title>
        <v-card-subtitle>
          {{ $t('download.latestVersions', { num: 10 }) }}
        </v-card-subtitle>
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
            <template #label="item">{{ releaseTags[item.index] }}</template>
          </v-sparkline>
          <v-skeleton-loader v-else type="list-item-three-line"></v-skeleton-loader>
        </v-card-text>
      </v-card>

      <v-card class="mt-3 pb-3" rounded>
        <v-card-title>
          <v-icon left>mdi-arrow-down-bold-circle-outline</v-icon>
          {{ $t('download.olderVersions') }}
        </v-card-title>
        <v-card-text>
          {{ $t('download.tryOlderVersions') }}
          <v-list v-if="oldReleases.length > 0" class="text-center">
            <v-list-item v-for="release in oldReleases" :key="release.id">
              <v-list-item-content>
                <v-list-item-title>
                  <a :href="release.html_url" target="_blank">Version {{ release.tag_name }}</a>
                </v-list-item-title>
                <v-list-item-subtitle class="text-wrap">
                  {{ $t('download.released') }} {{ new Date(release.published_at).toLocaleString() }}
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
      return 'https://github.com/Soundux/Soundux/releases/download/0.2.7/soundux-0.2.7-windows-setup.exe';
    },
    windowsPortable(): string {
      if (this.latestRelease) {
        const asset = this.latestRelease.assets.find(({ name }) => name.includes('windows-portable'));
        if (asset) {
          return asset.browser_download_url;
        }
      }
      return 'https://github.com/Soundux/Soundux/releases/download/0.2.7/soundux-0.2.7-windows-portable.exe';
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
      if (gitHubData && gitHubData.ok) {
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
      } else {
        this.error = 'Response was not OK';
      }
    } catch (error) {
      console.error(error);
      this.error = error.message;
    }
  },
});
</script>
