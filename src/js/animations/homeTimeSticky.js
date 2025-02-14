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
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => {
        gsap.to(images, { opacity: 0, duration: 0.3, ease: "power1.out" });
        gsap.to(images[index], { opacity: 1, duration: 0.6, ease: "power2.out" });
        gsap.to(block, { opacity: 1, duration: 0.6, ease: "power2.out" });
      },
      onEnterBack: () => {
        gsap.to(images, { opacity: 0, duration: 0.3, ease: "power1.out" });
        gsap.to(images[index], { opacity: 1, duration: 0.6, ease: "power2.out" });
        gsap.to(block, { opacity: 1, duration: 0.6, ease: "power2.out" });
      },
      onLeave: () => {
        gsap.to(images[index], { opacity: 0, duration: 0.3, ease: "power1.out" });
        gsap.to(block, { opacity: 0.5, duration: 0.6, ease: "power2.out" });
      },
      onLeaveBack: () => {
        gsap.to(images[index], { opacity: 0, duration: 0.3, ease: "power1.out" });
        gsap.to(block, { opacity: 0.5, duration: 0.6, ease: "power2.out" });
      }
    });
  });
}

let resizeTimeout;

function checkScreenSize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (window.innerWidth > 767) {
      animateContentBlocks();
    } else {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }, 300);
}

// Initial check
checkScreenSize();

// Re-check on window resize
window.addEventListener("resize", checkScreenSize);
