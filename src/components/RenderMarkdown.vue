<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="markdown-render" v-html="content"></div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import MarkdownIt, { Options as MarkdownItOptions } from 'markdown-it';
export { Options } from 'markdown-it';

export default Vue.extend({
  name: 'VueMarkdown',
  props: {
    source: {
      type: String,
      required: true,
    },
    options: {
      type: Object as PropType<MarkdownItOptions>,
      required: false,
      default: (): MarkdownItOptions => {},
    },
  },
  data() {
    return {
      md: null as MarkdownIt | null,
    };
  },
  computed: {
    content(): string | undefined {
      const src = this.source;
      return this.md?.render(src);
    },
  },
  created() {
    this.md = new MarkdownIt(this.options);
  },
});
</script>

<style lang="scss">
.markdown-render {
  max-width: 100%;
}
.markdown-render > * {
  max-width: 100%;
}
.markdown-render > * > * {
  max-width: 100%;
}
</style>
