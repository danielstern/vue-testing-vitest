import { describe, it, expect } from "vitest"
import App from './App.vue'
import { createApp } from 'vue';
import { renderToString } from '@vue/server-renderer';

describe("the main page", ()=>{
	it("should not change (Snapshot Test)",async ()=>{
		const app = createApp(App);
		expect(await renderToString(app)).toMatchSnapshot();
	})
})