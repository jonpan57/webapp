<template>
  <div class="tabs">
    <cube-tab-bar
      v-model="selectedLabel"
      :show-slider=true
      :useTransition=false
      :data="tabs"
      ref="tabBar"
      class="border-bottom-1px">
    </cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
        :loop=false
        :autoPlay=false
        :showDots=false
        :initialIndex="index"
        ref="slide"
        @change="onChange"
        @scroll="onScroll"
        :options="slideOptions">
        <cube-slide-item v-for="(tab,index) in tabs" :key="index">
          <components :is="tab.component" :data="tab.data"></components>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default () {
        return {}
      }
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      index: this.initialIndex,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      }
    }
  },
  methods: {
    onChange (current) {
      this.index = current
    },
    onScroll (pos) {
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth
      const slideWidth = this.$refs.slide.slide.scrollerWidth
      const transform = -pos.x / slideWidth * tabBarWidth
      this.$refs.tabBar.setSliderTransform(transform)
    }
  },
  computed: {
    selectedLabel: {
      get () {
        return this.tabs[this.index].label
      },
      set (newVal) {
        this.index = this.tabs.findIndex((value) => {
          return value.label === newVal
        })
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  .tabs
    display: flex
    flex-direction: column
    height: 100%

    .slide-wrapper
      flex: 1
      overflow: hidden

      .cube-slide-item
        position: relative
</style>
