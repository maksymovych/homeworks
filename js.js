
/*Task 1: Создать цикл на 10 итераций. На каждой итерации если i четное, то вывести в консоль слово Fiz, если i не четное, то вывести в консоль слово Buz, если i кротное цифре 3, то вывести FizBuz.*/

for (let i = 1; i <= 10; i++) {
	if (i % 3 === 0) {
		console.log("FizBuz")
	} else if (i % 2 === 0) {
		console.log("Fiz")
	} else if (i % 2 === 1) {
		console.log("Buz");
	}
}

//Task 2: Написать логику нахождения факториала числа.

const findFactorial = (number) => {
	let result = 1;
	for (let i = 1; i <= number; i++) {
		result *= i;
	}
	return result;
}

const factorial = findFactorial(7);

console.log("Factorial is: " + factorial)


/*Task 3: В пачке бумаги 500 листов. За неделю в офисе расходуется 1200 листов.
Какое наименьшее количество пачек бумаги нужно купить в офис на 8 недель?*/

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeks = 2;

const howManyReamPaper = (weeksAmount) => {
	const allConsumption = weeksAmount * consumptionPerWeek / sheetsInReamPaper
	if (allConsumption % 1 === 0) {
		return allConsumption
	}
	return (allConsumption - allConsumption % 1) + 1

}

const amountOfReamPaper = howManyReamPaper(weeks)
console.log("Amount of ream paper is: " + amountOfReamPaper)


/*Task 4: Создать функцию, которая выведет в консоль номер этажа
 и номер подъезда по номеру квартиры. Этажей у нас 9, квартир на этаже по 3
  const porch = ?
 const floor = ?
 */

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 456;
const minRoomNumber = 1;
const maxRoomNumber = 1000;

const amoutRoomsInPorch = roomsOnFloor * floors;

const exeption = (roomNumber) => {

	if (roomNumber > maxRoomNumber || roomNumber < minRoomNumber) {
		console.log("Sorry there are no such number of the room, try another number")
		return true
	}
	return false
}

const discardFractionalValue = (number) => number % 1 ? (number - number % 1) + 1 : number

const findPorch = (roomNumber) => {

	if (roomNumber <= amoutRoomsInPorch && roomNumber > 0) {
		return 1
	} else {
		const porch = roomNumber / amoutRoomsInPorch
		return discardFractionalValue(porch)
	}
}

const findFloor = (roomNumber) => {

	const porch = findPorch(roomNumber)
	let floor = null

	if (roomNumber <= amoutRoomsInPorch) {
		floor = roomNumber / roomsOnFloor
	} else if (roomNumber > amoutRoomsInPorch) {
		floor = (roomNumber - (porch * amoutRoomsInPorch)) / amoutRoomsInPorch
	}
	return discardFractionalValue(floor)
}

const porchAndFloorToConsole = (roomNumber) => {
	if (exeption(roomNumber)) {
		return
	}
	console.log("Porch is: " + findPorch(roomNumber) + "\nFloor is: " + findFloor(roomNumber))
}

porchAndFloorToConsole(123)


/* Task 5: Вывести в консоль пирамиду. Переменная указывает количество строк
 из которых построится пирамида. Пирамида должна строится 
 в одинаковом визуально виде между собой, но строго учитывая кол-во строк*/

const paintSymbol = (amount, symbol) => {
	let string = symbol
	for (let i = 1; i < amount; i++) {
		string += symbol
	}
	return string
}

const buildPiramid = (medianNumber) => {
	if (medianNumber % 2 || medianNumber < 1) {
		console.log("Pleas type positive even number")
		return
	}
	let amountOfMinus = medianNumber - 1
	let amountOfHash = 1
	let minus = "-"
	let hash = "#"
	for (let i = 0; i < medianNumber - 1; i++) {
		console.log(paintSymbol(amountOfMinus, minus) + paintSymbol(amountOfHash, hash)
			+ paintSymbol(amountOfMinus, minus))
		amountOfMinus--
		amountOfHash += 2
	}
	console.log(paintSymbol(amountOfHash, hash))
	return
}

buildPiramid(8)