import showReviews from '../components/showReviews.vue';
import addReview from '../components/addReview.vue';


export default [
  {
    path: '/', 
    component: showReviews
  },
  {
    path: '/add',
    component: addReview,
  },
]