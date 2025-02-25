import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const background = document.querySelector(".ext-dida_background");
const columns = document.querySelectorAll("[class^='ext-dida_col-']");

// Define translation values for each column
const columnOffsets = [50, 70, 90, 120, 150];

if (background && columns.length) {
  columns.forEach((col, index) => {
    const blocks = col.querySelectorAll(".ext-dida_block");

    // Block animation (fade-in & move-up)
    blocks.forEach((block, blockIndex) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: background,
          start: "top 80%", // Starts when background enters viewport
          toggleActions: "play none none none", // Plays once
        },
      });

      // Opacity animation (fast 0.5s fade-in)
      tl.fromTo(block, { opacity: 0 }, { opacity: 1, duration: 0.5 }, blockIndex * 0.15);

      // Y movement animation (slow movement for 2s)
      tl.fromTo(block, { y: 150 }, { y: 0, duration: 2, ease: "power2.out" }, "-=0.3");
    });

    // Column movement animation (translates up as background enters)
    gsap.fromTo(
      col,
      { y: columnOffsets[index] || 50 }, // Default to 50px if index exceeds array length
      {
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: background,
          start: "top bottom", // Start when background enters screen
          end: "bottom top", // Ends when background leaves screen
          scrub: 1.5, // Smooth effect as user scrolls
        },
      }
    );
  });
}
