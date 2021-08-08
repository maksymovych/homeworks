//Task1

class Student {
	constructor(enrollee) {
		this.name = enrollee.name
		this.surname = enrollee.surname
		this.ratingPoint = enrollee.ratingPoint
		this.schoolPoint = enrollee.schoolPoint
		this.id = Student.getId()
		this.isSelfPayment = Student.getPayment(this.ratingPoint)
		Student.addStudent(this)
	}

	static id = 1
	static getId() {
		return this.id++
	}

	static getPayment(rating) {
		if (rating >= 800 && this.listOfStudents.length < 5) {
			return false
		} else if (rating >= 800 && this.listOfStudents.length >= 5) {
			//	const index = this.
		}
		return true
	}

	static listOfStudents = []
	static addStudent(student) {
		if (!student.isSelfPayment) {
			this.listOfStudents.push(student)
		}

	}

	get listOfStudents() {
		// if(!this.isSelfPayment){}
		return this.listOfStudents
	}
}
const students = []
for (let i = 0; i < 10; i++) {
	students[i] = new Student(studentArr[i])
}