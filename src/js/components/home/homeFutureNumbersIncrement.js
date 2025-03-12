import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function animateNumbers(el) {
  const text = el.textContent.trim();
  const numberMatch = text.match(/[\d,.]+/); // Extract number part

  if (!numberMatch) return;

  let targetNumber = parseInt(numberMatch[0].replace(/\./g, ""), 10); // Convert to integer

  // Determine increment step size
  let increment = targetNumber >= 1000 ? 100 : targetNumber < 100 ? 1 : 10;

  let obj = { value: 0 }; // Create an object to store the animation value

  gsap.to(obj, {
    value: targetNumber,
    duration: 2,
    ease: "power1.out",
    onUpdate: function () {
      el.textContent = `${formatNumber(Math.round(obj.value))}+`;
    }
  });
}

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Apply ScrollTrigger to all elements
document.querySelectorAll(".home-future_numbers-text").forEach((el) => {
  ScrollTrigger.create({
    trigger: el,
    start: "top 95%",
    once: true,
    onEnter: () => animateNumbers(el),
  });
});
