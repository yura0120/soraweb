class TopicSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      loop: true,
      effect: 'slide',
      rabCursor: true,
      slidesPerView: 2,
      spaceBetween: 100,
      centeredSlides: true,
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
      },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      breakpoints: {
        960: {
          slidesPerView: 3,
        },
      },
    });
  }

  start(options = {}) {
    options = Object.assign(
      {
        delay: 8000,
        disableOnInteraction: false,
      },
      options
    );
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();
  }
}

class ProfileSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      loop: true,
      effect: 'coverflow',
      rabCursor: true,
      slidesPerView: 1,
      spaceBetween: 100,
      centeredSlides: true,
      speed: 1000,
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    });
  }
}
