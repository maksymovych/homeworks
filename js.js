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
