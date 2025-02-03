// Import Swiper JS
import Swiper from 'swiper';

// Import Swiper styles
import 'swiper/css';

document.querySelectorAll(".home-testimonial_slider").forEach((slider) => {
  new Swiper(slider, {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    // centeredSlides: true,
  });
});
 


const tabs = document.querySelectorAll(".home-testimonial_tabs-pill");
const sliders = document.querySelectorAll(".home-testimonial_slider");

if (tabs.length === 0 || sliders.length === 0){

} else {
  tabs.forEach((tab, index) => {
      tab.addEventListener("click", function () {
          // Remove active classes from all tabs and sliders
          document.querySelector(".home-testimonial_tabs-pill.active-tab")?.classList.remove("active-tab");
          document.querySelector(".home-testimonial_slider.active-slider")?.classList.remove("active-slider");
  
          // Add active classes to the clicked tab and corresponding slider
          tab.classList.add("active-tab");
          sliders[index].classList.add("active-slider");
      });
  });
  
};





