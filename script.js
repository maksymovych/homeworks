//Task 1
/*let firstPromise = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		const number = Math.ceil(Math.random() * 6)
		if (number === 6) {
			reject("Exit") 
		} else{
			console.log("Start the game...")
			resolve(number)
		} 
	}, 2000)
	
}).then(value=>{
	value === 1 ? console.log("Stay here") : console.log("Go "+ value +" steps")
}).catch(error => {
	console.log(error)
})
*/

//Task 2
function goToShop(){
	const products = ['salad', 'olive', 'cheez', 'meaet', 'onion']
	return new Promise(resolve => {
		resolve(products.length)
	})
}
function makeDinner(){
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve('Bon appetite')
		}, 3000)
	})
}

goToShop()
.then(response=>{
	if (response < 4) {
		function productError (err){ 
			this.name = err.name, this.message = err.message}
		throw new productError({name: 'Product Error', message: 'Too low products'})
	} else {
		return makeDinner()
	}
})
.then(message => console.log(message))
.catch(error => console.error(error.name,' : ', error.message))

//Task 3
let container = document.body.querySelector('.container')

document.forms[0].addEventListener('click', filter())

function getApi(path){
	let api = 'https://rickandmortyapi.com/api/character/'
	return fetch(`${api}${path}`)
	.then(response => response.json())
}

function getCharactersById(...path){
	getApi(path.toString())
	.then(data => {
		if (path.length > 1){
			data.map(item => addCardToDOM(item))
		} else {
			addCardToDOM(data)
		}
	})
	.catch(error => console.error(error))
}

function filter(){

	let filterPath = '?&'

	return (target) =>{
		const value = target.target.id
		if (!value) return

		let key = (value === 'male' || value === 'female') ? 'gender' : ''
		key = (value === 'alive' || value === 'dead') ?  'status' : key
		
		if (target.target.checked){
			filterPath += `&${key}=${value}`
		} else {
			filterPath = filterPath.replace(`&${key}=${value}`, '')
		}

		getApi(filterPath).then(array=>{
			container.innerHTML = ''
			array.results.map(character => addCardToDOM(character))
		})
	}
}

function addCardToDOM(item){

	const status = item.status === 'Alive' ? 'live-status' : 'live-status dead'
	container.innerHTML += `
		<div class="card">
			<div class="card-info">
				<div class="title">
					<h1>${item.name}</h1>
					<div class="status">
						<div class=${status}></div>
						<p>${item.species}</p>
					</div>
				</div>
				<div class="content">
					<p>${item.location.name}</p>
				</div>
			</div>
			<div class="card-image">
				<img src=${item.image}>
			</div>
		</div>
	`
	return
}