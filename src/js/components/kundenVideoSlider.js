// Import Swiper JS
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

let kunVideos;


function initSwiper() {
  // Initialize Swiper with responsive settings
  kunVideos = new Swiper('.kun-videos_wrapper', {
    modules: [Navigation],
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.kun-videos-slider-next',
      prevEl: '.kun-videos-slider-prev',
    },
  });
}

initSwiper();



