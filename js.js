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
	let prevTime = 0
	let currentTime = 0
	return () => {
		if (prevTime === 0) {
			prevTime = new Date().getTime()
			return 'Enabled'
		}
		currentTime = Math.round((new Date().getTime() - prevTime) / 1000)
		prevTime = new Date().getTime()
		return currentTime
	}
}
const getTime = setTimer()

//Task 4
