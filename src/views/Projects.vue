<template>
  <div class="main">
    <h1>
      <fa-icon :icon="['far', 'file-code']" class="icon" />
      Projects
    </h1>
    <div class="about">
      A list of various projects I've been involved in. Feel free to click
      in on the project to read more.
    </div>
    <div class="item">
      <div class="header">
        Haskell projects
        </div>
      <div class="image-series">
        <div class="image"></div>
        <div class="image"></div>
        <div class="image"></div>
      </div>
      <div class="info">
        <ul>
          <li>Haskell</li>
        </ul>
        <div class="desc">
          A variety of Haskell projects I've been working on to better my knowledge of Haskell, and functional programming
          in general. Not every project has any real usage, but just used for my own sake to teach myself new concepts.
        </div>
      </div>
    </div>

    <div class="item">
      <div class="header">
        Lorem Ipsum
        </div>
      <div class="image-series">
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Projects'  
})
</script>

<style lang="sass" scoped>
  .main
    padding: 1rem
  .about
    margin-bottom: 1rem
    color: var(--secondary)
    line-height: 2
    font-size: .8rem
  .item
    padding: .5rem 1.5rem
    background: rgb(#333, .05)
    margin-bottom: 1rem
    border-radius: .2rem
    color: var(--secondary)
    box-shadow: 2px 2px 0px 0px rgba(#333, .2)
    overflow: hidden
    .github
      float: right
    .image-series
      display: flex
      overflow-x: scroll
      &::-webkit-scrollbar
        display: none
      .image
        display: inline-block
        min-height: 7rem
        min-width: 12.46rem
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
      line-height: 2
      font-weight: 500
</style>