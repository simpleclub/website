import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let contentTriggers = [];

function animateContentBlocks() {
  const rightBlocks = document.querySelectorAll(".home-time_content_right_block");
  const images = document.querySelectorAll(".home-time_content_left_block-image");

  if (rightBlocks.length === 0 || images.length === 0) return;

  rightBlocks.forEach((block, index) => {
    const trigger = ScrollTrigger.create({
      trigger: block,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => {
        gsap.to(images, { opacity: 0, duration: 0.3 });
        gsap.to(images[index], { opacity: 1, duration: 0.6 });
        gsap.to(block, { opacity: 1, duration: 0.6 });
      },
      onEnterBack: () => {
        gsap.to(images, { opacity: 0, duration: 0.3 });
        gsap.to(images[index], { opacity: 1, duration: 0.6 });
        gsap.to(block, { opacity: 1, duration: 0.6 });
      },
      onLeave: () => {
        gsap.to(images[index], { opacity: 0, duration: 0.3 });
        gsap.to(block, { opacity: 0.5, duration: 0.6 });
      },
      onLeaveBack: () => {
        gsap.to(images[index], { opacity: 0, duration: 0.3 });
        gsap.to(block, { opacity: 0.5, duration: 0.6 });
      }
    });
    contentTriggers.push(trigger);
  });
}

function handleResize() {
  const isLargeScreen = window.innerWidth > 767;
  const rightBlocks = document.querySelectorAll(".home-time_content_right_block");

  if (isLargeScreen && contentTriggers.length === 0) {
    animateContentBlocks();
  } else if (!isLargeScreen && contentTriggers.length > 0) {
    contentTriggers.forEach((trigger) => trigger.kill());
    contentTriggers = [];
    setTimeout(() => {
      rightBlocks.forEach((block) => (block.style.opacity = "1"));
    }, 650);
  }
}

// Initialize on load
handleResize();

// Debounced resize event listener
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleResize, 300);
});
