<template>
<div class="link">
  <router-link :to="to">
    <fa-icon :icon="['far', icon]" class="icon"/>
    <div class="name">{{ name }}</div>
  </router-link>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: String,
    name: String,
    icon: String
  }
})
</script>

<style lang="sass" scoped>
  .link
    position: relative
    .icon
      margin: 0
      margin-bottom: .2rem
    a
      padding: 1.25rem 1rem
      display: block
      text-align: center
      text-decoration: none
      background: var(--secondary)
      color: var(--primary)
      transition: .2s color, .2s background
      &.router-link-exact-active
        font-weight: 900
        background: var(--primary)
        color: var(--secondary)

</style>