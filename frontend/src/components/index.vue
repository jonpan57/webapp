<template>
  <div class="index">
    <myHeader/>
    <tabs/>
  </div>
</template>

<script>
import myHeader from '@/components/header/index'
import tabs from '@/components/tabs/index'

export default {
  name: 'index',
  components: {
    myHeader,
    tabs
  }
}
</script>

<style>

</style>
