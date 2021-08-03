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
	return arr.map((item) => new Employee(item.id, item.name, item.surname,
		item.salary, item.workExperience, item.isPrivileges, item.gender))
}
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr)