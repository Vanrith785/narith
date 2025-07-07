<template>
  <section class="container mt-5">
    <div class="text-center my-4">
      <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke:1px #1488CC;">Contact</h1>
      <h2 class="position-relative text-uppercase text-secondary">Contact Me</h2>
    </div>
    <p class="lead text-center">
      If you'd like to get in touch with me, fill out the form below.
    </p>
    <form class="row g-3">
      <div class="col-md-6">
        <label for="fullname" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="fullname" v-model="form.fullname" placeholder="Your full name">
      </div>
      <div class="col-md-6">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="form.email" placeholder="Your email">
      </div>
      <div class="col-12">
        <label for="subject" class="form-label">Subject</label>
        <input type="text" class="form-control" id="subject" v-model="form.subject" placeholder="Subject">
      </div>
      <div class="col-12">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" v-model="form.message" rows="3" placeholder="Message"></textarea>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-outline-primary">Submit</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        fullname: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>
