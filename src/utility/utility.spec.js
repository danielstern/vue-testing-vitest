import { describe, it, expect } from "vitest"
import { adjustPrice } from "."

describe("get discounted price",()=>{
  for (let i = 0; i < 10000; i++) {
    it("should discount the price correctly",()=>{
      const originalprice = i
      const nextPrice = adjustPrice(originalprice)
      expect(nextPrice).toBeCloseTo(i * .9)
    })

  }
})