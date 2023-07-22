<script setup>
import { ref } from 'vue';
import { getConcerts } from './services/concert-service';
import Concerts from './components/Concerts.vue'
const items = ref([]);
(async function(){
  items.value = await getConcerts()
})()

</script>



<template>
  <!-- <h1>Portal</h1> -->
  <h1>Musician's World</h1>
  <Concerts 
    :items="items" 
  />
</template>