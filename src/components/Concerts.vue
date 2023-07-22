<script setup>
import { ref } from 'vue';
import { adjustPrice, shouldShowBookingNotification } from '../utility'

import { 
buyFn,
  getWishlist, tickerBuyer, 
 } from '../services/concert-service'


defineProps({
  msg: String,
  items : Array
})

const wishlist = ref([])

async function populateWishlist(){
  wishlist.value = await getWishlist()
}

const buyer = tickerBuyer(buyFn)

const buyTicket = ref(()=>{
  buyer.buyTicket()
  

})

populateWishlist()

</script>

<template>
  <h1>
    Musician Zone
  </h1>
  <button>
    Concerts
  </button>
  <h2>
    Your Concerts
  </h2>
  <!-- <h3> -->
    <!-- The current time is {{new Date().toLocaleDateString()}} -->
  <!-- </h3> -->
  <div>
    <div>
      <div v-if="shouldShowBookingNotification()">It's Monday, remember to have all booking requests in by 5:00pm.</div>
      <div v-for="item in items" :key="item.name">{{ item.name }} - ${{  adjustPrice(item.price) }}</div>
    </div>
  </div>
  <h2>
    Wishlist
  </h2>
  <div>
    <div>
      <div v-if="shouldShowBookingNotification()">It's Monday, remember to have all booking requests in by 5:00pm.</div>
      <div v-for="item in wishlist" :key="item.name">
        {{ item.name }} - ${{  adjustPrice(item.price) }}
        <button v-on:click="(_e)=>buyTicket(item)">Buy Now!</button>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
};
</script>