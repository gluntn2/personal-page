<template>
  <div class="main">
    <span class="intro">
      Hi there, I'm William.
      <fa-icon :icon="['far', 'hand-peace']" class="icon"/>
    </span>
    <span class="about">
      An unconventional full-stack developer also working in computer graphics and linguistics.
    </span>
    <span class="about">
      <span class="funny" title="Dreams are not guaranteed, unfortunately">Creating dreams</span> with <span class="marked">Vue</span> and <span class="marked">JavaScript</span>.
    </span>
    <button class="is-invisible button">
      <fa-icon :icon="['far', 'file-alt']" class="icon"/>
      Download CV
    </button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'Home'
  })
</script>

<style scoped lang="sass">
  .main
    position: absolute
    top: 45%
    transform: translateY(-50%)
    padding: 1rem
    letter-spacing: 0.015rem
    line-height: 2
  .intro
    display: block
    font-style: italic
    margin: .5rem 0 1rem 0
    font-size: 1rem
    color: var(--secondary)
    .icon
      margin: 0
      margin-left: .5rem
  .about
    font-size: 1.3rem
    font-weight: 900
    display: block
    margin: 1.5rem 0
    color: var(--secondary)
    .funny
      border-bottom: 1px dashed var(--secondary)
  .button
    font-size: .8rem
    padding: .8rem 1rem
    text-transform: uppercase
    background: var(--secondary)
    color: var(--primary)
</style>