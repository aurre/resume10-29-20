<template>
  <section id="about" class="resume-section p-3 p-lg-5 d-flex align-items-center">
    <div class="w-100">
      <h1 class="mb-0">{{ details.name.first }} 
        <span class="text-primary">{{ details.name.last }}</span>
      </h1>
      <div class="subheading mb-5">
        {{ details.address.street }} &middot; {{ details.address.town }}, {{ details.address.state }} {{ details.address.zip }} &middot; {{ details.telephone }} &middot; <a :href="details.email">{{ details.email }}</a>
      </div>
      <p class="lead mb-5">
        I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
      </p>
      <div class="social-icons">
        <a :href="social.link" v-for="(social, index) in socialList" :key="index">
          <font-awesome-icon :icon="['fab', social.icon]"></font-awesome-icon>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      details: {
        name: {
          first: 'Clarence',
          last: 'Taylor'
          },
        address: {
          street: '3542 Berry Street',
          town: 'Cheyenne Wells',
          state: 'CO',
          zip: '80810'
        },
        telephone: '(317) 585-8468',
        email: 'name@email.com'
      },
      socialList: [
        {
          "name": "LinkedIn",
          "url": "#",
          "icon": "linkedin"
        },
        {
          "name": "GitHub",
          "url": "#",
          "icon": "github"
        },
        {
          "name": "Twitter",
          "url": "#",
          "icon": "twitter"
        },
        {
          "name": "Facebook",
          "url": "#",
          "icon": "facebook"
        }
      ]
    }
  }
}
</script>