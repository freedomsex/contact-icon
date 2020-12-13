<script>
import {pick} from 'underscore';
import materialColors from 'material-colors';
import defaultColors from './colors.js';
import prng from './prng.js';

export default {
  props: ['item', 'src', 'size'],
  data: () => ({
    image: false,
  }),
  computed: {
    letter() {
      if (this.item) {
        return this.item.name ? this.item.name.charAt(0) : null;
      }
      return null;
    },
    randomIndex() {  
      let {prefix, name, city, age} = this.item || {};
      prefix = prefix + name + city + age;
      return prng.int(prefix, 0, defaultColors.length);
    },
    colorIndex() {
      return defaultColors[this.randomIndex];
    },
    color() {
      const list = pick(materialColors, defaultColors);
      return `${list[this.colorIndex][400]}`;
    },
    source() {
      return this.src || '';
    },
    background() {
      return {
        backgroundColor: this.letter ? this.color : '#e5e5e5',
        backgroundImage: `url(${this.source})`,
      };
    },
  },
};
</script>

<template>
  <div class="contact-image-icon" :class="size" :style="background">
    <div class="contact-image-icon__letter" v-if="!source">
      {{letter}}
    </div>
  </div>
</template>

<style lang="less">
.contact-image-icon {
  @size: 40px;
  width: @size;
  height: @size;

  background-size: cover;
  background-position: center;

  background-color: @gray-light;
  border-radius: @size;
  overflow: hidden;
    font-size: 26px;

  &__letter {
    color: @white;
    line-height: 1.5;
    display: inline-flex;
  }

  display: inline-flex;
  justify-content: center;
  align-items: stretch;


  text-transform: uppercase;

  &.small-icon {
    @size: 28px;
    width: @size;
    height: @size;

    font-size: 19px;
  }
}
</style>
