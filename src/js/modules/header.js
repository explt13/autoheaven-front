export const header = () => {

    const mql = window.matchMedia('(min-width: 768px)')
    
    const handleHeight = (scrollTop) => {
        if($(window).scrollTop() > 0 && $(window).scrollTop() <= 100){
            $('.header').addClass('drop')
        } else if ($(window).scrollTop() === 0){
            $('.header').removeClass('drop')
        }
        if (scrollTop > 100 && scrollTop < $(window).scrollTop()){
            $('.header').addClass('hide')
            console.log()
            if ($('.menu__list > li._more._active').length > 0){
                console.log($('.menu__list > li._more._active'))
                $('.menu__list > li._more._active').addClass('_closing').removeClass('_active')
                setTimeout(() => {
                    $('.menu__list > li._more').removeClass('_closing')
                }, 300)
            }
        } else if (scrollTop >= $(window).scrollTop()){
            $('.header').removeClass('hide')
        }
    }

    if (mql.matches){
        let scrollTop = $(window).scrollTop();
        handleHeight(scrollTop);
        $(window).on('scroll', function(){
            handleHeight(scrollTop)
            scrollTop = $(window).scrollTop();
        })
    }


    mql.addEventListener('change', function(){
        if (mql.matches){
            $('.header').removeAttr('style')
            let scrollTop = $(window).scrollTop();
            handleHeight(scrollTop);
            $(window).on('scroll', function(){
                handleHeight(scrollTop);
                scrollTop = $(window).scrollTop();
            })
        } else {
            $(window).off('scroll')
            $('.header').css('height', '66px')
        }
    })
}