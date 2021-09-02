//Task1
const searchCandidatesByPhoneNumber = phone => {
	const phoneToNumbers = (number) => {
		let newNumber = ''

		Array.from(number).forEach(item=>{
			newNumber += item.match(/\d/) ? item : ''
		})
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

	const candidate = condidateArr.find(item => item._id === id)
		
	return  { ...candidate, registered: formatData(candidate.registered) }
}

//Task3
const sortCandidatesArr = (sortBy = '') => {
	if (sortBy === '' || sortBy === null || sortBy === false) {
		return condidateArr
	}

	const arrayCondidate = [...condidateArr]

	const toNumber = (n) => Number.parseInt((n.slice(1)).replaceAll(',', ''))

	arrayCondidate.sort((a, b) => {

		const aBalance = toNumber(a.balance)
		const bBalance = toNumber(b.balance)

		if (sortBy === 'asc') {
			return aBalance - bBalance
		}
		if (sortBy === 'desc') {
			return bBalance - aBalance
		}
	})
}

//Task 4
const getEyeColorMap = () => {
	
	return condidateArr.reduce((accum, current)=>{
		const color = current.eyeColor
		
		if (!accum[color]){
			debugger
			accum[color] = []
		}

		accum[color][accum[color].length] =  current

		return accum
	}, {})
}
