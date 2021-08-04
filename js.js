//Task 1
function Employee(id, name, surname, salary, workExperience, isPrivileges, gender) {
	this.id = id
	this.name = name
	this.surname = surname
	this.salary = salary
	this.workExperience = workExperience
	this.isPrivileges = isPrivileges
	this.gender = gender
}

//Task 2
Employee.prototype.getFullName = function () {
	return `${this.name} ${this.surname}`
}

//Task 3
let createEmployesFromArr = (arr) => {
	const employeeArray = []
	arr.map(item => employeeArray.push(new Employee(item.id, item.name, item.surname,
		item.salary, item.workExperience, item.isPrivileges, item.gender)))
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
