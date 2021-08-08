//Task1

class Student {
	constructor(enrollee) {
		this.name = enrollee.name
		this.surname = enrollee.surname
		this.ratingPoint = enrollee.ratingPoint
		this.schoolPoint = enrollee.schoolPoint
		this.id = Student.getId()
		this.isSelfPayment = Student.getPayment(this, this.ratingPoint, this.schoolPoint)
	}


	static id = 1
	static getId() {
		return this.id++
	}

	static listOfStudents = []
	static getPayment(student, currentRating, currentSchoolPoint) {
		const listLangth = this.listOfStudents.length
		if (currentRating >= 800 && listLangth < 5) {
			this.listOfStudents.push(student)
			return false
		} else if (currentRating >= 800 && listLangth >= 5) {
			this.listOfStudents.sort((a, b) => a.ratingPoint - b.ratingPoint)
			let pointIndex = this.listOfStudents.findIndex(item => item.ratingPoint < currentRating)
			if (pointIndex === -1) {
				this.listOfStudents.sort((a, b) => a.schoolPoint - b.schoolPoint)
				pointIndex = this.listOfStudents.findIndex(item => item.ratingPoint < currentSchoolPoint)

			}
			this.listOfStudents.splice(pointIndex, 1, student)
			return pointIndex !== -1 ? false : true
		}
		return true
	}

	get listOfStudents() {
		return this.listOfStudents
	}
}

for (let i = 0; i < studentArr.length; i++) {
	new Student(studentArr[i])
}