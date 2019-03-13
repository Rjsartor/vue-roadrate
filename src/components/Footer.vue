<template>
  <footer>
    <p>{{creator}} {{title}}</p>
  </footer>

</template>

<script>
import {bus} from '../main';
export default {
  props: {
    creator: {
      type: String,
    },
    title: {
      type: String,
    }
  },
  data() {
    return {

    }
  },
  created() {
    bus.$on('titleChanged', (data) => {
      this.title = data
    })
  }
  
}
</script>

<style scoped>
  footer {
    background: #222;
    padding: 6px
  }

  p {
    color: lightgreen;
    text-align: center
  }
</style>

