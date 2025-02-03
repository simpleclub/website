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
  gsap.killTweensOf([circleLeft, circleRight]);

  // GSAP animation for left circle
  gsap.fromTo(
    circleLeft,
    { opacity: 0, x: 0 },
    {
      opacity: 1,
      x: isDesktop ? "90%" : "155%",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".circles",
        start: "top center", // Start when the top of .circles hits the center of the viewport
        end: "center center", // End when the center of .circles reaches the viewport's center
        scrub: true, // Smooth animation while scrolling
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
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".circles",
        start: "top center", // Start when the top of .circles hits the center of the viewport
        end: "center center", // End when the center of .circles reaches the viewport's center
        scrub: true, // Smooth animation while scrolling
      },
    }
  );


  gsap.fromTo(
    circleLogo,
    { opacity: 0, x: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".circles",
        start: "top center", // Start when the top of .circles hits the center of the viewport
        end: "center center", // End when the center of .circles reaches the viewport's center
        scrub: true, // Smooth animation while scrolling
      },
    }
  );
};




// Initial call to set up animations
createAnimations();

// Recreate animations on resize for responsiveness
window.addEventListener("resize", createAnimations);

