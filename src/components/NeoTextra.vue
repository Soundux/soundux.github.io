<!--
Thanks to https://github.com/hosein2398/Textra

The MIT License (MIT)

Copyright (c) 2018 Hosein Barzegaran

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
-->

<template>
  <div class="textra">
    <div class="mainTextra" v-html="currentWord" :style="mainStyleComputed"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NeoTextra',
  props: {
    data: {
      type: Array,
      required: true,
    },
    filter: {
      type: String,
      default: 'simple',
    },
    timer: {
      type: Number,
      default: 2,
    },
    infinite: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      defaultStyle: 'transition: all 0.5s;',
      currentWord: this.data[0],
      liStl: null,
      dataCounter: 0,
      animationID: null,
      filters: {
        simple: ['opacity:0', 'opacity:1'],
        'bottom-top': ['transform:translateY(10px);opacity:0;', 'transform:translateY(0px);opacity:1;'],
        'top-bottom': ['transform:translateY(-10px);opacity:0;', 'transform:translateY(0px);opacity:1;'],
        'right-left': ['transform:translateX(10px);opacity:0;', 'transform:translateX(0px);opacity:1;'],
        'left-right': ['transform:translateX(-10px);opacity:0;', 'transform:translateX(0px);opacity:1;'],
        press: ['letter-spacing: 4px;opacity:0;', 'opacity:1;'],
        scale: ['transform:scaleY(1.4);opacity:0;', 'opacity:1;'],
        flash: ['transform:skewX(-70deg);opacity:0;', 'transform:skewX(0deg);opacity:1;'],
        flip: ['transform:rotateX(-180deg);opacity:0;', 'transform:rotate(0deg);opacity:1;'],
      },
    };
  },
  computed: {
    mainStyleComputed() {
      return this.defaultStyle + this.liStl;
    },
  },
  created() {
    let previousTime = 0;
    const that = this;
    function run(currentTime) {
      if (previousTime + this.timer * 1000 < currentTime) {
        //hiding
        this.liStl = this.filters[this.filter][0];
      }
      if (previousTime + this.timer * 1000 + 1000 < currentTime) {
        //showing
        previousTime = currentTime;
        this.currentWord = this.data[++this.dataCounter];
        this.liStl = this.filters[this.filter][1];
        if (this.dataCounter === this.data.length) {
          if (this.infinite) {
            this.dataCounter = 0;
            this.currentWord = this.data[this.dataCounter];
          } else {
            // stopping animation
            return;
          }
        }
      }
      this.animationID = window.requestAnimationFrame(run.bind(that));
    }
    this.animationID = window.requestAnimationFrame(run.bind(that));
  },
  beforeDestroy() {
    window.cancelAnimationFrame(this.animationID);
  },
});
</script>

<style scoped lang="scss">
.textra {
  height: auto;
  width: auto;
  display: inline-block;
}
</style>
