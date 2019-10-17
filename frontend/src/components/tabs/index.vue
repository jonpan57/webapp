<template>
  <div class="tabs">
    <cube-tab-bar
      :show-slider=false
      v-model="selectedLabel"
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
        ref="slide">
        <cube-slide-item>
          <Goods></Goods>
        </cube-slide-item>
        <cube-slide-item>
          <Ratings></Ratings>
        </cube-slide-item>
        <cube-slide-item>
          <Seller></Seller>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
import Goods from 'components/goods/index'
import Ratings from 'components/ratings/index'
import Seller from 'components/seller/index'

export default {
  data () {
    return {
      index: 0,
      tabs: [
        {
          label: '商品'
        },
        {
          label: '评价'
        },
        {
          label: '商家'
        }
      ]
    }
  },
  computed: {
    selectedLabel: {
      get () {
        return this.tabs[this.index].label
      },
      set (val) {
        this.index = this.tabs.findIndex((value) => {
          return value.label === val
        })
      }
    }
  },
  components: {
    Goods,
    Ratings,
    Seller
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  .tabs
    >>> .cube-tab
      padding: 10px 0
    display: flex
    flex-direction: column
    height: 100%

    .slide-wrapper
      flex: 1
      overflow: hidden
</style>
