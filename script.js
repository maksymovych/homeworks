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
let timerId = 0

buttonStart.innerText = 'Start'
buttonStop.innerText = 'Stop'
buttonStart.value = 'startTimer'

form.after(divTimeWrapper)
divTimeWrapper.prepend(buttonStart, buttonStop)
divTimeWrapper.append(h2Timer)
divTimeWrapper.addEventListener('click', timer)


function timer(event){

	function getTime(){
		
		function paddStartZerro(number){
			return number = number < 10 ? number.toString().padStart(2, 0) : number
		}

		const hours = paddStartZerro(new Date().getHours())
		const minutes = paddStartZerro(new Date().getMinutes())
		const seconds = paddStartZerro(new Date().getSeconds())

		h2Timer.innerText = `${hours} : ${minutes} : ${seconds}`
		return
	}

	event.target.value === 'startTimer' ? timerId = setInterval(getTime, 1000) : clearInterval(timerId)
}

//Task 3
function changColor(){
	const lastP = document.body.querySelector('#main').lastElementChild
	lastP.style.backgroundColor = 'red'
	return
}

function changeBlocks(){
	const footer = document.querySelector('#footer')
	const main = document.querySelector('#main')
	const wrapper = document.querySelector('#wrapper')
	wrapper.prepend(main)
	wrapper.append(footer)
	return
}

changColor()
changeBlocks()

//Task 4
const list = document.querySelector('#menu')
list.addEventListener('click', numerableList)
let checker = true

function numerableList(event){
	const INGREDIENTS = {
		"cocoa": ["cocoa powder", "milk", "sugar"],
		"cappuccino": ["milk", "coffee"], 
		"smoothie": ["banana", "orange", "sugar"],
		"matcha frappe": ["matcha", "milk", "ice"]
	}
	
	let ol = document.createElement('ol')

	function showRecipe(){
		const target = event.target
		const innerText = event.target.innerText
		target.after(ol)
		INGREDIENTS[innerText].forEach(item=> {
			const li = document.createElement('li')
			li.innerText = item
			ol.append(li)
		})
	}

	function closeRecipe(){
		document.querySelectorAll('ol > li').forEach(item=>item.remove())
		ol.remove()
	}

	if (checker){
		showRecipe()
	} else {
		closeRecipe()
	}
	
	checker = !checker

	return
}