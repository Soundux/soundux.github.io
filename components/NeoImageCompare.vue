<template>
  <div class="image-compare">
    <div ref="container" :style="containerStyle" draggable="true">
      <div class="image-container" :style="imageContainerAfterStyle" draggable="true">
        <img :style="imageStyle" src="/screenshots/dark.png" alt="After" />
      </div>
      <div
        :class="{ smooth: !dragActive, 'image-container': true }"
        :style="imageContainerBeforeStyle"
        draggable="true"
      >
        <img :style="imageStyle" src="/screenshots/light.png" alt="Before" />
      </div>
      <div :class="{ smooth: !dragActive, slider: true }" :style="sliderStyle" draggable="true"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

// heavily inspired by Dev Ed: https://youtu.be/ee8y1IV6pOI
// TODO: make this component more flexible
export default Vue.extend({
  name: 'NeoImageCompare',
  data() {
    return {
      aspectRatio: { width: 440, height: 261 },
      width: 0,
      height: 0,
      posX: 0,
      dragActive: false,
    };
  },
  computed: {
    containerStyle(): object {
      return {
        position: 'relative',
        width: `${this.width}px`,
        height: `${this.height}px`,
      };
    },
    imageContainerBeforeStyle(): object {
      return {
        width: `${this.posX}px`,
        height: `${this.height}px`,
        overflow: 'hidden',
      };
    },
    imageContainerAfterStyle(): object {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
      };
    },
    imageStyle(): object {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
      };
    },
    sliderStyle(): object {
      return {
        left: `${this.posX}px`,
      };
    },
  },
  mounted() {
    const container = this.$refs.container as HTMLElement;
    container.addEventListener('mouseenter', this.mouseEnter);
    container.addEventListener('mousemove', this.drag);
    container.addEventListener('mouseleave', this.mouseLeave);
    container.addEventListener('touchstart', this.touchStart);
    container.addEventListener('touchmove', this.touch);
    container.addEventListener('touchend', this.touchEnd);
    window.addEventListener('resize', this.onResize);

    // use a timeout to fix a bug that the width is not set on mounted
    window.setTimeout(() => {
      this.width = this.$el?.parentElement?.parentElement?.parentElement?.clientWidth || 0;
      this.height = (this.width / this.aspectRatio.width) * this.aspectRatio.height;
      // this.width = (this.height / this.aspectRatio.height) * this.aspectRatio.width;
      this.posX = this.width / 2;
    }, 0);
  },
  beforeDestroy() {
    const container = this.$refs.container as HTMLElement;
    container.removeEventListener('mouseenter', this.mouseEnter);
    container.removeEventListener('mousemove', this.drag);
    container.removeEventListener('mouseleave', this.mouseLeave);
    container.removeEventListener('touchstart', this.touchStart);
    container.removeEventListener('touchmove', this.touch);
    container.removeEventListener('touchend', this.touchEnd);
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    mouseEnter() {
      this.dragActive = true;
    },
    drag(event: MouseEvent) {
      this.posX = event.offsetX;
    },
    mouseLeave() {
      // reset to middle on leave
      this.posX = this.width / 2;
      this.dragActive = false;
    },
    touchStart() {
      this.dragActive = true;
    },
    touchEnd() {
      // reset to middle on release
      this.posX = this.width / 2;
      this.dragActive = false;
    },
    touch(event: TouchEvent) {
      if (this.dragActive) {
        event.preventDefault();
        const sliderWidth = this.$el.querySelector('.slider')?.clientWidth || 0;
        const diffLeft = this.$el.getBoundingClientRect()?.left || 0;
        this.posX = event.touches[0].clientX - diffLeft + sliderWidth / 2;
      }
    },
    onResize() {
      this.width = this.$el?.parentElement?.parentElement?.parentElement?.clientWidth || 0;
      this.height = (this.width / this.aspectRatio.width) * this.aspectRatio.height;
      this.posX = this.width / 2;
    },
  },
});
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.image-compare {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: col-resize;
}

.image-container {
  position: absolute;
}

.image-container.smooth {
  transition: width 0.5s;
}

.slider.smooth {
  transition: left 0.5s;
}

img {
  object-fit: cover;
  z-index: -100;
  pointer-events: none;
}

.slider {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 0.25rem;
  background: gray;
  height: 100%;
  pointer-events: none;
}
</style>
