//Task1
const arr = ['Vasya', 'Petya', 'Alexey', 'Ira', 'Djohn']

const removeUser = (arr, index) => {
	arr.splice(index, 1)
}
removeUser(arr, 1)

//Task2
const obj = { name: 'Vasya', age: 1 }

const getAllKeys = (obj) => {
	return Object.keys(obj)
}

//Task3
const getAllValues = (obj) => {
	return Object.values(obj)
}

//Task4
const secondObj = {
	id: 4,
	name: 'Katya'
}

const arr2 = [
	{
		id: 1,
		name: 'Kolya'
	},
	{
		id: 2,
		name: 'Petya'
	},
];
const insertIntoArr = (arr, id) => {
	const index = arr2.findIndex((obj => obj.id === id))
	index === -1 ? console.log('Id not exist') : arr2.splice(index, 0, arr)
}
insertIntoArr(secondObj, 1)
//console.log(arr2)

//Task5
class Condidate {
	constructor(obj) {
		Object.assign(this, obj)
	}
	get state() {
		return this.address.split(",")[2]
	}
}
const condidate = new Condidate(condidateArr[3])

//Task6
const getCompanyNames = () => {
	const result = []
	const array = condidateArr.map(item => item.company)
	for (let item of array) {
		if (!result.includes(item)) {
			result.push(item)
		}
	}
	return result
}

//Task7
const getUsersByYear = (y) => {
	const year = y.toString()
	const result = []
	condidateArr.map(item => {
		if (item.registered.split("-")[0] === year) {
			result.push(item._id)
		}
	})
	return result
}

//Task8
const getCondidatesByUnreadMsg = (messageAmount) => {
	const result = []
	for (let key in condidateArr) {
		const greeting = parseInt(condidateArr[key].greeting.match(/\d+/))
		if (greeting === messageAmount) {
			result.push(condidateArr[key])
		}
	}
	return result
}

//Task9
const getCondidatesByGender = (gender) => {
	return condidateArr.filter(condidate => condidate.gender === gender)
}

//Task10
// initialValue can be only number or string
Object.defineProperty(Array.prototype, 'cReduce', {
	value: function (callback, initialValue) {

		if (!Number(initialValue)){
			return "InitialValue can be only number or string"
		}

		let result = initialValue || 0

		for (let index in this) {
			result = callback(result, this[index], index, this)
		}

		return result
	},
	enumerable: false
})

Object.defineProperty(Array.prototype, 'cJoin', {
	value: function (separat) {
		let result = ''
		separat ? separat : separat = ','

		for (let index in this) {
		result += this[index]
		index < this.length - 1 ? result += separat : result
	}
		return result
	},
	enumerable: false
})
