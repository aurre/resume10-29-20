<template>
  <section id="about" class="resume-section p-3 p-lg-5 d-flex align-items-center">
    <div class="w-100">
      <h1 class="mb-0">
        {{ name.first }}
        <span class="text-primary">{{ name.last }}</span>
      </h1>
      <div class="subheading mb-5">
        {{ address.city }}, {{ address.state }} &middot; {{ telephone }} &middot;
        <a :href="'mailto:' + email">{{ email }}</a>
      </div>
      <p
        class="lead mb-5"
      >{{ aboutMe }}</p>
      <div class="social-icons">
        <a :href="social.url" v-for="(social, index) in socialList" :key="index">
          <font-awesome-icon :icon="['fab', social.icon]"></font-awesome-icon>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  props: {
    name: Array
  },
  data() {
    return {
      address: {
        city: "Chicgo",
        state: "IL",
      },
      telephone: "(312) 429-6926‬",
      email: "aurrecochearaysa@gmail.com",
      socialList: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/raysa-aurrecochea/",
          icon: "linkedin"
        },
        {
          name: 'Github',
          url: "https://github.com/aurre",
          icon: "github",
        }
      ],
      aboutMe: "Innovative and technically-sophisticated professional with a proven capacity to build quality websites and applications with HTML, CSS, and JavaScript. Proficient in NodeJS, HTML, CSS, and server-scripting with strong knowledge of VueJS, JavaScript, and Source Control. Skilled at conveying complex technical information to a variety of professional people in a clear and understandable manner. Demonstrated success improving client satisfaction and experience through implementation of brand new features into the platform."
    };
  }
};
</script>