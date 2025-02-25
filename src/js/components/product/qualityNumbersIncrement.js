import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const content = document.querySelector(".exp-quality_info_content");
const blocks = document.querySelectorAll(".exp-quality_info_block");

if (content && blocks.length) {
  // Animation for blocks (fade in + move up)
  gsap.fromTo(
    blocks,
    { opacity: 0, y: 50 }, // Start hidden & move up 50px
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2, // Delays each block slightly
      ease: "power2.out",
      scrollTrigger: {
        trigger: content,
        start: "top 90%", // ✅ Animation starts when content enters the viewport
        toggleActions: "play none none none", // ✅ Only plays once, no reverse
        once: true, // ✅ Ensures it never restarts
      },
    }
  );


  // Number animation inside first paragraph of each block
  blocks.forEach((block) => {
    const numberElement = block.querySelector("p:first-child");
    if (!numberElement) return;

    const originalText = numberElement.textContent.trim();
    const extractedNumber = parseInt(originalText.replace(/\D+/g, ""), 10);

    if (isNaN(extractedNumber)) return;

    const counter = { value: 0 };

    gsap.to(counter, {
      value: extractedNumber,
      duration: 3,
      ease: "power1.out",
      onUpdate: function () {
        const increment = extractedNumber > 1000 ? 100 : extractedNumber > 100 ? 10 : 1;
        const formattedNumber = Math.min(Math.floor(counter.value / increment) * increment, extractedNumber)
          .toLocaleString("de-DE"); // ✅ Adds dot for thousands
        numberElement.textContent = formattedNumber + " +";
      },
      scrollTrigger: {
        trigger: content,
        start: "top 80%",
        once: true,
      },
    });
  });
}
