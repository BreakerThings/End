window.addEventListener('click', function(event){
    let counter;
    if(event.target.dataset.action ==='plus' || event.target.dataset.action ==='minus'){
        const minusPlus = event.target.closest('.minus-plus');
        counter = minusPlus.querySelector('[data-counter]');
    }
    if (event.target.dataset.action ==='plus'){
        counter.innerText = ++counter.innerText 
    }
    if (event.target.dataset.action ==='minus'){
        if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText

        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
            event.target.closest('.cart-item').remove();

            toggleCartStatus()

            calcCartPriceAndDelivery()
        }
    }

    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){ // <-- Если он находиться внутри корзины
            
        // Пересчет общей стоимости товаров в корзине
        calcCartPriceAndDelivery()
    }
});