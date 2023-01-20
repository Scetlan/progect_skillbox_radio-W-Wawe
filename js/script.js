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
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom'
});

// Accordion
new Accordion('.accordion__container');


//swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    // навигация
    navigation: {
        nextEl: '.swiper-button-two',
        prevEl: '.swiper-button-one',
    },
    breakpoints: {// настройки для разных разрешений
        824: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        // 991: {
        //     slidesPerView: 2,
        //     spaceBetween: 30
        // },
        // 1192: {
        //     slidesPerView: 3,
        //     spaceBetween: 20
        // }
    }
});
