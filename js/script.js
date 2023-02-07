//бургер меню

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("burger").addEventListener('click', function() {
        document.querySelector("header").classList.toggle("open")
    })
});

//поиск

document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('open-search-form').addEventListener('click', (e) => {
        document.getElementById('search-form').classList.add('search-form__show')
    });

    document.getElementById('search-form-close').addEventListener('click', (e) => {
        document.getElementById('search-form').classList.remove('search-form__show')

        document.getElementById('search-form').addEventListener('submit', (e) => {
            e.preventDefault()
        })
    })
})

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
        1600: {
            slidesPerView: 4,
            spaceBetween: 30,
        },

        300: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
});


let acPanelBtn = document.querySelectorAll('.ac-panel__btn');
let guestsMapItem = document.querySelectorAll('.guests__map-item');


acPanelBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        acPanelBtn.forEach(function (btn) { btn.classList.remove('ac-panel__btn--active') });
        e.currentTarget.classList.add('ac-panel__btn--active');

        guestsMapItem.forEach(
            function (element) {
                element.classList.remove('guests__map-item--active')
            }
        );
        document.querySelector(`[data-target=${path}]`).classList.add('guests__map-item--active');
    });
});
