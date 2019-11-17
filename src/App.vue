<template>
  <div id="app">
    <Navigation />
    <b-container class="p-0" fluid>
      <About />
      <Border />
      <Experience />
      <Border />
      <Education />
      <Border />
      <Skills />
      <Border />
      <Interests />
      <Border />
      <Awards />
    </b-container>
  </div>
</template>

<script>
import smoothScroll from 'smooth-scroll';

import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Interests from "@/components/Interests";
import Awards from "@/components/Awards";
import Navigation from "@/components/Navigation";
import Border from "@/components/Border";

export default {
  name: "app",
  components: {
    About,
    Experience,
    Education,
    Skills,
    Interests,
    Awards,
    Navigation,
    Border
  },
  created: function() {
    var scroll = new smoothScroll('a[href*="#"]', {
      updateURL: false
    })
  }
};
</script>
