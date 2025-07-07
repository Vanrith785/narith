<template>
  <section class="container mt-5">
    <div class="text-center my-4">
      <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke:1px #00F2FE;">Programming</h1>
      <h2 class="position-relative text-uppercase text-secondary">My Skills</h2>
    </div>
    <p class="lead">
      I'm skilled in JavaScript, HTML, CSS, Vue.js, PHP, and Laravel. I build responsive interfaces and strong back-end systems.
    </p>
    <div class="row">
      <div class="col-md-6" v-for="(skill, index) in skills.slice(0, 3)" :key="index">
        <h6>{{ skill.name }} - {{ skill.percent }}%</h6>
        <div class="progress mb-3">
          <div class="progress-bar" :style="{ width: skill.percent + '%' }"></div>
        </div>
      </div>
      <div class="col-md-6" v-for="(skill, index) in skills.slice(3)" :key="index">
        <h6>{{ skill.name }} - {{ skill.percent }}%</h6>
        <div class="progress mb-3">
          <div class="progress-bar" :style="{ width: skill.percent + '%' }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skill',
  data() {
    return {
      skills: [
        { name: 'HTML', percent: 95 },
        { name: 'CSS', percent: 85 },
        { name: 'PHP', percent: 90 },
        { name: 'JavaScript', percent: 90 },
        { name: 'Vue JS', percent: 95 },
        { name: 'Laravel', percent: 85 }
      ]
    }
  }
}
</script>
