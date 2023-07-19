<script setup>
import { ref, defineProps } from 'vue';
import { adjustPrice, shouldShowBookingNotification } from '../utility'

import { 
  getWishlist, 
  // buyTicket
 } from '../services/concert-service'


defineProps({
  msg: String,
  items : Array
})

// const getWishlist = async () => {

// }

const wishlist = ref([])


// const buyTicket = ref(async() => {})

async function populateWishlist(){
  wishlist.value = await getWishlist()
}

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
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <div>
      <div v-if="shouldShowBookingNotification()">It's Monday, remember to have all booking requests in by 5:00pm.</div>
      <div v-for="item in items" :key="item.name">{{ item.name }} - ${{  adjustPrice(item.price) }}</div>
    </div>
  </div>
  <h2>
    Wishlist
  </h2>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <div>
      <div v-if="shouldShowBookingNotification()">It's Monday, remember to have all booking requests in by 5:00pm.</div>
      <div v-for="item in wishlist" :key="item.name">
        {{ item.name }} - ${{  adjustPrice(item.price) }}
        <!-- <button v-on:click="(_e)=>buyTicket(item)">Buy Now!</button> -->
      </div> 
    </div>
  </div>

</template>

<script>
// todo... if you import vitest this way, the app seems to not want to start

// }
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