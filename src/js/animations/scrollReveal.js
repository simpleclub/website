import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select all elements with the class 'scroll_wrap'
document.querySelectorAll(".scroll_wrap").forEach((wrap) => {
  const target = wrap.querySelector(".scroll_target"); // Parent element to animate
  const trigger = wrap.querySelector(".scroll_trigger"); // Child element as the trigger

  if (target && trigger) {
    gsap.fromTo(
      target,
      { y: "-50%" }, // Start position (50% up, invisible)
      {
        y: "0px", // End position (original position)
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: trigger, // Scroll trigger element
          start: "top bottom", // Start animation when trigger enters viewport
          end: "top top", // End animation when trigger exits viewport
          scrub: true, // Smooth animation while scrolling
        },
      }
    );
  }
});
