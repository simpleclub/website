// CSS import
import '../../css/components/_testimonial-slider.scss'

import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Select all testimonial sliders
const sliders = document.querySelectorAll(".testimonial_slider");


if (sliders.length > 0) {
  sliders.forEach((slider) => {
    
    // Check if the slider has the necessary Swiper structure
    const wrapper = slider.querySelector(".swiper-wrapper");
    const slides = slider.querySelectorAll(".swiper-slide");

    if (!wrapper || slides.length === 0) {
      console.warn("Swiper structure is missing in:", slider);
      return; // Skip initializing Swiper for this slider
    }

    new Swiper(slider, {
      modules: [Navigation],
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 40,
      centeredSlides: window.innerWidth <= 767,
      breakpoints: {
        768: {
          centeredSlides: false,
        },
      },
      navigation: {
        nextEl: ".testimonials_slider-next",
        prevEl: ".testimonials_slider-prev",
      },
    });
  });
}


// Handling Tab Clicks
const tabs = document.querySelectorAll(".testimonial_tabs-pill");
const sliderWrappers = document.querySelectorAll(".testimonial_slider-wrapper");

// Run only if both tabs and slider wrappers exist
if (tabs.length > 0 && sliderWrappers.length > 0) {
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      // Remove active classes from all tabs and sliders
      document.querySelector(".testimonial_tabs-pill.active-tab")?.classList.remove("active-tab");
      document.querySelector(".testimonial_slider-wrapper.active-slider")?.classList.remove("active-slider");

      // Add active classes to the clicked tab and corresponding slider
      tab.classList.add("active-tab");
      sliderWrappers[index]?.classList.add("active-slider");
    });
  });
}
