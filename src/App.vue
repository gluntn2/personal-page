<template>
  <div id="app">
    <router-view class="main-view" />
    <div id="bg" />
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Nav from '@/components/Nav.vue'
export default Vue.extend({
  components: {
    Nav
  }
})
</script>

<style lang="sass">
  #app
    min-height: 100%
    height: 100%
  #bg
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    height: 100%
    width: 100%
    opacity: .2
    z-index: -1
    // background: url('./assets/img/chevron.png') repeat
  .header
    margin: 1.5rem 0
    font-weight: 900
    font-size: 1.4rem
    color: var(--secondary)
    padding: .3rem
    border-radius: .2rem
    margin-left: -.3rem
  .main-view
    position: relative
    margin-bottom: 3.5rem
    h1
      font-weight: 900
      margin-bottom: 1rem
      display: inline-block
      padding: .2rem
      font-size: 1.8rem
      margin-left: -.2rem
      color: var(--secondary)
</style>
