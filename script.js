//Task 1
const numberOfFields = 3 //prompt('Pleas enter number of fields:')
const buttonRegistr = document.querySelector('.button')

for(let i = 0; i < numberOfFields; i++){
	const input = document.createElement('input')
	input.value = `Input ${i + 1}`
	input.className = i < numberOfFields - 1 ? 'input-item' : 'input-item margin-zero'

	!(i % 2) ? input.classList.add('yellow') : ''

	if (!((i + 1) % 3)){
		input.value = null
		input.placeholder = 'Some text'
	} 
	
	buttonRegistr.before(input)
}

//Task 2
const divTimeWrapper = document.createElement('div')
const buttonStart = document.createElement('button')
const buttonStop = document.createElement('button')
const h2Timer = document.createElement('h2')
const form = document.forms[0]

buttonStart.innerText = 'Start'
buttonStop.innerText = 'Stop'

form.after(divTimeWrapper)
divTimeWrapper.prepend(buttonStart, buttonStop)
divTimeWrapper.append(h2Timer)

function getTime(){
	function paddStartZerro(number){
		return number = number < 10 ? number.toString().padStart(2, 0) : number
	}
	const hours = paddStartZerro(new Date().getHours())
	const minutes = paddStartZerro(new Date().getMinutes())
	const seconds = paddStartZerro(new Date().getSeconds())
	h2Timer.innerText = `${hours} : ${minutes} : ${seconds}`
	const idInterval = setInterval(getTime(), 1000)
	return
}


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


