//Task 1
function Employee(obj) {
	return Object.assign(this, obj)
}

//Task 2
Employee.prototype.getFullName = function () {
	return `${this.name} ${this.surname}`
}

//Task 3
let createEmployesFromArr = (arr) => {
	const employeeArray = []
	arr.map(item => employeeArray.push(new Employee(item)))
	return employeeArray
}

const emplyeeConstructArr = createEmployesFromArr(emplyeeArr)

//Task 4
const getFullNamesFromArr = (arr) => {
	return arr.map(item => item.getFullName())
}

const fullNames = getFullNamesFromArr(emplyeeConstructArr)

//Task 5
const getMiddleSalary = (arr) => {
	const allSumm = arr.map(item => item.salary).reduce((accum, current) => accum + current)
	return ~~(allSumm / arr.length)
}

const midSalary = getMiddleSalary(emplyeeConstructArr)

//Task 6
const getRandomEmployee = (arr) => {
	const randomIndex = Math.floor(Math.random() * arr.length)
	return arr[randomIndex]
}

getRandomEmployee(emplyeeConstructArr)


//Task 7
class Emploee {
	constructor(employ) {
		this.id = employ.id
		this.name = employ.name
		this.surname = employ.surname
		this.salary = employ.salary
		this.workExperience = employ.workExperience
		this.isPrivileges = employ.isPrivileges
		this.gender = employ.gender
	}

	get fullInfo() {
		const arr = []
		for (let key in this) {
			arr.push(`${key} - ${this[key]}`)
		}
		return arr.join(", ")
	}

	set fullInfo(value) {
		for (let key in value) {
			if (this.hasOwnProperty(key)) {
				this[key] = value[key]
			}
		}
	}
}

const employeeObj = new Emploee(emplyeeArr[0]);
