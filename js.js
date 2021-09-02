const cardsWrapper = document.body.querySelector('.main__cards')
const cards = items.map(item=>{
	const inStock  = item.orderInfo.inStock
	const classIconCloseOpen = !!inStock ? 'circle icon-check' : 'icon-close'
	const classActive = !!inStock ? 'active ' : ''
	cardsWrapper.innerHTML += `
	<div class="card-wrapper box-wrapper ">
                    <div class="card box">
                        <div class="card__top">
                            <span class="icon-like_empty hard-empty"></span>
                            <div class="card__img-wrapper">
                                <img class="card__img" src="img/${item.imgUrl}" alt="iphone-12-pro">
                            </div>
                            <h2 class="card__title">${item.name}</h2>
                            <div class="card__is-instock">
								<span class="${classIconCloseOpen}"></span>
                                <span>${inStock} in stock</span>
                            </div>
                            <span class="card__price">Price: ${item.price} $</span>
                            <button class="${classActive} button">Add to cart</button>
                        </div>
                        <div class="card__bottom">
                            <span class="hard-filled icon-like_filled"></span>
                            <p>95% Positive reviews <br> Above avarage</p>
                            <span class="reviews">1,323 <br>orders</span>
                        </div>
                    </div>
                </div>
	`
})
