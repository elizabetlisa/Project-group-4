var swiper = new Swiper(".mySwiper", {
    innerWidth: 344,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
          clickable: true,
    },
    breakpoints: {
        768: {
            spaceBetween: 16,
            loop: true,
            slidesPerView: 2,
            slidesPerColumn: 2
        },
        1280: {
            slidesPerView: 3
        }
      }
});
    
import modal from './js/modal';
import slider from './js/slider';