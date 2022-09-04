import Swiper, { Navigation, Pagination } from 'swiper';





const swiper = new Swiper('.swiper', {



  slidesPerView: 5,
  spaceBetween: 32,
  allowTouchMove: 'false',
  preventClicksPropagation: 'true',
  simulateTouch: 'true',
  effect: 'flip',



  modules: [Navigation, Pagination],
  navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
  

});









const mediaQuery = window.matchMedia('(max-width: 375px)')
function handleTabletChange(e) {
  if (e.matches) {

    const swiper = new Swiper('.swiper', {



      slidesPerView: 1,
      spaceBetween: 8,
      allowTouchMove: 'false',
      preventClicksPropagation: 'true',
      simulateTouch: 'true',
      effect: 'flip',




      

    });
  }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)


