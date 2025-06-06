import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination, Grid} from 'swiper/modules';
import 'swiper/css';
import 'swiper/scss/grid';

export const sliderHero = new Swiper('.hero__wrapper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  modules: [Autoplay, Navigation, Pagination],
  pagination: {
    el: '.hero-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
});

export const sliderPrograms = new Swiper('.programs__slider-wrapper', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.programs__button-next',
    prevEl: '.programs__button-prev',
  },
  modules: [Navigation, Pagination],
  pagination: {
    el: '.programs-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 32,
    },
  },
});

export const sliderNews = new Swiper('.news__slider-wrapper', {
  direction: 'horizontal',
  loop: false,
  loopAddBlankSlides: true,
  freeMode: true,
  navigation: {
    nextEl: '.news__button-next',
    prevEl: '.news__button-prev',
  },
  pagination: {
    el: '.news-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${ className }">${ index + 1 }</span>`;
    },
  },
  modules: [Navigation, Pagination, Grid],
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 9,
      grid: {
        rows: 2,
        fill: 'row',
        gap: '0',
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

export const sliderNewsButtons = new Swiper('.news__wrapper-menu', {
  direction: 'horizontal',
  loop: false,
  mousewheel: true,
  modules: [Navigation, Pagination],
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 12,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 10,
      centeredSlides: false,
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 10,
      centeredSlides: false,
    },
  },
},
);

export const sliderReviews = new Swiper('.reviews__slider', {
  direction: 'horizontal',
  loop: false,
  mousewheel: true,
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  modules: [Navigation, Pagination],
  pagination: {
    el: '.reviews-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});
