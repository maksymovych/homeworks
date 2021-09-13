const events = document.body.querySelector('.events')

function addTimeAgenda(){
	const agenda = document.body.querySelector('.agenda')
	for(let i = 0; i < 9; i++){
		const hour = i + 8
		const hr = document.createElement('hr')
		const span1 = document.createElement('span')
		const span2 = document.createElement('span')
		span1.classList = ('time big')
		span2.classList = ('time smole')
		span1.textContent = (`${hour}:00`)
		span2.textContent = `${hour}:30`
		agenda.append(hr)
		agenda.append(span1)
		agenda.append(span2)
	}
	const hr = document.createElement('hr')
	agenda.append(hr)
}
let id = 0
function makeEvent(obj){
	const event = document.createElement('div')
	event.className ='event'
	event.setAttribute('id', ++id)
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

function addEvents(events){
	events.reduce((accum, current, index)=>{
		if (Array.isArray(accum)){

			if (index === events.length - 1){
				putMultipleEvent(accum)
			}
			if(accum[accum.length -1].start + accum[accum.length -1].duration <= current.start){
				putMultipleEvent(accum)
				return current
			} else return [...accum, current]
			
		} else if(index === events.length - 1){
			putOneTimeEvent(accum)
			putOneTimeEvent(current)
			return
		} else if (accum.start + accum.duration <= current.start){
			putOneTimeEvent(accum)
			return current
		} else if(accum.start + accum.duration > current.start){
			return [accum, current]
		}	
	})
}