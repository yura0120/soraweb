document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('resize', function () {
    particlesInit();
  });
  const main = new Main();
  particlesInit();
});

class Main {
  constructor() {
    this.header = document.querySelector('.header');
    this._observers = [];

    this._init();
  }

  set observers(val) {
    this._observers.push(val);
  }

  get observers() {
    return this._observers;
  }

  _init() {
    this.topics = new TopicSlider('.topic-slide');
    this.profile = new ProfileSlider('.profile-slide');
    this._scrollInit();
  }

  _navAnimation(el, inview) {
    if (inview) {
      this.header.classList.remove('triggered');
    } else {
      this.header.classList.add('triggered');
    }
  }

  _inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  }

  _toggleSlideAnimation(el, inview) {
    if (inview) {
      this.topics.start();
    } else {
      this.topics.stop();
    }
  }

  _sideAnimation(el, inview) {
    if (inview) {
      this.sides.forEach((side) => side.classList.add('inview'));
    } else {
      this.sides.forEach((side) => side.classList.remove('inview'));
    }
  }

  _destroyObservers() {
    this.observers.forEach((ob) => {
      ob.destory();
    });
  }

  destory() {
    this._destroyObservers();
  }

  _scrollInit() {
    this.observers = new ScrollObserver(
      '.nav-trigger',
      this._navAnimation.bind(this),
      { once: false }
    );
    this.observers = new ScrollObserver(
      '.title-trigger',
      this._inviewAnimation.bind(this),
      { once: false, rootMargin: '-100px 0px -300px 0px' }
    );
    this.observers = new ScrollObserver(
      '.swiper-container',
      this._toggleSlideAnimation.bind(this),
      { once: false }
    );
    this.observers = new ScrollObserver('.appear', this._inviewAnimation, {
      rootMargin: '-10px 0px',
    });
  }
}
