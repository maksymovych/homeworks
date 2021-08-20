//Task1
const searchCandidatesByPhoneNumber = phone => {
	const phoneToNumbers = (number) => {
		let newNumber = ''

		for (let i = 0; i < number.length; i++) {
			const n = number[i]
			if (n.match(/\d/)) {
				newNumber += n
			}
		}
		return newNumber
	}

	const enteredNumber = phoneToNumbers(phone.toString())
	console.log(enteredNumber)

	if (enteredNumber.length < 2 || enteredNumber.length > 11) {

		return 'Enter available number'
	}
	const result = condidateArr.filter(item => phoneToNumbers(item.phone).includes(enteredNumber))
	console.log(result
		.map(item => item.phone))
	return result
}

searchCandidatesByPhoneNumber(+40)