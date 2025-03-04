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


// functionality for video testimonials
// on play / pause we hide and show the play button and quote text
function initWistiaVideoListeners() {

  function handleVideo(video) {
    const card = video.closest(".testimonial_slider-card");
    if (!card) return;

    const button = card.querySelector(".testimonial_slider-card_button");
    const info = card.querySelector(".testimonial_slider-card_content_info");

    if (!button || !info) return;

    video.addEventListener("play", function () {
      button.style.display = "none";
      info.style.display = "none";
    });

    video.addEventListener("pause", function () {
      button.style.display = "flex";
      info.style.display = "flex";
    });
  }

  // Check existing wistia-player elements
  const wistiaVideos = document.querySelectorAll("wistia-player");
  wistiaVideos.forEach(handleVideo);

  // Observe DOM for dynamically added wistia-player elements
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1 && node.tagName.toLowerCase() === "wistia-player") {
          handleVideo(node);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

  return function cleanup() {
    observer.disconnect();
  };
}

// Call function on page load
initWistiaVideoListeners();


