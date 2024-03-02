import 'slick-slider';
import $ from 'jquery';

if($('.gallery-slider').length > 0){
    $('.gallery-slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false, // use align-items: flex-start on slick-track
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        lazyLoad: 'progressive',
        // cssEase: 'linear',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotHover: true,
        draggable: false,
        swipe: false,
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: true,
        rows: 0, 
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        appendArrows: $('.gallery__arrows'),
        appendDots: $('.gallery__dots'),
        responsive: [
            {
                breakpoint: 965, 
                settings: {
                    variableWidth: false,
                    swipe: true,
                    draggable: true,
                    infinite: false,
                }
            }
        ]
    });

    
    $('.slick-prev').addClass('slick-disabled').off('click').css('cursor', 'default');

    $('.gallery-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        if (nextSlide === slick.slideCount - 1){
            $('.gallery .slick-next').addClass('slick-disabled').off('click').css('cursor', 'default');
        } else {
            $('.gallery .slick-next').removeClass('slick-disabled').on('click', function(){
                $('.gallery-slider').slick('slickNext');
            }).css('cursor', 'pointer');
        }
        if (nextSlide === 0){
            $('.gallery .slick-prev').addClass('slick-disabled').off('click').css('cursor', 'default');
        } else {
            $('.gallery .slick-prev').removeClass('slick-disabled').on('click', function(){
                $('.gallery-slider').slick('slickPrev')
            }).css('cursor', 'pointer');
        }
        
    })

}

if ($('.inspiration-slider').length > 0){
    $('.inspiration-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: false,
        dots: true,
        speed: 1500,
        infinite: true,
        variableWidth: true,
        centerMode: false,
        easing: 'ease-in',
        rows: 0,
        slidesPerRow: 0,
        responsive: [
            {
                breakpoint: 1300, 
                settings: {
                    centerMode: true,
                }
            },
            {
                breakpoint: 372,
                settings: {
                    arrows: false,
                    variableWidth: false,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 2,
                }
            }
        ]
        

    })

    $('.inspiration-slider').on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        let nextIndex = currentSlide + 1;
        if(currentSlide-1 == nextSlide) {
            nextIndex = currentSlide - 1;
        } else if (currentSlide === 0 && nextSlide == slick.slideCount - 1){
            nextIndex = -1;
        } else if (currentSlide === slick.slideCount - 1 && nextSlide === 0){
            nextIndex = slick.slideCount;
        }
        $(`.inspiration-slider .idea-item[data-slick-index="${nextIndex}"]`).addClass('slick-target');
        $($(slick.$slides.get(currentSlide)).find('.idea-item__information').addClass('closing'))
        setTimeout(() => {
            $($(slick.$slides.get(currentSlide)).find('.idea-item__information').removeClass('closing'))
        }, 1500)
    });

    $('.inspiration-slider').on('afterChange', () => {
        $('.slick-slide').removeClass('slick-target');
    });
}

if ($('.tips-slider').length > 0 ){
    $('.tips-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        slidesPerRow: 0,
        rows: 0,
        speed: 1000,
        responsive: [
            {
                breakpoint: 465, 
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    variableWidth: false,
                }
            },
        ]
    })
    $('.tips-slider').on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        let nextIndex = currentSlide + 1;
        if(currentSlide-1 == nextSlide) {
            nextIndex = currentSlide - 1;
        } else if (currentSlide === 0 && nextSlide == slick.slideCount - 1){
            nextIndex = -1;
        } else if (currentSlide === slick.slideCount - 1 && nextSlide === 0){
            nextIndex = slick.slideCount;
        }
        console.log(nextIndex)
        $(`.tips-slider .slick-slide[data-slick-index="${nextIndex}"]`).addClass('slick-target');
    })
    $('.tips-slider').on('afterChange', () => {
        $('.slick-slide').removeClass('slick-target');
    });   
}