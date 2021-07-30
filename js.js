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
		console.log("Type number multiple of three")
		return
	}
	const amountOfArr = amount / 3
	let counter = 1
	let resultArr = []

	for (let i = 0; i < amountOfArr; i++) {
		let shortArr = []
		for (let j = 0; j < 3; j++) {
			shortArr.push(counter)
			counter++
		}
		resultArr[i] = shortArr
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

const getNameOfDay = (day, lang) => {
	return namesOfDays[lang][day - 1]
}

const dayName = getNameOfDay(1, 'ru')

//console.log(dayName)

/*Task 4: Создайте функцию, которая возвращает сумму двух наименьших положительных чисел
 из массива минимум 4 положительных целых чисел. Не передаются числа с плавающей запятой
 или отрицательные числа.*/

const summOfTwoSmolest = (arr) => {
	let summ = null

	for (let i = 0; i < 2; i++) {
		let min = arr[i]
		for (let i = 1; i < arr.length; i++) {
			min < arr[i] ? min : min = arr[i] && arr.splice(arr[i], 1)

		}
		summ += min
	}
	return summ
}
