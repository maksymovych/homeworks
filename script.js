//Task 1
const numberOfFields =   7//prompt('Pleas enter number of fields:')

const button = document.querySelector('.button')
const yellow = 

Array(numberOfFields).fill(1).forEach((item, index)=>{
	const input = document.createElement('input')
	input.value = `Input ${index + 1}`

	input.className = index < numberOfFields - 1 ? 'input-item' : 'input-item margin-zero'
	!(index % 2) ? input.classList.add('yellow') : ''

	if (!((index + 1) % 3)){
		input.value = null
		input.placeholder = 'Some text'
	} 
	
	button.before(input)
})
