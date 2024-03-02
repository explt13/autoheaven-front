import Swiper from "swiper/bundle";
import $ from 'jquery';
const shareSlider = new Swiper('.share-slider', {
    // ------------------------------------ BASE ------------------------------------ //
    init: true,
    enabled: true,
    createElements: true, 
    speed: 5000,
    slidesPerView: 'auto',
    initialSlide: 1,
    spaceBetween: 16,
    preventInteractionOnTransition: false,
    normalizeSlideIndex: true,
    grabCursor: false,
    slideToClickedSlide: false,
   
    centeredSlides: true,
    centeredSlidesBounds: true,
    
    freeMode: {
        enabled: true,
    },

});


$('.share-slider').on('mousemove', function(event){
    const mouseX = event.pageX;
    
    const distanceFromLeft = mouseX;
    const distanceFromRight = $(window).width() - mouseX;
    
    const minDistance = 500; // Minimum distance from the edge to trigger event
    if (distanceFromLeft < minDistance) {
        shareSlider.setProgress(0, 2500 + 5000 * (distanceFromLeft / minDistance))
      } else if (distanceFromRight < minDistance) {
        shareSlider.setProgress(1, 2500 + 5000 * (distanceFromRight / minDistance))
      } else {
        shareSlider.setProgress(0.5, 7000)
      }
    
})

$('.share-slider').on('mouseleave', function(){
    shareSlider.setProgress(0.5, 7000)
})