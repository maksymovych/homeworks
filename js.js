//Task 1
class Student {
	constructor(enrollee) {
		this.id = getId()
		this.name = enrollee.name
		this.surname = enrollee.surname
		this.raitingPoint = enrollee.raitingPoint
		this.schoolPoint = enrollee.schoolPoint
		this.isSelfPayment = isSelfPay()
	}

	static id = 0
	static getId() {
		return this.id++
	}

	static isSelfPay() {
		if (raitingPoint >= 800) {

		}
	}

	get listOfStudents() {
		return []
	}

	set listOfStudents() {

	}
}



Student.listOfStudents
/// [] - пустой изначально

// Вызвал класс
new Student({ name: 'Valeriy', ...})


Student.listOfStudents
/// [{ id: 1,  name: 'Valeriy', ...},  и т.д.]

// Снова вызвал 
new Student({ name: 'Maks', ...})

Student.listOfStudents
/// [{ id: 1,  name: 'Valeriy', ...}, { id: 2,  name: 'Maks', ...},  и т.д.]