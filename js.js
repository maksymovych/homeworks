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

	if (enteredNumber.length < 2 || enteredNumber.length > 11) {

		return 'Enter available number'
	}
	const result = condidateArr.filter(item => phoneToNumbers(item.phone).includes(enteredNumber))
	return result
}

//Task2
const getCandidateById = id => {

	const formatData = (inputStr) => {
		const inputArr = inputStr.split('-')
		let result = `${inputArr[2].slice(0, 2)}/${inputArr[1]}/${inputArr[0]}`
		return result
	}

	condidateArr.some(item => {
		if (item._id === id) {
			const result = { ...item, registered: formatData(item.registered) }
			console.log(result)
			return result
		}
		return 'Id is not exist'
	})

}
