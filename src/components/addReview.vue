<template>
  <div id="add-review">
    <h2>Add a review for a driver</h2>
    <form>
      <label>Plate number: </label>
      <input type="text" v-model.lazy="reviews.plate" required>
      <div id="ratings">
        <p>Rating: </p>
        <label>Great</label>
        <input type="checkbox" value ="Great" v-model="reviews.ratings"/>
        <label>Good</label>
        <input type="checkbox" value ="Good" v-model="reviews.ratings"/>
        <label>Bad</label>
        <input type="checkbox" value ="Bad" v-model="reviews.ratings"/>
        <label>Horrible</label>
        <input type="checkbox" value ="Horrible" v-model="reviews.ratings"/>
      </div>
      <label>Content: </label>
      <textarea v-model.lazy="reviews.content"></textarea>
      <button v-on:click.prevent="post">Submit Review</button>
    </form>
    <div v-if="submitted">
      <h3>Your review has been submitted</h3>
    </div>
    <div id="preview">
      <h3>Preview Post</h3>
      <p>Review plate: {{reviews.plate}}</p>
    
      <p>Rating: <span v-for="rating in reviews.ratings">{{rating}}</span></p>
      <p>Review content: </p>
      <p>{{reviews.content}}</p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      reviews: {
        plate: '',
        content: '',
        ratings: [],
      },
      submitted: false,
    }
  },
  methods: {
    post() {
      //to call the request use $http
      //set up database
      this.$http.post('localhost/thinkful-backend/api/reviews', {
        plate: this.plate,
        content: this.content,
        rating: this.rating,
      })
      .then(data => {console.log(data);
      this.submitted = true;
      });
    }
  }
}

</script>

<style scoped>
#add-review *{
    box-sizing: border-box;
}
#add-review{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#ratings input {
  display: inline-block;
  margin-right: 10px
}
#ratings label {
  display: inline-block;
}
#preview li {
  list-style: none;
}
</style>