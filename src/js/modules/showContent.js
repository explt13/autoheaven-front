export const showMore = () => {
    
    const mql = window.matchMedia('(max-width: 767px)')
    const showContent = () => {
  
        $('._trigger').on('click', function(event){
            if (!($(this).hasClass('active'))){
                $(this).addClass('active')
                $(this).siblings().css('max-height', $(this).siblings().get(0).scrollHeight + "px")
                $(this).parent('.footer__subcolumn').addClass('active');
                
            } else if ($(this).hasClass('active')) {
                $(this).removeClass('active')
                $(this).siblings().css('max-height', '0px')
                $(this).parent('.footer__subcolumn').removeClass('active');
            }
        })
    }

    if (mql.matches){
        showContent()
    }
    mql.addEventListener('change', function(){
        if (mql.matches){
            $('._trigger').each(function(){
                $(this).siblings().css({'max-height': '0px'})
            })
            showContent()
        } else {
            $('._trigger').each(function(){
            $(this).off('click');
            $(this).siblings().css({'max-height': $(this).siblings().get(0).scrollHeight + "px"})
            })
        }
    })
}

// ._content{
//     max-height: 0;
//     overflow: hidden;
//     transition: max-height 0.2s ease-in-out;
// }

