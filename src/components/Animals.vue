<template>
 <div id='animals'>
   <ul>
     <li v-for="animal in animals" v-on:click="animal.show = !animal.show">
      <h2>{{animal.name}}</h2>
      <h3 v-show="animal.show">{{animal.type}}</h3>
     </li>
   </ul>
   <button v-on:click="deleteAnimal">Delete Animal</button>
 </div>
</template>

<script>
export default {
  //validate the type of prop 
  props: {
    animals: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
    }
  },
  methods: {
    deleteAnimal() {
      this.animals.pop();
    }
  }

}
</script>

<style scoped>
  div {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
  }

</style>