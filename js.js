const agenda = [
	{start: 0, duration: 35, title: 'Exersize at 8 oclock'},
	{start: 25, duration: 20, title: 'Wea to work'},
	{start: 60, duration: 30, title: 'Mitng with teem'},
	{start: 65, duration: 45, title: 'Code rewiew'},
	{start: 100, duration: 35, title: 'Skype call'},
	{start: 180, duration: 25, title: 'Plan Day'},
	{start: 400, duration: 140, title: 'Have lanch with Kate'},
]
//max 540

let newAgenda = []

addTimeAgenda()

addEvents(agenda)


document.forms.add.addEventListener("submit",
function (e) {
	e.preventDefault();
	const data = Object.fromEntries(new FormData(e.target));
	console.log(data)
	const start = (data.hour - 8) * 60 + +data.min
	addNewEvent(start, +data.duration, data.title)
});

