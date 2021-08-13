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
getUpdatedArr(3)