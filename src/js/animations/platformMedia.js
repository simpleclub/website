import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const leftElement = document.querySelector(".home-platform_media_left");
const rightElement = document.querySelector(".home-platform_media_right");
const middleElement = document.querySelector(".home-platform_media_middle");

// Initial animation for all elements
gsap.fromTo(
  [leftElement, middleElement, rightElement],
  {
    opacity: 0,
    perspective: "1200px",
    translateY: "50px",
    scale: 0.9,
    rotateX: "10deg",
  },
  {
    opacity: 1,
    translateY: "0px",
    scale: 1,
    rotateX: "0deg",
    duration: 1,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".home-platform_media",
      start: "top bottom", // Start animation when the section enters the viewport
      end: "top center", // End when the top of the section reaches the center
    },
  }
);

function createParallaxEffect(container, index) {
    let image = container.querySelector("img");

    // Check if the image exists before applying animation
    if (!image) return;

    gsap.fromTo(
        image,
        { y: "10%" }, // Start slightly down
        {
            y: "-10%", // Move up as scrolling occurs
            ease: "none",
            delay: index * 0.3, // Add a slight stagger effect
            scrollTrigger: {
                trigger: container,
                start: "top bottom", // Start when container enters viewport
                end: "center top", // End when container leaves viewport
                scrub: true, // Smooth scrolling effect
                invalidateOnRefresh: true, // Recalculate on resize
            },
        }
    );
}

// Select all elements with the parallax effect and apply animation with stagger
document.querySelectorAll("[image-parallax]").forEach((container, index) => {
    createParallaxEffect(container, index);
});

// Select the SVG elements
const svgs = document.querySelectorAll(
  ".home-platform_media_info_right-small-svg, .home-platform_media_info_right-svg, .home-platform_media_info_left-large-svg, .home-platform_media_info_left-svg" 
);

// Create the animation
gsap.fromTo(
  svgs,
  { y: 0 }, // Initial position
  {
    y: 15, // Move up and down by 10px
    duration: 2.5, // Animation duration
    repeat: -1, // Infinite loop
    yoyo: true, // Moves back and forth
    ease: "power1.inOut", // Smooth easing
    stagger: 0.5, // 0.2s delay between animations
    scrollTrigger: {
      trigger: svgs, // Start animation when these elements enter the viewport
      start: "top 90%", // When top of the element reaches 90% of the viewport
      toggleActions: "play none none none", // Play when in view
    },
  }
);

