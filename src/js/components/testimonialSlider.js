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

    const parentWrapper = slider.closest(".testimonial_slider-wrapper");
    const nextButton = parentWrapper.querySelector(".testimonials_slider-next");
    const prevButton = parentWrapper.querySelector(".testimonials_slider-prev");

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
        nextEl: nextButton,
        prevEl: prevButton,
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


////////////////////////////////////////////////////////////
// editing quote text size based on the number of characters
////////////////////////////////////////////////////////////
function updateFontSize(element) {
  if (element.textContent.length > 100) {
    element.style.fontSize = "0.75rem";
  } else {
    element.style.fontSize = "1rem";
  }
}

// Select the container where `.testimonial_slider_card-quote` elements are located
const testimonialContainer = document.querySelector(".testimonial");

// Run on existing `.testimonial_slider_card-quote` elements
if (testimonialContainer) {
  testimonialContainer.querySelectorAll(".testimonial_slider_card-quote").forEach(updateFontSize);
  
  // Set up an observer to monitor changes within `.testimonial`
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          // Check if the added node is `.testimonial_slider_card-quote` or contains `.testimonial_slider_card-quote`
          if (node.classList.contains("testimonial_slider_card-quote")) {
            updateFontSize(node);
          } else {
            node.querySelectorAll(".testimonial_slider_card-quote").forEach(updateFontSize);
          }
        }
      });
    });
  });

  observer.observe(testimonialContainer, {
    childList: true,
    subtree: true, // Watches all nested elements inside `.testimonial`
  });
}


