import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function animateContentBlocks() {
  const rightBlocks = document.querySelectorAll(".home-time_content_right_block");
  const images = document.querySelectorAll(".home-time_content_left_block-image");

  // Ensure both right blocks and images exist before running animation
  if (rightBlocks.length === 0 || images.length === 0) return;

  rightBlocks.forEach((block, index) => {
    ScrollTrigger.create({
      trigger: block,
      start: "top 50%", // Trigger when top of block reaches 50% of viewport
      end: "bottom 50%",
      onEnter: () => {
        gsap.to(images, { opacity: 0, duration: 0.3, ease: "power1.out" }); // Hide all images
        gsap.to(images[index], { opacity: 1, duration: 0.6, ease: "power2.out" }); // Show only current image
        gsap.to(block, { opacity: 1, duration: 0.6, ease: "power2.out" }); // Fade in right block
      },
      onLeaveBack: () => {
        gsap.to(images, { opacity: 0, duration: 0.3, ease: "power1.out" }); // Hide all images when scrolling up
      }
    });
  });
}

animateContentBlocks();
