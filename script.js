//Task 1
const numberOfFields = prompt('Pleas enter number of fields:')

const buttonRegistr = document.querySelector('.button')

Array(numberOfFields).fill(1).forEach((item, index)=>{
debugger
	const input = document.createElement('input')
	input.value = `Input ${index + 1}`
	input.className = index < numberOfFields - 1 ? 'input-item' : 'input-item margin-zero'

	!(index % 2) ? input.classList.add('yellow') : ''

	if (!((index + 1) % 3)){
		input.value = null
		input.placeholder = 'Some text'
	} 
	
	buttonRegistr.before(input)
})

//Task 2
//const button = document.createElement('button')
