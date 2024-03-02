import { ibg } from "./ibg.js"
export const products = () => {
    
    
    const productsList = [
        {img: 'product_5', alt: 'product-night-lamp', title: 'Grifo', desc: 'Night lamp', price: "1500000", mod: null, discount: null},
        {img: 'product_6', alt: 'product-small-mug', title: 'Muggo', desc: 'Small mug', price: '150000', mod: 'new', discount: null},
        {img: 'product_7', alt: 'product-bed-set', title: 'Pingky', desc: 'Cute bed set', price: '14000000', mod: 'discount', discount: "50"},
        {img: 'product_8', alt: 'product-flower-pot', title: 'Potty', desc: 'Minimalist flower pot', price: '500000', mod: 'new', discount: null},
        {img: 'main_gallery_1', alt: 'product-flower-pot', title: 'Sofa', desc: 'Luxury big sofa 2-seat', price: '17000000', mod: 'new', discount: null},
    ]

    const splitNum = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }

    $('.item-product').each(function(){
        const price = $(this).find('.item-product__price').data('price');
        $(this).find('.item-product__price').attr('data-price', splitNum(price));
    })

    $('.products__row .discount').each(function(){
        const discValue = $(this).data('discount');
        const price = $(this).find('.item-product__price').data('price');
        const discPrice = (price - (price * (discValue * 0.01)));
        
        $(this).find('.item-product__price').attr('data-price', splitNum(discPrice));
        $(this).find('.item-product__price').after(`<span class="item-product__disc">Rp ${splitNum(price)}</span>`)
    })

    const mql = window.matchMedia('(hover: hover)');
    const handleOverlay = () => {
        if (mql.matches){
            $('.item-product').on('mouseenter', function(){
                $(this).find('.item-product__overlay').addClass('active');
                $(this).find('.item-product__disc').css('display', 'none')
            })
            $('.item-product').on('mouseleave', function(){
                $(this).find('.item-product__overlay').removeClass('active');
                $(this).find('.item-product__disc').css('display', 'inline')
            })
        } else {
            $('.item-product').off("mouseenter mouseleave")
        }
    }
    mql.addEventListener('change', handleOverlay)
    handleOverlay()
    

    if (productsList.length === 0){
        $('.products__footer').hide()
    }

    $('.products__footer').on('click', function(){
        if (productsList.length > 0){
            const count = productsList.length < 4 ? productsList.length : 4; 
            for (let i=0; i<count; i++){
                $('.products__row.products').append(`
                <div class="products__column hidden">
                    <article class="products__item item-product ${productsList[i].mod}" data-discount=${productsList[i].discount}>
                        <div class="item-product__img ibg"><img src="img/${productsList[i].img}.jpg" alt=${productsList[i].alt}></div>
                        <div class="item-product__information">
                            <h4 class="item-product__title">${productsList[i].title}</h4>
                            <div class="item-product__desc">${productsList[i].desc}</div>
                            <div class="item-product__price" data-price=${productsList[i].price}>Rp </div>
                        </div>
                        <div class="item-product__overlay">
                            <a class="item-product__buy">Add to cart</a>
                            <div class="item-product__save">
                                <div class="item-product__share"><img src="img/share.svg"> Share</div>
                                <div class="item-product__like"><img src="img/heart_w.svg"> Like</div>
                            </div>
                        </div>
                    </article>
                </div>
                `)
            }
            productsList.splice(0, 4);
        }

        if (productsList.length === 0){
            $('.products__footer').hide()
        }
        

        setTimeout(() => {
            if ($('.products__column').hasClass('hidden')){
                $('.products__column.hidden').removeClass('hidden').addClass('show')
            }
        }, 0)
    })

    const targetNode = document.querySelector('.products__row.products');
        const config = { childList: true, subtree: true };
        const callback = function(mutationsList, observer) {
            for(const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    ibg();
                    handleOverlay();
                }
            }
        };
        const observer = new MutationObserver(callback)
        observer.observe(targetNode, config);
}