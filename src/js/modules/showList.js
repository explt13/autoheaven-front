import { event } from "jquery";


export const showList = () => {
    $('.menu__list > li._more').on('click', '.menu__link', function(event){

        event.stopPropagation();
        $('.menu__list > li._more').each(function(){
            if (this === event.delegateTarget){
                return;
            }
            if ($(this).hasClass('_active')){
                $(this).removeClass('_active').addClass('_closing');
                setTimeout(() => {
                    $(this).removeClass('_closing')
                }, 300);
            }
           
        });

        const height = $(this).next().get(0).scrollHeight;
        
        if ($(event.delegateTarget).hasClass('_active')){
            $(event.delegateTarget).removeClass('_active').addClass('_closing')
            setTimeout(() => {
                $(event.delegateTarget).removeClass('_closing')
            }, 300);

        } else{
            $(event.delegateTarget).addClass('_active').children('.menu__sublist').css('--height', height + 'px')
        }
        
    })

    $('.menu__sublist').on('click', function(event){
        event.stopPropagation();
    });
    $('.menu__link_sub').on('click', '', function(){
        $(this).parents('li._more._active').removeClass('_active').addClass('_closing');
        setTimeout(() => {
            $(this).parents('li._more').removeClass('_closing')
        }, 300);              
    });


    $('body').on('click', function(){
        $('.menu__list > li._more').each(function(){
            if ($(this).hasClass('_active')){
                $(this).removeClass('_active').addClass('_closing');
                setTimeout(() => {
                    $(this).removeClass('_closing')
                }, 300);
            }
            
        });
    });
}