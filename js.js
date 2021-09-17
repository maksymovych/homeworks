let agenda = [
	{start: 0, duration: 35, title: 'Exersize at 8 oclock'},
	{start: 25, duration: 20, title: 'Wea to work'},
	{start: 60, duration: 135, title: 'Mitng with teem'},
	{start: 65, duration: 50, title: 'Code rewiew'},
	{start: 100, duration: 35, title: 'Skype call'},
	{start: 180, duration: 25, title: 'Plan Day'},
	{start: 400, duration: 20, title: 'Have lanch with Kate'},
	{start: 450, duration: 20, title: 'HSomething with Kate'}
	
];

//max 540


addTimeAgenda();


addEvents(agenda);


document.forms.add.addEventListener('submit',
function (e) {
	e.preventDefault();
	const data = Object.fromEntries(new FormData(e.target));
	const start = (data.hour - 8) * 60 + +data.min
	addNewEvent(start, +data.duration, data.title)
	alert('New event was added')
});

function removeEvent(id){
	const check = confirm('Are you sure, you want to delete an event?')
	if (!check) return
	agenda.splice(id, 1)
	clearHtml()
	addEvents(agenda)
}
function removeElementOrChangeColor(e){
	console.log(e.target.id)
	e.target.classList[0] === 'removeEvent' ? removeEvent(e.target.id) : changeColor(e)
}


events.addEventListener('click', removeElementOrChangeColor)
