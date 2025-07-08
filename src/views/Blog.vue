<template>
  <section class="container mt-5">
    <div class="text-center my-4">
      <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke:1px #00f2fe;">Blog</h1>
      <h2 class="position-relative text-uppercase text-secondary">Latest Articles</h2>
    </div>
    <p class="lead text-center">
      I write about web development, Vue.js, Laravel, design principles, and more.
    </p>
    <div class="row">
      <div class="col-md-3" v-for="(post, i) in blogPosts" :key="i">
        <div class="card h-100">
          <img :src="post.img" class="card-img-top" alt="Blog Image">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.author }}</p>
          </div>
          <div class="card-footer">
            <router-link :to="post.link" class="btn btn-sm btn-outline-info">Read More</router-link>
            <small class="text-muted ms-2">{{ post.updated }}</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      blogPosts: [
        {
          title: "A Lover's Complaint",
          author: 'William Shakespeare',
          img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gamers-logo-for-youtube-channel-design-template-7796670c7be8103f644d121c9514b5c3_screen.jpg?ts=1740305415',
          link: '/blog/lovers-complaint',
          updated: '3 mins ago'
        },
        {
          title: 'Spring and Winter ii',
          author: 'William Shakespeare',
          img: 'https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/24/52/2b/24522bef-5a4c-59c0-f3f9-b93b612c76a2/source/256x256bb.jpg',
          link: '/blog/spring-winter-ii',
          updated: '3 mins ago'
        },
        {
          title: 'Spring and Winter i',
          author: 'William Shakespeare',
          img: 'https://play-lh.googleusercontent.com/YtOzX0WndUwA_hJ687iJ6dEFjg7i3iPSQd7g8yIfk9QEmran09HUUZaSipditPizYzQ=w240-h480-rw',
          link: '/blog/spring-winter-i',
          updated: '3 mins ago'
        },
        {
          title: 'Spring',
          author: 'William Shakespeare',
          img: 'https://play-lh.googleusercontent.com/ageeNxH4--9pU1iY7M_7YqCD-cDbL9CoQdXSaEbhCjXQ9SwNau-bC73Z-YGh81xwQhqP=w240-h480-rw',
          link: '/blog/spring',
          updated: '3 mins ago'
        }
      ]
    }
  }
}
</script>
