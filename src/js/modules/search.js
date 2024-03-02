export const search =() => {
    let mql = window.matchMedia('(min-width: 601px) and (max-width: 964px)');
  

    const handleSearch = (event) => {
        event.stopPropagation();
        $(event.currentTarget).addClass('active')
        $('body').on('click', function(){
            if ($('.header__search').hasClass('active')){
                $('.header__search').animate({
                    'width': '44px',
                }).removeClass('active')
            }
        })
    }
    
    if (mql.matches){
        $('.header__search').css({'width': '44px'}).on('click', function(event){
            handleSearch(event)
        })
    }

    mql.addEventListener('change', function(){
        if (mql.matches){
            $('.header__search').css({'width': '44px'}).on('click', function(event){
                handleSearch(event)
            })
           
        } else {
            $('.header__search').css({'max-width': '473px', 'width': '100%'}).off('click')
            $('body').off('click')
        }
    })
}