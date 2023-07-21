import delay from "delay"

export const getConcerts = async () => {
	await delay(1000)

	return [
		{ name: "Maximum Mozart", price: 99.50 },
		{ name: "Sensational Schubert", price: 105.62 },
		{ name: "Beethoven on Ice", price: 40.59 }
	]
}

export const getWishlist = async () => {
	await delay(1000)

	return [
		{ name: "Bach to the Fugue-ture", price: 105.50 }
	]
}

export const buyFn = async () => {
	await delay(1000)
	return true
}
export const tickerBuyer = (buyFn) => ({

	buyTicket: async (ticket) => {

		console.info("purchasing ticket", ticket)
		try {
			buyFn()
			alert("Purchased ticket")
		} catch (e) {}
		return true
		
	}
})

if (import.meta.vitest) {

	const { expect, it, vi } = import.meta.vitest
	it("should get the concerts", async function () {
		expect((await getConcerts()).length).toBe(3)
	})

	it("should purchase the ticket", async () => {

		const mock = vi.fn().mockImplementation(buyFn)
		const buyer = tickerBuyer(mock)
		const ticket = {name:"Falstaff", price: 100, id:"TICKET_001"}
		mock.mockImplementationOnce(ticket)
		buyer.buyTicket(ticket)
		expect(mock).toHaveBeenCalledTimes(1)


	})
}

