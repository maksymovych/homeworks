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
function goToShop(){
	let productAmount = null
	return productAmount
}