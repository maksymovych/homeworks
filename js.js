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

			Student.sortArray(this.listOfStudents, "ratingPoint")

			if (this.listOfStudents[0].ratingPoint < currentRating) {
				this.listOfStudents[0].isSelfPayment = true
				this.listOfStudents.splice(0, 1, student)

				return false
			}
			if (this.listOfStudents[0].ratingPoint === currentRating) {
				const listOfSameRating = this.listOfStudents.filter(item => item.ratingPoint === currentRating)
				Student.sortArray(listOfSameRating, "schoolPoint")
				const lastRating = this.listOfStudents.findIndex(item => item.schoolPoint === listOfSameRating[0].schoolPoint)
				if (this.listOfStudents[lastRating].schoolPoint < currentSchoolPoint) {
					this.listOfStudents[lastRating].isSelfPayment = true
					this.listOfStudents.splice(lastRating, 1, student)

					return false
				}
			}
		}
		return true
	}

	get listOfStudents() {
		return this.listOfStudents
	}
}

Student.sortArray = (array, sortItem) => {
	return array.sort((a, b) => a[sortItem] - b[sortItem])
}

for (let i = 0; i < studentArr.length; i++) {
	new Student(studentArr[i])
}

//Task 2
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

//console.log(myString.ucWords("nmnmnUYUYsdsHF sdsdsd sdsdsd e"))

//Task 3
class Validator {

	checkIsEmail(email) {
		const regExp = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
		return email.match(regExp) ? true : false
	}
	checkIsDomain(domain) {
		if (str.includes("..")) return false
		const regExp = "^[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
		return domain.match(regExp) ? true : false
	}

	checkIsDate(date) {
		const regExp = "^([012][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)[0-9]{2}$"
		return date.match(regExp) ? true : false
	}

	checkIsPhone(phone) {
		if (phone.length < 13 || phone.length > 20) return false
		if (!phone.startsWith("+38")) return false
		if (phone[phone.length - 1] % 1 !== 0) return false
		if (isDoubleItem(phone, "(") || isDoubleItem(phone, ")")
			|| isDoubleItem(phone, " ") || isDoubleItem(phone, "-")) {
			return false
		}
		if (consistUnapropriate(phone)) return false
		return true
	}
}
const validator = new Validator();

const isDoubleItem = (str, item) => {
	return str.includes(item + item) ? true : false
}

const consistUnapropriate = (phone) => {
	let n = null
	for (let i = 3; i < phone.length; i++) {
		n = phone[i]
		if (n % 1 !== 0 && n !== "(" && n !== ")" && n !== " " && n !== "-") {
			return true
		}
	}
	return false
}