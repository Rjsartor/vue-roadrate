<template>
  <div>
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import addReview from './components/addReview.vue';
import showReviews from './components/showReviews.vue';
import navbar from './components/navbar.vue';


export default {
  components: {
    'add-review': addReview,
    'show-reviews': showReviews,
    'app-navbar': navbar,
  },
  data () {
    return {
    }
  },
  methods: {
    updateTitle(updatedTitle) {
      this.title = updatedTitle
    }
  }
}
</script>

<style scoped>
  body {
    margin: 0;
  }

</style>
