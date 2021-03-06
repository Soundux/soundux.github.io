<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant && !$vuetify.breakpoint.mdAndDown"
      fixed
      app
    >
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mdAndDown" @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-btn v-else icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-0">
        <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndUp" nuxt to="/">
          <v-avatar>
            <img src="/logo.png" alt="Logo" />
          </v-avatar>
        </v-app-bar-nav-icon>
        <span>Soundux</span>
      </v-toolbar-title>
      <v-spacer />
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        prepend-icon="mdi-theme-light-dark"
        hide-details
        @change="darkThemeChanged"
      ></v-switch>
      <div class="ml-3" style="width: 150px">
        <ClientOnly>
          <v-select
            v-model="selectedOS"
            return-object
            dense
            solo
            hide-details
            item-text="name"
            :items="operatingSystems"
          >
            <template #selection="{ item }">
              <v-icon left>{{ item.icon }}</v-icon>
              {{ item.name }}
            </template>
            <template #item="{ item }">
              <v-icon left>{{ item.icon }}</v-icon>
              {{ item.name }}
            </template>
          </v-select>
        </ClientOnly>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { OperatingSystem, operatingSystems } from '~/types';

const darkString = (dark: boolean) => (dark ? 'dark' : 'light');
const isDark = (darkString: string | null) => darkString === 'dark';

export default Vue.extend({
  name: 'Default',
  data() {
    return {
      drawer: false,
      operatingSystems,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-star-circle-outline',
          title: 'Features',
          to: '/features',
        },
        {
          icon: 'mdi-download',
          title: 'Download',
          to: '/download',
        },
        {
          icon: 'mdi-frequently-asked-questions',
          title: 'FAQ',
          to: '/faq',
        },
      ],
      miniVariant: true,
      darkMediaQuery: null as MediaQueryList | null,
    };
  },
  computed: {
    selectedOS: {
      get(): OperatingSystem {
        return this.$store.getters.selectedOS;
      },
      set(newValue: OperatingSystem) {
        this.$store.commit('setSelectedOS', newValue);
      },
    },
  },
  mounted() {
    if (window.matchMedia) {
      this.darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', darkString(this.darkMediaQuery.matches));
        // console.log('theme not set, set to browser setting', localStorage.getItem('theme'));
      }

      if (this.darkMediaQuery.addEventListener) {
        this.darkMediaQuery.addEventListener('change', this.mediaQueryChange);
      } else if (this.darkMediaQuery.addListener) {
        this.darkMediaQuery.addListener(this.mediaQueryChange);
      }
    } else {
      localStorage.setItem('theme', darkString(true));
    }
    // setTimeout(() => (this.$vuetify.theme.dark = darkTheme), 0);
    this.$vuetify.theme.dark = isDark(localStorage.getItem('theme'));

    const { userAgent } = navigator;
    if (userAgent.includes('Windows')) {
      this.selectedOS = this.operatingSystems[0];
    } else if (userAgent.includes('Macintosh')) {
      this.selectedOS = this.operatingSystems[1];
    } else {
      this.selectedOS = this.operatingSystems[2];
    }
  },
  beforeDestroy() {
    if (this.darkMediaQuery) {
      if (this.darkMediaQuery.removeEventListener) {
        this.darkMediaQuery.removeEventListener('change', this.mediaQueryChange);
      } else if (this.darkMediaQuery.removeListener) {
        this.darkMediaQuery.removeListener(this.mediaQueryChange);
      }
    }
  },
  methods: {
    mediaQueryChange(event: MediaQueryListEvent) {
      const { matches } = event;
      this.$vuetify.theme.dark = matches;
      localStorage.setItem('theme', darkString(matches));
      // console.log('dark theme changed', matches);
    },
    darkThemeChanged(state: boolean) {
      localStorage.setItem('theme', darkString(state));
      // console.log('theme manually set dark', state);
    },
  },
});
</script>
