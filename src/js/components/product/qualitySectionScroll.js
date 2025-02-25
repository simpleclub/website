import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector(".exp-quality_screens");
const cols = document.querySelectorAll(".exp-quality_screens-col");
const mobileElement = document.querySelector(".exp-quality_screens_mobile");
console.log('mobileElement',mobileElement)

cols.forEach((col) => {
  const blocks = col.querySelectorAll(".exp-quality_screens-col_block");

  // Animate column movement
  gsap.to(col, {
    translateY: (index, target) => {
      return gsap.utils.interpolate(0, -14, ScrollTrigger.progress);
    },
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5,
    },
    stagger: 0.2,
  });

  // Animate blocks inside column with proper mapping
  gsap.to(blocks, {
    translateY: (index, target) => {
      return gsap.utils.interpolate(12, -12, ScrollTrigger.progress);
    },
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5,
    },
    stagger: 0.1,
  });
});

// ✅ Animate .exp-quality_screens_mobile with the same smooth transition
if (mobileElement) {
  gsap.fromTo(
    mobileElement,
    { translateY: "30rem" }, // Start position (higher up)
    {
      translateY: "0", // Target position (original position in CSS)
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    }
  );
}
