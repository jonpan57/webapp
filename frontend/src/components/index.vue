<template>
  <div class="index">
    <Header></Header>
    <Tabs class="tab-wrapper"></Tabs>
    <router-view/>
  </div>
</template>

<script>
import Header from 'components/header/index'
import Tabs from 'components/tabs/index'

export default {
  name: 'index',
  components: {
    Header,
    Tabs
  }
}
</script>

<style lang="stylus" scoped>
.tab-wrapper
  position :fixed
  top:136px
  left:0
  right:0
  bottom:0
</style>
