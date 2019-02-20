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
        titles = document.querySelectorAll('.goods__title');
        console.log(titles);
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
               
                showConfirm();
                calcGoods(1);

                removeBtn.classList.add('goods__item-remove');
                removeBtn.innerHTML = '&times';

                item.appendChild(removeBtn);
                cratWrapper.appendChild(item);

                
                if(empty) {
                    // empty.remove();
                    empty.style.display = 'none';
                }

                calcTotal();
                removeFromCart();
        })
    });

    function sliceTitle() {
        // Обрезаем 
        titles.forEach(function(item){

            if(item.textContent.length < 70){
                return; // Означет прекратить
            } else {
                // const str = item.textContent.slice(0, 71) + '...';
                const str = `${item.textContent.slice(0, 71)} ...`;
                item.textContent = str;
            }


        });  
    }
    sliceTitle();

    function showConfirm() {
        confirm.style.display = 'block';

        const id = setInterval(frame, 10);

        let counter = 100;

        function frame() {
            if( counter == 10){
                clearInterval(id);
            } else {
                counter--;
                confirm.style.transform = `translateY(-${counter}px)`;
                confirm.style.opacity = '.' + counter;
            }
            
        }
    }

    function calcGoods(i) {
        const items = cratWrapper.querySelectorAll('.goods__item')
        badge.textContent = items.length + i;
    }

    function calcTotal() {
        const prices = document.querySelectorAll('.cart__wrapper > .goods__item > .goods__price > span');
        let total = 0;

        prices.forEach(function(item){
            total += +item.textContent;
        });

        totalCost.textContent = total;
    }

    function removeFromCart(){
        const removeBtn = cratWrapper.querySelectorAll('.goods__item-remove');
        
        removeBtn.forEach(function(btn){
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                calcGoods(0);
                calcTotal();
                let goods = cratWrapper.querySelectorAll('.goods__item');
                let empty = cratWrapper.querySelector('.empty');
                if(goods.length == 0){
                    empty.style.display = 'block';
                }
            })
        });

    }
});
