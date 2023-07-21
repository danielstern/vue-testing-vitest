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
  <Concerts 
    :items="items" 
  />
</template>