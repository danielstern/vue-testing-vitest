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