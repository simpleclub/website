import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const leftElement = document.querySelector(".product-platform_media_left");
const rightElement = document.querySelector(".product-platform_media_right");
const middleElement = document.querySelector(".product-platform_media_middle");

// Animation for the middle element (fade in from bottom)
gsap.fromTo(
  middleElement,
  {
    opacity: 0,
    translateY: "50px", // Move up
  },
  {
    opacity: 1,
    translateY: "0px",
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".product-platform_media",
      start: "top bottom",
      end: "top center",
    },
  }
);

// Animation for the right element (enter from right with slight rotation)
gsap.fromTo(
  rightElement,
  {
    opacity: 0,
    translateX: "80px", // Move in from the right
    rotateY: "-50deg", // Slightly rotated, right side closer to the user
    scale: 1.3,
  },
  {
    scale: 1,
    opacity: 1,
    translateX: "0px",
    rotateY: "0deg",
    duration: 1.7,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".product-platform_media",
      start: "top bottom",
      end: "top center",
    },
  }
);

// Animation for the left element (enter from left with slight rotation)
gsap.fromTo(
  leftElement,
  {
    opacity: 0,
    translateX: "-80px", // Move in from the left
    rotateY: "50deg", // Slightly rotated, left side closer to the user
    scale: 1.3,
  },
  {
    scale: 1,
    opacity: 1,
    translateX: "0px",
    rotateY: "0deg",
    duration: 1.7,
    ease: "power3.out",
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".product-platform_media",
      start: "top bottom",
      end: "top center",
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
  ".product-platform_media_info_right-small-svg, .product-platform_media_info_right-svg, .product-platform_media_info_left-large-svg, .product-platform_media_info_left-svg" 
);

// Create the animation
gsap.fromTo(
  svgs,
  { y: 0 }, // Initial position
  {
    y: 20, // Move up and down by 10px
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

