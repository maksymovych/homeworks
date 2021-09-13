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
	
	function addEvents(events){
		id = 0
		events.reduce((accum, current, index, arr)=>{
			if (current.start + current.duration > 540){
				throw new Error('All events should be finished by 17:00')
			}
			if (Array.isArray(accum)){
				
				if (index === events.length - 1){
					putMultipleEvent(accum)
				}
				if(accum[accum.length -1].start + accum[accum.length -1].duration <= current.start){
					putMultipleEvent(accum)
					return current
				} else return [...accum, current]
				
			} else if(index === arr.length - 1){
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

	function clearHtml(){
		events.innerHTML = ''
	}
	
	function addNewEvent(start, duration, title){
		
		agenda = [...agenda, {start, duration, title}]
		agenda.sort((a, b)=> a.start - b.start)
		clearHtml()
		return addEvents(newAgenda)
	}
	
function changeColor(e){
	const color = prompt('Type color f.e. (0, 242, 255)')
	e.target.style.backgroundColor = `rgba(${color}, 0.5)`
	e.target.style.borderLeft = `2px solid rgb(${color})`
	console.log(e.target.style.borderLeft)
}
