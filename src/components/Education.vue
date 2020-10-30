<template>
  <section id="education" class="resume-section p-3 p-lg-5 d-flex align-items-center">
    <div class="w-100">
      <h2 class="mb-5">Education</h2>
      <div
        class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
        v-for="(education, index) in educationList"
        :key="index"
      >
        <div class="resume-content">
          <h3 class="mb-0">{{ education.school }}</h3>
          <div class="subheading mb-3">{{ education.degree }}</div>
          <div>{{ education.program }}</div>
        </div>
        <div class="resume-date text-md-right">
          <span
            class="text-primary"
            v-for="(date, index) in education.dates"
            :key="index"
          >{{ date.start }} - {{ date.end }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      educationList: [
        {
          school: "University of Havana",
          degree: "Bachelor of Science",
          program: "Industrial and Organizational Psychology",
          dates: [
            {
              start: "2010",
              end: "2015"
            }
          ],
        },
        {
          school: "Full Stack Academy",
          degree: "",
          program: "Software Engineer Immersive Program",
          dates: [
            {
              start: "Jan 2018",
              end: "July 2018"
            }
          ],
        }
      ]
    };
  }
};
</script>