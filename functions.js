const events = document.body.querySelector('.events');
const eventWidth = 198;
const startTime = 8;
const endTime = 17;
const min = 60;
const lastMin = (endTime - startTime) * 60;
let id = null;
let timeout = null

function addTimeAgenda(){
	const agenda = document.body.querySelector('.agenda');
	for(let i = startTime; i < endTime; i++){
		const hr = document.createElement('hr');
		const span1 = document.createElement('span');
		const span2 = document.createElement('span');
		span1.classList = ('time big');
		span2.classList = ('time smole')
		span1.textContent = `${i}:00`;
		span2.textContent = `${i}:30`;
		agenda.append(hr);
		agenda.append(span1);
		agenda.append(span2);
	}
	const hr = document.createElement('hr');
	agenda.append(hr);
}

function makeEvent(obj){
	const event = document.createElement('div');
	const spanClose = document.createElement('span');
	spanClose.innerText = 'x';
	spanClose.classList.add('removeEvent');
	spanClose.setAttribute('id', id);
	event.setAttribute('id', id++);
	event.classList.add('event');
	event.textContent = obj.title;
	event.append(spanClose);
	event.style.width = obj.width + 'px';
	event.style.height= obj.duration + 'px';
	event.style.top = obj.start + 'px';
	event.style.right = obj.right + 'px';
	return event;
}

function putOneTimeEvent(obj, width = eventWidth, right = 0){
	const event = makeEvent({...obj, width, right});
	events.append(event);
}

function putMultipleEvent(obj){
	obj.forEach((element, index) => {
		const size = eventWidth / obj.length;
		const event = makeEvent({...element, 
			width: size - 2,
			right: size * index});
		events.append(event);
		});
}

function hostinMultipleevents(arr){
	const last = arr[arr.length - 1];
	const prev = arr[arr.length - 2];
	const prevEventFinish = prev.start + prev.duration;

	if (prevEventFinish <= last.start){
		putMultipleEvent(arr.filter((i, index)=> index < arr.length - 1))
		const right = eventWidth / (arr.length - 1) ;
		const width = eventWidth - right;
		putOneTimeEvent(last, width, right)
		return
	}
	if(arr.length === 3){
		putMultipleEvent(arr.filter((i, index)=> index < arr.length - 1))
		const width = (eventWidth / 2) - 2;
		putOneTimeEvent(last, width)
		return
	}
	putMultipleEvent(arr)
	return
}

function multipleCurrentEvents(accum, current, index, arr){
	const accumDur = accum[accum.length -1].start + accum[accum.length -1].duration;
	const isSomeEentCross = accum.some(item=> item.start + item.duration > current.start)
	if (index === arr.length - 1 && accumDur <= current.start){
		putMultipleEvent(accum);
		putOneTimeEvent(current);
		return;
	}
	if (index === arr.length - 1 && accumDur > current.start){
		putMultipleEvent([...accum, current]);
		return;
	}
	if (accumDur <= current.start && !isSomeEentCross){
		hostinMultipleevents(accum)	
		return current	
	} 
	return [...accum, current];
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

function renderEvents(events){
	id = 0
	events.reduce((accum, current, index, arr)=>{
		const currentDur = current.start + current.duration
		if (currentDur > lastMin || current.start < 0){
			throw new Error('All events should had been started at 8:00 and finished by 17:00')
		}
		return Array.isArray(accum) ? multipleCurrentEvents(accum, current, index, arr) 
		: singleCurrentEvent(accum, current, index, arr);
	})
}

function addNotifications(agenda){
	timeout = clearTimeout()
	const currentTime = ((new Date().getHours() - startTime) * min) + new Date().getMinutes();
	agenda.forEach((item) =>{
		const start = item.start;
		const finish = start + item.duration
		if (currentTime >= start && currentTime < finish){
			showNotification(item.title)
			return
		} else if (start > currentTime){
			const timeBeforEvent = (start - currentTime) * min * 1000
			timeout = setTimeout(()=>showNotification(item.title), timeBeforEvent)
			console.log((start - currentTime)* 60, timeBeforEvent)
			return
		}
	});
}

function clearHtml(){
	events.innerHTML = ''
}

function addNewEvent(start, duration, title){
	
	agenda = [...agenda, {start, duration, title}]
	agenda.sort((a, b)=> a.start - b.start)
	clearHtml()
	return renderEvents(agenda)
}
	
function changeColor(e){
	const color = prompt('Type color f.e. (0, 242, 255)');
	e.target.style.backgroundColor = `rgba(${color}, 0.5)`;
	e.target.style.borderLeft = `2px solid rgb(${color})`;
}


function showNotification(title){
	
	const modal = document.querySelector('.notification');
	const text = document.querySelector('.notification__text')
	const close = document.querySelector('.closeNotification')
	modal.style.display = "block";
	text.append(`Your event: "${title}" have been started`)
	document.body.addEventListener('click', closeModal)
	function closeModal(e){
		if(e.target === close || e.target === modal){
			modal.style.display = "none";
		}
	}
	return
}