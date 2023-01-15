// кнопка еще
const podcastBtn = document.querySelector('.podcasts__button');
const podcastsItems = document.querySelectorAll('.podcasts__item');

podcastBtn.addEventListener('click', () => {
    podcastsItems.forEach(el => el.classList.add('podcasts__item--active'));
    podcastBtn.classList.add('podcasts-all--hide');
})

//select

const element = document.querySelector('.broadcast__selectCustom');

const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ""
})

// Accordion
new Accordion('.accordion');



//swiper
// const swiper = new Swiper('.swiper-container', {
//     slidesPerView: 4,
//     spaceBetween: 30,
//     loop: true,
//     // пагинация
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     // навигация
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });

let swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    rewind: true,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints: {
  
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  
  
  
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  
    1200: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
  },
  });

