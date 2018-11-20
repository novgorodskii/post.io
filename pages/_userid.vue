<template>
  <div class="uk-margin-medium-top">
    <div class="uk-container">
      <div class="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
        <div v-for="(post, index) in posts" v-bind:key="index">
          <div class="uk-card uk-card-default uk-margin-medium-bottom">
            <div class="uk-card-body">
              <p>{{post.body}}</p>
            </div>
            <div class="uk-card-footer">
              <nuxt-link class="uk-button uk-button-text" to="/">Back to the list</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>   
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    const { data } = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${params.userid}`)
    return { posts: data }
  },
  head() {
    return {
      title: this.post.title
    }
  },
  head: {
    title: 'POSTS',
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/css/uikit.min.css' }
    ]
  },
}
</script>
