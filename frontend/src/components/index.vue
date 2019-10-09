<template>
  <div class="index">
    <Header/>
    <Tabs/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/header/index'
import Tabs from '@/components/tabs/index'

export default {
  name: 'index',
  components: {
    Header,
    Tabs
  }
}
</script>

<style>

</style>
