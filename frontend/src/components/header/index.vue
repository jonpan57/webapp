<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
      </div>
      <div class="description">
        {{seller.description}}
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script>
import {getSeller} from 'api'

export default {
  data () {
    return {
      seller: {}
    }
  },
  created () {
    getSeller().then((seller) => {
      this.seller = seller
    })
  }
}
</script>

<style>

</style>
