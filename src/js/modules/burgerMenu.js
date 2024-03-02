export const burgerMenu = () =>{
    const mqlBM = matchMedia('(max-width: 767px)')
    const mqlSearch = matchMedia('(max-width: 600px)');
  
    const handleBM = () => {
        $('.icon-menu').on('click', function(event){
            event.stopImmediatePropagation();
            $('.menu__body').addClass('mobile')
            $(this).toggleClass('active');
            $('body').toggleClass('lock') // overflow: hidden
            $('.menu__body').toggleClass('active')
        });
        $('.menu__body').on('click', function(event){
            event.stopPropagation()
        })
        $('body').on('click', function(){
            $('.menu__body').removeClass('active');
            $('.icon-menu').removeClass('active');
            $('body').removeClass('lock') 
        })
    }

    
    if (mqlBM.matches){
        handleBM();
    }
    if (mqlSearch.matches){
        $('.menu__list').before($('.header__search'));
    }


    mqlBM.addEventListener('change', function(){
        if (mqlBM.matches){
            handleBM()
        } else {
            $('.menu__body').removeClass('mobile');
            $('.icon-menu').off('click');
            $('.menu__body').removeClass('active');
            $('.icon-menu').removeClass('active');
        }
    })
    mqlSearch.addEventListener('change', function(){
        if (mqlSearch.matches){
            $('.menu__list').before($('.header__search'));
        } else {
            $('.header__menu').after($('.header__search'));
        }
    })
}