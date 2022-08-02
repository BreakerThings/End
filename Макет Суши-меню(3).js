function toggleCartStatus() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const dataEmpty = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('[data-form]');
    if(cartWrapper.children.length > 0){
        dataEmpty.classList.add('none')
        orderForm.classList.remove('none')
    } else {
        dataEmpty.classList.remove('none')
        orderForm.classList.add('none')
    }
}