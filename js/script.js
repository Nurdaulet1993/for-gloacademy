window.addEventListener('DOMContentLoaded', () =>{

    const   cratWrapper = document.querySelector('.cart__wrapper'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.cart__close'),
        open =  document.querySelector('#cart'),
        goodsBtn = document.querySelectorAll('.goods__btn'),
        products = document.querySelectorAll('.goods__item'),
        confirm = document.querySelector('.confirm'),
        badge = document.querySelector('.nav__badge'),
        totalCost = document.querySelector('.cart__total > span'),
        titles = document.querySelector('.goods__title');

    function openCart(){
        cart.style.display = "block";
        document.body.style.overflow = 'hidden';
    }

    function closeCart(){
        cart.style.display = "none";
        document.body.style.overflow = 'auto';
    }

    open.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);

    goodsBtn.forEach(function(btn, i){
        btn.addEventListener('click', () => {
            let item = products[i].cloneNode(true),
                trigger = item.querySelector('button'),
                removeBtn = document.createElement('div'),
                empty = cratWrapper.querySelector('.empty');

                trigger.remove();                                       // Удаление блока
                removeBtn.classList.add('goods__item-remove');
                removeBtn.innerHTML = '&times';

                item.appendChild(removeBtn);
                cratWrapper.appendChild(item);

                if(empty) {
                    empty.remove();
                }
        })
    });
});
