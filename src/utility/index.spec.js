import { describe, it, expect, bench, vi, spyOn } from "vitest"
import { adjustPrice, discounter } from "."

describe("adjust price", () => {
	// bench(
	it("should apply the discount", () => {
		expect(adjustPrice(100)).toBeCloseTo(90)
		expect(adjustPrice(500)).toBeCloseTo(450)
		expect(()=>{adjustPrice("500")}).toThrow()
	})

	it ("should call get discount", ()=>{
		const spy = vi.spyOn(discounter, "getDiscountedValue")
		const value = 22.2320
		adjustPrice(value)
		expect(spy).toHaveBeenCalledOnce()
	})
})