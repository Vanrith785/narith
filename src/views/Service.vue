<template>
  <section class="container mt-5">
    <div class="text-center my-4">
      <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke:1px #4facfe;">Services</h1>
      <h2 class="position-relative text-uppercase text-secondary">My Service</h2>
    </div>
    <p class="lead text-center mb-5">
      I provide development, design, and hosting services focused on performance, usability, and security.
    </p>
    <div class="row text-center">
      <div class="col-lg-4" v-for="(service, i) in services" :key="i">
        <div class="card p-3 h-100">
          <div class="card-body">
            <i :class="service.icon" class="mb-3 display-4 text-primary"></i>
            <h4 class="card-title">{{ service.title }}</h4>
            <p class="card-text">{{ service.description }}</p>
            <router-link to="/service-detail" class="btn btn-sm btn-outline-primary">View details »</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Service',
  data() {
    return {
      services: [
        {
          title: 'Development',
          description: 'I build functional and high-quality web apps.',
          icon: 'fas fa-code'
        },
        {
          title: 'Design',
          description: 'User-centered design with attention to detail.',
          icon: 'fas fa-paint-brush'
        },
        {
          title: 'Hosting',
          description: 'Fast, secure and reliable hosting solutions.',
          icon: 'fas fa-server'
        }
      ]
    }
  }
}
</script>
