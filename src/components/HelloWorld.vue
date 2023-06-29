<script setup>
import { ref } from 'vue'
import { describe, it, expect } from "vitest"
import { createApp } from 'vue';
import { renderToString } from '@vue/server-renderer';


defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->
  <h1>
    Musician Portal
  </h1>
  <button>
    Concertszz
  </button>

  <!-- <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

<script>
if (import.meta.vitest) {
	it("should not change (snapshot test)",async ()=>{
		const app = createApp(module.exports.default);
		expect(await renderToString(app)).toMatchSnapshot();
	})
}
</script>