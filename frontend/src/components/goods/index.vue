<template>
  <div class="goods">
    <div class="menu-wrapper">
      <cube-scroll-nav
        :side=true
        :current="current">
        <ul>
          <li v-for="item in goods" class="menu-item" :key="item">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
          </li>
        </ul>
      </cube-scroll-nav>
    </div>
    <div class="foods-wrapper">
      <cube-scroll-nav-panel>
        <ul>
          <li v-for="item in goods" class="food-list" :key="item">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" class="food-item" :key="food">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span>月售{{food.sellerCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span v-show="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </cube-scroll-nav-panel>
    </div>
    <div class="cart-wrapper">
      <Cart :delivery_price="seller.deliveryPrice" :min_price="seller.minPrice"></Cart>
    </div>
  </div>
</template>

<script>
import {getGoods, getSeller} from 'api'

import Cart from 'components/cart/index'

export default {
  name: 'index',
  data () {
    return {
      goods: {
        type: Object
      },
      classMap: [],
      seller: {
        type: Object
      },
      current: null
    }
  },
  created () {
    getGoods().then((goods) => {
      this.goods = goods
      this.current = goods[0].name
    })
    getSeller().then((seller) => {
      this.seller = seller
    })
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  components: {
    Cart
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  .goods
    display: flex
    position: absolute
    top: 0
    bottom: 48px
    width: 100%
    overflow: hidden

    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7

      .menu-item
        display: table
        height: 54px
        width: 56px
        line-height: 14px
        padding: 0 12px
        white-space: normal

        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right 2px
          background-size: 12px 12px
          background-repeat: no-repeat

          &.decrease
            bg-image('decrease_3')

          &.discount
            bg-image('discount_3')

          &.guarantee
            bg-image('guarantee_3')

          &.invoice
            bg-image('invoice_3')

          &.special
            bg-image('special_3')

        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px

    .foods-wrapper
      flex: 1

      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7

      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        border-1px(rgba(7, 17, 27, 0.1))

        &:last-child
          border-none()
          margin-bottom: 0

        .icon
          flex: 0 0 57px
          margin-right: 10px

        .content
          flex: 1

          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)

          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)

          .desc
            margin-bottom: 8px

          .extra
            &.count
              margin-right: 12px

          .price
            font-weight: 700
            line-height: 24px

            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)

            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)

    .cart-wrapper
      position: fixed
      left: 0
      bottom: 0
      z-index: 50
      height: 48px
      width: 100%
      background: #000
</style>
