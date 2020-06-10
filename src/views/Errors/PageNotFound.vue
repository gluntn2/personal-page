<template>
  <div class="main">
      <h1>Sorry, no page here!<br>(╯°□°）╯︵ ┻━┻</h1>
      <div class="about">
        I couldn't find the page you were looking for, unfortunately.
      </div>
      <router-link class="button" to="/">
        Go back
      </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PageNotFound'
})
</script>

<style lang="sass" scoped>
  .main
    padding: 1rem
    position: absolute
    top: 45%
    transform: translateY(-50%)
    text-align: center
    color: var(--secondary)
    line-height: 1.5
  .button
    margin-top: 1rem
    text-decoration: none
</style>