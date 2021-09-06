//Task 1
let firstPromise = new Promise((resolve, reject)=>{
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

//Task 2
function makeDinner(){
	return new Promise((resolve, reject) => {
		setTimeout(console.log('Bon appetite'), 3000)
		resolve()
	})
}
function goToShop(){
	
	return new Promise(resolve=>{
		resolve()
	}).then(response=>{
		console.log(response)
	})
}

//Task 3
let container = document.body.querySelector('.container')
fetch('https://rickandmortyapi.com/api/character/?page=1')
.then((response) => response.json())
.then((data) => data.results.map(item => {

	const card = `
	<div class="card">
		<div class="card-info">
			<div class="title">
				<h1>${item.name}</h1>
				<div class="status">
					<div class="live-status"></div>
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
	container.innerHTML += card
}));
