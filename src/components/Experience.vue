<template>
  <section id="experience" class="resume-section p-3 p-lg-5 d-flex align-items-center">
    <div class="w-100">
      <h2 class="mb-5">Experience</h2>
      <div
        class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
        v-for="(experience, index) in experienceList"
        :key="index"
      >
        <div class="resume-content">
          <h3 class="mb-0">{{ experience.position }}</h3>
          <div class="subheading mb-3">{{ experience.company }}</div>
          <p class="mb-0">{{ experience.summary }}</p>
        </div>
        <div class="resume-date text-md-right">
          <span
            class="text-primary"
            v-for="(date, index) in experience.dates"
            :key="index"
          >{{ date.start }} - {{ date.end }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
      experienceList: [
        {
          position: "Front-End Software Developer",
          company: "Fitch Solutions",
          summary:
            "Establish appropriate office hours to deliver effective training to cross-functional team members for seamless on-boarding onto web-client codebase. Oversee the development and deployment of roadmap deliverables within scope and timelines through collaboration with stakeholders, team members, and UX resources.",
          dates: [
            {
              start: "Nov 2019",
              end: "Present"
            }
          ]
        },
        {
          position: "Front-End Software Developer",
          company: "Randstad Technologies US",
          summary:
            "Maximized client/user experience by maintaining the app. Participated in scrum ceremonies like daily scrum, grooming sessions, sprint planning, and sprint retrospective.",
          dates: [
            {
              start: "Nov 2018",
              end: "Nov 2019"
            }
          ]
        },
        {
          position: "Front-End Software Developer ",
          company: "AdaptiGroup LLC",
          summary:
            "Managed and streamlined the project by gathering all visual and functional requirements. Increased browser support after a rewrite of customer-targeted marketing emails and turned the website into a SPA.",
          dates: [
            {
              start: "April 2018",
              end: "Nov 2018"
            }
          ]
        },
      ]
    };
  }
};
</script>