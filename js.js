//Task 1
function count() {
	let count = 0
	return (number) => {
		count += number
		console.log("Number is: " + count)
	}
}

const counter = count
//counter(9)


//Task 2
const updatedArr = () => {
	let arr = []
	return (obj) => {
		if (obj === undefined) {
			arr = []
			return []
		}
		arr.push(obj)
		return arr
	}
}

const getUpdatedArr = updatedArr
//getUpdatedArr(3)

//Task 3 
const setTimer = () => {
	let result = 0
	return () => {
		const time = new Date()
		if (result === 0) {
			result = time.getTime() / 1000
			return 'Enabled'
		}

		result += time.getTime()
		return result
	}

}

const getTime = setTimer

getTime()