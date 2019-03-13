<template>
  <div id='reviews'>
    <h2>All Reviews</h2>
    <input type="text" v-model="search" placeholder="Search by plate" />
    <div class='single-review' v-for="review in filteredReviews">
      <h3>{{review.title | toUppercase}}</h3>
      <p>{{review.body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      reviews: [],
      search: '',
    }
  },
  methods: {
  },
  computed: {
    filteredReviews() {
      return this.reviews.filter(review => review.title.match(this.search));
    }
  },
  created() {
    this.$http.get('mongodb://localhost/thinkful-backend/api/')
    .then(data => this.reviews = data)
  },
  //Filters
  //augment the way data when its rendered on browser, but not in state
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  }
}
</script>

<style scoped>
  body {
    margin: 0;
  }

  #reviews {
    max-width: 80%;
    margin: 0 auto;
  }

  .single-review {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: #eee;
  }

</style>