import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

const circleLeft = document.querySelector(".circle_left");
const circleRight = document.querySelector(".circle_right");
const circleLogo = document.querySelector(".circles_wrap_logo");

// Function to create animations
const createAnimations = () => {
  const isDesktop = window.innerWidth > 767;

  // Clear existing animations before creating new ones (important for resize)
  gsap.killTweensOf([circleLeft, circleRight, circleLogo]);

  // GSAP animation for left circle
  gsap.fromTo(
    circleLeft,
    { opacity: 0, x: 0 },
    {
      opacity: 1,
      x: isDesktop ? "90%" : "155%",
      duration: 3, // Fixed duration
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".circles",
        start: "bottom 80%", // Starts when the bottom of `.circles` is at 80% of the viewport height
        once: true, // Ensures the animation runs only once
      },
    }
  );

  // GSAP animation for right circle
  gsap.fromTo(
    circleRight,
    { opacity: 0, x: 0 },
    {
      opacity: 1,
      x: isDesktop ? "-90%" : "-155%",
      duration: 3, // Fixed duration
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".circles",
        start: "bottom 80%",
        once: true,
      },
    }
  );

  // GSAP animation for the logo
  gsap.fromTo(
    circleLogo,
    { opacity: 0, x: 0 },
    {
      opacity: 1,
      duration: 3, // Fixed duration
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".circles",
        start: "bottom 80%",
        once: true,
      },
    }
  );
};

// Initial call to set up animations
createAnimations();

// Recreate animations on resize for responsiveness
window.addEventListener("resize", createAnimations);
