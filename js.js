//Task 1
function count() {
	let count = 0
	return (number) => {
		count += number
		console.log("Number is: " + count)
	}
}

const counter = count()
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

const getUpdatedArr = updatedArr()
//getUpdatedArr(3)

//Task 3 
const setTimer = () => {
	let currentTime = 0
	let time = 0
	return () => {
		if (currentTime === 0) {
			currentTime = new Date().getTime()
			return 'Enabled'
		}
		return Math.round((new Date().getTime() - currentTime) / 1000)
	}
}
const getTime = setTimer()
