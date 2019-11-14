<template>
  <div class="cart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <span class="icon-shopping_cart"></span>
          </div>
        </div>
        <div class="price">￥0</div>
        <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
  .cart
    .content
      display: flex
      background: #141d27

      .content-left
        flex: 1

        .logo-wrapper
          display: inline-block
          position: relative
          top: -10px
          margin 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          vertical-align: top
          border-radius: 50%
          background: #141d27

          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            text-align center
            background: #2b343c

            .icon-shopping_cart
              line-height: 44px
              font-size: 24px
              color: #80858a

        .price
          display: inline-block
          vertical-align :top
          line-height :24px
          color:rgba(255,255,255,0.4)
          margin-top :12px
          padding-right :12px
          box-sizing :border-box
          border-right :1px solid rgba(255,255,255,0.1)
          font-size :16px
          font-weight :700

        .desc
          display: inline-block
          vertical-align :top
          line-height :24px
          margin :12px 0 0 12px
          font-size :10px
          color:rgba(255,255,255,0.4)

      .content-right
        flex: 0 0 105px
        width: 105px

</style>
