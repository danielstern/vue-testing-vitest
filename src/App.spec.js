import { describe, expect, it } from "vitest"
import App from "./App.vue"
import { createApp } from "vue"
import { renderToString } from "@vue/server-renderer"

describe("the application", ()=>{
  it("should not regress (snapshot test)",async ()=>{
    const app = createApp(App)
    const string = await renderToString(app)
    expect(string).toMatchSnapshot()
  })
})