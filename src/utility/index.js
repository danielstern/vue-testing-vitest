export const discounter = {
	getDiscountedValue (price, discount = 0.1) {
		const nextPrice = price - (price * discount)
		return nextPrice
	
	}
}
export const adjustPrice = (price) => {

	if (typeof price !== 'number') {
		throw new Error("Must be a number.")
	}
	
	return discounter.getDiscountedValue(price).toFixed(2)
}

// has an output dependency based on date
export const shouldShowBookingNotification = () => {

	if (new Date().getDay() === 1 ) {
		return true
	}
	return false
}