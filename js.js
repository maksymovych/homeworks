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
	for (let i = 0; i <= amountOfArr; i++) {
		for (let j = 0; j < 3; j++) {
			resultArr[i] = counter
			counter++
		}
	}
}