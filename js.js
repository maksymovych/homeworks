/*Task 1: Дан объект с городами и странами. Вывести масив значения
в котором будут строки преобразованные в данный формат:
<Столица> - это <Страна>.*/

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

const result = []

for (let key in citiesAndCountries) {
	result.push(key + " - это " + citiesAndCountries[key])
}

//console.log(result)

/*Task 2: Создать функцию которая выведет многомерный массив A.
 Данный массив содержит в себе список других массивов B.
 Массивы B должны содержать по 3 значения.
 Максимальное значение (в примере это переменная amount) должно делится на 3 нацело.*/

const getArray = (amount) => {

	if (amount < 3 || amount % 3 !== 0) {
		console.log("Enter an array multiple of three")
		return
	}

	let resultArr = []
	let shortArr = []
	for (let i = 1; i <= amount; i++) {
		shortArr[shortArr.length] = i
		if (i % 3 === 0) {
			resultArr[resultArr.length] = shortArr
			shortArr = []
		}
	}
	return resultArr
}

const resultArr = getArray(9)

//console.log(resultArr)

//Task 3

const namesOfDays = {
	ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

const getNameOfDay = (day, lang) => namesOfDays[lang][day - 1]

const dayName = getNameOfDay(1, 'ru')

//console.log(dayName)

/*Task 4: Создайте функцию, которая возвращает сумму двух наименьших положительных чисел
 из массива минимум 4 положительных целых чисел. Не передаются числа с плавающей запятой
 или отрицательные числа.*/

const summOfTwoSmolest = (arr) => {
	if (arr.length < 4) {
		console.log("Min length of an array mast be more then 4")
		return
	}

	let sortArray = arr.sort((a, b) => a - b)

	for (let i = 0; i < sortArray.length; i++) {
		if (sortArray[i] < 0 || sortArray[i] % 1 !== 0
			|| (sortArray[i] === sortArray[i + 1] && i < arr.length - 1)) {
			console.log("Unavailable array")
			return
		}
	}
	return sortArray[0] + sortArray[1]
}

/*Task 5:
Дан массив единиц и нулей, преобразуйте эквивалентное двоичное значение в целое число.
Например: [0, 0, 0, 1]рассматривается как 0001двоичное представление 1.*/

const toDecimal = (arr) => {
	let decimalCounter = 0
	let counter = 1
	for (let i = arr.length - 1; i >= 0; i--) {
		arr[i] === 1 ? decimalCounter += counter : decimalCounter
		counter *= 2
	}
	return decimalCounter
}