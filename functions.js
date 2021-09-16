const events = document.body.querySelector('.events')

function addTimeAgenda(){
	const agenda = document.body.querySelector('.agenda')
	for(let i = 8; i < 17; i++){
		const hr = document.createElement('hr')
		const span1 = document.createElement('span')
		const span2 = document.createElement('span')
		span1.classList = ('time big')
		span2.classList = ('time smole')
		span1.textContent = `${i}:00`
		span2.textContent = `${i}:30`
		agenda.append(hr)
		agenda.append(span1)
		agenda.append(span2)
	}
	const hr = document.createElement('hr')
	agenda.append(hr)
}
let id = null

function makeEvent(obj){
	const event = document.createElement('div')
	event.className ='event'
	event.setAttribute('id', id++)
	event.textContent = obj.title
	event.style.width = obj.width + 'px'
	event.style.height= obj.duration + 'px'
	event.style.top = obj.start + 'px'
	event.style.right = obj.right + 'px'
	return event
}

function putOneTimeEvent(obj){
	const event = makeEvent({...obj, width: 198, right: 0})
	events.append(event)
}

function putMultipleEvent(obj){
	obj.forEach((element, index) => {
		const size = 200 / obj.length
		const event = makeEvent({...element, 
			width: size - 2,
			right: size * index})
			events.append(event)
		});
}
	

function multipleCurrentEvents(accum, current, index, arr){
	const accumDur = accum[accum.length -1].start + accum[accum.length -1].duration

	if (index === arr.length - 1 && accumDur <= current.start){
		putMultipleEvent(accum)
		putOneTimeEvent(current)
		return
	}
	if (index === arr.length - 1 && accumDur > current.start){
		putMultipleEvent([...accum, current])
		return
	}
	if (accumDur <= current.start){
		putMultipleEvent(accum)
		return current
	} 
	return [...accum, current]
}

function singleCurrentEvent(accum, current, index, arr){
	const accumDur = accum.start + accum.duration

	if (index === arr.length - 1 && accumDur <= current.start){
		putOneTimeEvent(accum)
		putOneTimeEvent(current)
		return
	}
	if (index === arr.length - 1 && accumDur > current.start){
		putMultipleEvent([accum, current])
		return
	}
	if (accumDur <= current.start){
		putOneTimeEvent(accum)
		return current
	}
	return [accum, current]
}

function addEvents(events){
	id = 0
	const currentTime = ((new Date().getHours() - 8) * 60) + new Date().getMinutes()
	events.reduce((accum, current, index, arr)=>{
		const currentDur = current.start + current.duration
		const accumDur = accum.start + accum.duration
		if (currentDur > 540 || current.start < 0 || (index === 0 && (accum.start < 0 || accumDur > 540))){
			throw new Error('All events should had been started at 8:00 and finished by 17:00')
		}
		return Array.isArray(accum) ? multipleCurrentEvents(accum, current, index, arr) 
		: singleCurrentEvent(accum, current, index, arr)
	})
}

function clearHtml(){
	events.innerHTML = ''
}

function addNewEvent(start, duration, title){
	
	agenda = [...agenda, {start, duration, title}]
	agenda.sort((a, b)=> a.start - b.start)
	clearHtml()
	return addEvents(agenda)
}
	
function changeColor(e){
	const color = prompt('Type color f.e. (0, 242, 255)')
	e.target.style.backgroundColor = `rgba(${color}, 0.5)`
	e.target.style.borderLeft = `2px solid rgb(${color})`
	console.log(e.target.style.borderLeft)
}


function showNotification(title){
	
	const modal = document.querySelector('.notification');
	const text = document.querySelector('.notification__text')
	const close = document.querySelector('.close')
	modal.style.display = "block";
	text.append(`Your event "${title}" have been started`)

	document.body.addEventListener('click', closeModal)
	function closeModal(e){
		console.log(e.target)
		if(e.target === close || e.target === modal){
			modal.style.display = "none";
		}
	}
	return
}