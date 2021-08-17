//Task1
const arr = ['Vasya', 'Petya', 'Alexey', 'Ira', 'Djohn']

const removeUser = (arr, index) => {
	arr.splice(index, 1)
}
removeUser(arr, 1)
//console.log(arr)

//Task2
const obj = { name: 'Vasya', age: 1 }

const getAllKeys = (obj) => {
	console.log(Object.keys(obj))
}
//getAllKeys(obj) /// ["name", "age"]

//Task3
const getAllValues = (obj) => {
	console.log(Object.values(obj))
}
//getAllValues(obj) /// ["Vasya", 1]

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
//console.log(condidate.state) /// Colorado

//Task6
const getCompanyNames = () => {
	const result = condidateArr.map(item => item.company).sort()
	return console.log(result)
}
getCompanyNames() /// [""EZENT, "JASPER" ... ]