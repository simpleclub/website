import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const buttons = document.querySelectorAll(".kunden-content_navigation-btn");
const sections = document.querySelectorAll(".product-cunden_block");
const dropdownText = document.querySelector(".kunden-content_dropdown-toggle-inner div"); // Target the paragraph inside the dropdown

function updateActiveButton(activeIndex) {
  buttons.forEach((btn, i) => {
    btn.style.borderLeft = i === activeIndex ? "2px solid #0059D6" : "2px solid #E4E4E4";
  });
}

function updateDropdownText(index) {
  const section = sections[index];
  const firstParagraph = section.querySelector("p"); // Get the first paragraph inside the section

  if (firstParagraph && dropdownText) {
    dropdownText.textContent = firstParagraph.textContent; // Copy text content
  }
}

// Set initial active button and dropdown text
updateActiveButton(0);
updateDropdownText(0);

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      updateActiveButton(index);
      updateDropdownText(index);
    },
    onEnterBack: () => {
      updateActiveButton(index);
      updateDropdownText(index);
    },
  });
});
