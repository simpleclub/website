// Import Swiper JS
import Swiper from 'swiper';
import { Navigation, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

let futureSlider;

function initSwiper() {
  // Initialize Swiper with responsive settings
  futureSlider = new Swiper('.home-future_slider', {
    modules: [Navigation, EffectCoverflow],
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.future-slider-next',
      prevEl: '.future-slider-prev',
    },
  });
}

initSwiper();



