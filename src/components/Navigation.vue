<template>
  <b-navbar toggleable="lg" type="dark" :class="`bg-primary fixed-top`" :id="`sideNav`">
    <b-navbar-brand to="/">
      <span class="d-block d-lg-none">{{ name }}</span>
      <span class="d-none d-lg-block">
        <img
          class="img-fluid img-profile rounded-circle mx-auto mb-2"
          :src="`${publicPath}images/profile.jpg`"
          alt="Rotsen Acob"
        />
      </span>
    </b-navbar-brand>
    <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>
    <b-collapse :id="`navbarSupportedContent`" is-nav>
      <b-navbar-nav>
        <b-nav-item
          v-for="(navigation, index) in navigationList"
          :key="index"
          class="js-scroll-trigger"
          :href="navigation.url"
          exact
          exact-active-class="active"
        >{{ navigation.title }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      name: "Clarence Taylor",
      publicPath: process.env.BASE_URL,
      navigationList: [
        {
          title: "About",
          url: "#about"
        },
        {
          title: "Experience",
          url: "#experience"
        },
        {
          title: "Education",
          url: "#education"
        },
        {
          title: "Skills",
          url: "#skills"
        },
        {
          title: "Interests",
          url: "#interests"
        },
        {
          title: "Awards",
          url: "#awards"
        }
      ]
    };
  }
};
</script>