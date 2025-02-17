import '../css/kundenSingle.scss'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const buttons = document.querySelectorAll(".kunden-content_navigation-btn");
const sections = document.querySelectorAll(".kunden-content_info");

function updateActiveButton(activeIndex) {
  buttons.forEach((btn, i) => {
    if (i === activeIndex) {
      btn.style.borderLeft = "2px solid #0059D6"; // Active button gets blue border
    } else {
      btn.style.borderLeft = "2px solid #E4E4E4"; // Inactive buttons get gray border
    }
  });
}

// Set initial active button
updateActiveButton(0);

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center", // Trigger when section reaches the middle of the viewport
    end: "bottom center",
    onEnter: () => updateActiveButton(index),
    onEnterBack: () => updateActiveButton(index),
  });
});
