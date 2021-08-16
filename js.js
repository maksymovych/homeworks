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
			return arr
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
const timer = time => {
	const isAvailableTime = () => {
		if (time >= 1 && time < 6000) {
			return false
		}
		console.log("Time is anavailable. Must be number more then '0' and les then '6000' seconds")
		return true
	}

	if (isAvailableTime()) return

	time = Math.floor(time)

	const SECONDS_IN_MINUT = 60
	let counter = time
	const timeLog = () => {
		if (counter < 1) {
			console.log("Time End")
			clearInterval(timer)
			return
		}
		const getMinutes = () => {
			let min = Math.floor(counter / SECONDS_IN_MINUT)
			if (min === 0) return "00"
			if (min < 10) return "0" + min
			return min
		}
		const getSeconds = () => {
			let sec = counter % SECONDS_IN_MINUT
			if (sec < 10) return "0" + sec
			return sec
		}
		console.log(getMinutes() + ":" + getSeconds())
		counter--
	}

	const timer = setInterval(timeLog, 1000)
	return
}
