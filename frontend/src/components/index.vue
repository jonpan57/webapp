<template>
  <div class="homepage">
    <div class="header-wrapper">
      <Header></Header>
    </div>
    <div class="tab-wrapper">
      <Tabs :tabs="tabs" :initialIndex="0"></Tabs>
    </div>
  </div>
</template>

<script>
import Header from 'components/header/index'
import Tabs from 'components/tabs/index'

export default {
  data () {
    return {
      seller: {}
    }
  },
  computed: {
    tabs () {
      return [
        {
          label: '商品',
          component: () => import('components/goods/index'),
          data: {
            seller: this.seller
          }
        },
        {
          label: '评价',
          component: () => import('components/ratings/index'),
          data: {
            seller: this.seller
          }
        },
        {
          label: '商家',
          component: () => import('components/seller/index'),
          data: {
            seller: this.seller
          }
        }
      ]
    }
  },
  components: {
    Header,
    Tabs
  }
}
</script>

<style lang="stylus" scoped>
  .header-wrapper
    position: relative
    overflow: hidden

  .tab-wrapper
    position: fixed
    top: 136px
    left: 0
    right: 0
    bottom: 0

</style>
