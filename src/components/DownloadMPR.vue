<template>
  <div>
    <i18n tag="div" class="subtitle-1" path="download.linux.mpr.title">
      <a slot="mpr" href="https://mpr.hunterwittenborn.com/packages/soundux/" target="_blank">MPR</a>
    </i18n>
    <v-alert dense outlined type="info" color="grey">
      <i18n path="download.linux.mpr.dependencies">
        <code slot="makedeb">makedeb</code>
        <code slot="tap">tap</code>
        <a slot="documentation" href="https://docs.hunterwittenborn.com/makedeb/" target="_blank">{{
          $t('download.linux.mpr.documentation')
        }}</a>
      </i18n>
    </v-alert>
    <code>tap install soundux</code>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DownloadMPR',
});
</script>
