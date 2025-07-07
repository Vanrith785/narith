<template>
  <footer class="bg-black text-white mt-5 py-4">
    <div class="text-center">
      <p>© 2025 Pich, Portfolio</p>
      <nav class="nav justify-content-center">
        <router-link v-for="link in navLinks" :key="link.name" :to="link.path" class="nav-link text-white px-2">
          {{ link.name }}
        </router-link>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
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
