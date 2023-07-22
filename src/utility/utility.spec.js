import { describe, it, expect } from "vitest"
import { adjustPrice } from "."

describe("get discounted price",()=>{
  it("should discount the price correctly",()=>{
    const originalprice = 1.00
    const nextPrice = adjustPrice(originalprice)
    expect(nextPrice).toBeCloseTo(0.90)
  })
})