<template>
  <nav class="navbar navbar-expand-lg bg-black bg-gradient fixed-top p-3">
    <div class="container-fluid text-light">
      <router-link to="/" class="navbar-brand">Chong | Portfolio</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="link in navLinks" :key="link.name">
            <router-link :to="link.path" class="nav-link text-light">{{ link.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navLinks: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skill', path: '/skill' },
        { name: 'Service', path: '/service' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
      ]
    }
  }
}
</script>
