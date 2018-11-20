import Vuex from 'vuex';
import * as axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
    },
    getters: {
      posts(state) {
        return state.posts
      }
    },
    mutations: {
      getPosts (state, posts) {
        state.posts = posts;
      }
    },
    actions: {
      async getPosts (context) {
        const reg = await axios.get('https://jsonplaceholder.typicode.com/posts');
        context.commit('getPosts', reg.data);
      }
    }
  });
};

export default createStore