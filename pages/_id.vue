
<template>
  <div>
    <div class="uk-section">
      <div class="uk-container">
        <div class="uk-card uk-card-default uk-margin-medium-bottom">
          <h1 class="uk-card-header uk-text-primary">"{{ post.title }}"</h1>
          <div class="uk-card-body">
            <p>{{ post.body }}</p>
            <br>
            <strong class="uk-text-success">Name: "{{ post.user.name }}"
            </strong>
            <br>
            <small class="uk-text-success">Amount comments: {{ post.comments.length }}</small>
          </div>
          <div class="uk-card-footer">
            <nuxt-link class="uk-button uk-button-text" to="/">Back to the list</nuxt-link>
          </div>
        </div>
        <div class="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
          <div v-for="comment in post.comments" v-bind:key="comment.id" >
            <div class="uk-card uk-card-default uk-margin-medium-bottom">
              <p class="uk-card-body">{{ comment.body }}</p>
              <p class="uk-text-success uk-card-body">Name: "{{ comment.name }}"</p>
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
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}?_expand=user&_embed=comments`)
    return { post: data }
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

