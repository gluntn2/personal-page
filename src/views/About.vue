<template>
  <div class="main">
    <h1>
      <fa-icon :icon="['far', 'question-circle']" class="icon"/>
      About Me
    </h1>
    <div class="about">
      My name is William Slettvold Østensen, I'm {{ age }} years old. Currently living in Bodø, Norway. <br />
      Open for work both on location and remotely.
    </div>
    <div class="header">
      <fa-icon :icon="['far', 'lightbulb']" class="icon"/> Education
    </div>
    <div class="about">
      From 2018 to 2021 I studied <span class="marked">Computer Engineering</span> at University of Tromsø.
      Starting in 2020, I will be pursuing a Bachelor's degree in <span class="marked">Linguistics</span> at University of Bergen.
    </div>
    <div class="about">
      I chose to specialize in <span class="marked">game development</span> during my engineering degree, due to my interest in computer graphics, and video games
      in general.
    </div>
    <div class="about">
      Because of my curiosity of languages, I also chose to pursue linguistics - both to rub my curiosity,
      and because of the <span class="marked">inherent applications linguistics</span> have in software development 
      (speech analysis, natural language processing etc.) 
    </div>
    <div class="header">
      <fa-icon :icon="['far', 'object-group']" class="icon" />
      Work
    </div>
    <div class="about">
      Between 2016 and 2017 I worked a variety of minor positions at preschools and a graveyard, mainly assisting daily tasks.
      I had my first experience with <span class="marked">professional software development</span> at DX from 2017 to 2019, here I've mostly developed
      in <span class="marked">Qt</span> and Vue, developing <span class="marked">front-end systems that are still in use today</span>.
      Currently, I work as a salesman at Teknikmagasinet.
    </div>
    <div class="button is-invisible">
      <a href="mailto:wost96@pm.me">
        <fa-icon :icon="['far', 'envelope']" class="icon"/> 
      Contact me here
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'About',
  computed: {
    age () {
      return ~~(((Date.now() - (+new Date("1996-02-10"))) / 31557600000))
    }
  }
})
</script>

<style lang="sass" scoped>
  .main
    padding: 1rem
  .about
    line-height: 2
    letter-spacing: 0.015rem
    font-size: .8rem
    margin: .5rem 0
    color: var(--secondary)
  .button
    margin: 1rem 0 1.25rem 0 
    padding: 0
    display: block
    a
      font-size: 1.1rem
      font-weight: 700
      display: block
      padding: .5rem
      color: var(--primary)
      background: var(--secondary)
      border-radius: .2rem
      text-decoration: none
</style>