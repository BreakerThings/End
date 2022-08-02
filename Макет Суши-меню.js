function calcCartPriceAndDelivery(){
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.price_production_item');
    const deliveryCost = document.querySelector('.delivery-cost');
    const dataDelivery = document.querySelector('[data-cart-delivery]');
    
    const totalPriceElement = document.querySelector('.total-price');
    let priceTotal = 0;

    priceElements.forEach(function(item){

        const amountElement = item.closest('.cart-item').querySelector('[data-counter]');
        priceTotal = priceTotal + (parseInt(item.innerText) * parseInt(amountElement.innerText));
    });
    totalPriceElement.innerText = priceTotal;

    if(priceTotal > 0){
        dataDelivery.classList.remove('none');
    } else {
        dataDelivery.classList.add('none');
    }
    if (priceTotal >= 850){
        deliveryCost.innerText = 'бесплатно';
        deliveryCost.classList.remove('orange');
    } else {
        deliveryCost.innerText = '250 грн.';
        deliveryCost.classList.add('orange');
    }
}