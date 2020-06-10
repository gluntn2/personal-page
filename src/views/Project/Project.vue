<template>
  <div class="main">
    <h1>Header for project {{ $route.params.id }}</h1>
    <router-link to="/projects" class="back button">
      Go back
    </router-link>
    <div class="image-series">
      <div class="image"></div>
      <div class="image"></div>
    </div>
    <div class="info">
      <ul>
        <li>JavaScript</li>
        <li>Vue</li>
      </ul>
      <div class="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatum inventore voluptatem! At sapiente reiciendis magnam facilis, veniam non maiores quaerat ratione fugit suscipit, aperiam architecto quis sequi aut consectetur.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Project'
})
</script>

<style lang="sass" scoped>
  .main
    padding: 1rem
    overflow: hidden
    color: var(--secondary)
  .back
    display: inline-block
    text-decoration: none
    font-size: .8rem
    margin-bottom: 1rem
  .image-series
    display: block
    overflow-y: hidden
    width: 500%
    .image
      display: inline-block
      height: 9rem
      width: 16rem
      background: var(--secondary)
      margin-bottom: 1rem
      margin-right: 1rem
      border-radius: .2rem
  .info
    ul li
      display: inline-block
      margin-right: .5rem
      font-size: .7rem
    .desc
      margin: 1rem 0
      line-height: 1.5rem
      font-size: 1.2rem
      font-weight: 500
</style>