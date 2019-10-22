<template>
  <div class="index">
    <Header></Header>
    <Tabs class="tab-wrapper" :tabs="tabs" :initialIndex="0"></Tabs>
    <router-view/>
  </div>
</template>

<script>
import Header from 'components/header/index'
import Goods from 'components/goods/index'
import Ratings from 'components/ratings/index'
import Seller from 'components/seller/index'
import Tabs from 'components/tabs/index'

export default {
  name: 'index',
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
          component: Goods,
          data: {
            seller: this.seller
          }
        },
        {
          label: '评价',
          component: Ratings,
          data: {
            seller: this.seller
          }
        },
        {
          label: '商家',
          component: Seller,
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
  .tab-wrapper
    position: fixed
    top: 136px
    left: 0
    right: 0
    bottom: 0
</style>
