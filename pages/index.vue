<template>
  <div class="uk-main">
    <div class="uk-section">
      <div class="uk-container">
        <div class="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
          <div v-for="(post, index) in posts" v-bind:key="index">
            <div class="uk-card uk-card-default uk-margin-medium-bottom">
              <div class="uk-card-header">
                <nuxt-link class="uk-card-title uk-text-primary" :to="{ name: 'id', params: { id: post.id } }">
                  " {{ post.title }} "
                </nuxt-link>
              </div>
              <div class="uk-card-body">
                <p>{{ post.body }}</p>
                <div class="uk-text-success">
                  amount comments: {{ post.comments.length }}
                </div>
              </div>
              <div class="uk-card-footer">
                <nuxt-link :to="{ name: 'userid', params: { userid: post.userId } }">
                  {{ post.user.name }}
                </nuxt-link>
              </div>
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
    asyncData({ req, params }) {
      return axios.get('https://jsonplaceholder.typicode.com/posts/?_expand=user&_embed=comments')
        .then((res) => {
          return { posts: res.data }
        })
    },
    head: {
      title: 'POSTS',
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/css/uikit.min.css' }
      ]
    },
  }
</script>
