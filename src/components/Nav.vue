<template>
<nav class="nav">
  <ul class="links">
    <li>
      <Link :to="'/'" :name="'Home'" :icon="'hand-peace'"/>
    </li>
    <li>
      <Link :to="'/about'" :name="'About'" :icon="'question-circle'" />
    </li>
    <li>
      <Link :to="'/projects'" :name="'Projects'" :icon="'file-code'"/>
    </li>
  </ul>
</nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Link from '@/components/Link.vue'
export default Vue.extend({
  name: "Nav",
  components: {
    Link
  }
})
</script>

<style lang="sass" scoped>
  ul
    position: fixed
    bottom: 0
    left: 0
    right: 0
    display: flex
    width: 100%
    flex-direction: row
    z-index: 1
    li
      font-size: .8rem
      flex: 1
      text-align: center
</style>