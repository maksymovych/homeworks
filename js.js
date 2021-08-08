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

class CustomString {

	reverse(str) {
		let reversedStr = ''
		for (let i = str.length - 1; i >= 0; i--) {
			reversedStr += str[i]
		}
		return reversedStr
	}

	ucFirst(str) {
		let ucFirstStr = ''
		for (let i = 1; i < str.length; i++) {
			ucFirstStr += str[i]
		}
		return str[0].toUpperCase() + ucFirstStr
	}

	ucWords(str) {
		let ucWords = ''
		let current = ''
		const iMax = str.length
		for (let i = 0; i < iMax; i++) {

			if (i === 0 || current === ' ' && i < iMax) {
				current = str[i].toUpperCase()
			} else current = str[i]
			ucWords += current
		}
		return ucWords
	}

}

const myString = new CustomString();

console.log(myString.ucWords("nmnmnUYUYsdsHF sdsdsd sdsdsd e"))