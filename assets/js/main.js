var swiper = new Swiper(".services-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000
  },
  breakpoints: {
    '576': {
      slidesPerView: 1.3
    },
    '800': {
      slidesPerView: 2.3
    },
    '992': {
      slidesPerView: 1.3
    },
    '1400': {
      slidesPerView: 2.3
    }
  },
});

var swiper = new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000
  },
  breakpoints: {
    '500': {
      slidesPerView: 1.2,
      spaceBetween: 10
    },
    '600': {
      slidesPerView: 1.5,
      spaceBetween: 10
    },
    '768': {
      slidesPerView: 2.2,
      spaceBetween: 10
    },
    '1200': {
      slidesPerView: 2.5,
      spaceBetween: 10
    },
    '1400': {
      slidesPerView: 3.5,
      spaceBetween: 10
    }
  },
});

AOS.init();