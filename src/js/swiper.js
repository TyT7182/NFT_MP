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
   breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 32,
      modules: [Navigation, Pagination],
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
    },
    1366: {
      slidesPerView: 5,
      spaceBetween: 32,
      preventClicksPropagation: 'true',
      effect: 'flip',
      loop: true,
      grabCursor: true,
      modules: [Navigation, Pagination],
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
    }


   }
  

});









// const mediaQuery = window.matchMedia('(min-width: 320px)')
// function handleTabletChange(e) {
//   if (e.matches) {

//     const swiper = new Swiper('.swiper', {



//       slidesPerView: 1,
//       spaceBetween: 32,





      

//     });
//   }
// }
// mediaQuery.addListener(handleTabletChange)
// handleTabletChange(mediaQuery)


// const mediaQuery_2 = window.matchMedia('(max-width: 850px)')
// function handleTabletChange_2(e) {
//   if (e.matches) {

//     const swiper = new Swiper('.swiper', {



//       slidesPerView: 3,
//       spaceBetween: 15,
//       allowTouchMove: 'false',
//       preventClicksPropagation: 'true',
//       simulateTouch: 'true',
//       effect: 'flip',




      

//     });
//   }
// }
// mediaQuery_2.addListener(handleTabletChange_2)
// handleTabletChange_2(mediaQuery_2)