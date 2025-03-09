import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin"; // Import the missing plugin

// Register plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

function createTypingEffect() {
  const typingElement = document.querySelector(".typing-text");

  // Ensure the element exists before running the animation
  if (!typingElement) return;

  const text = typingElement.innerText;
  typingElement.innerHTML = `<span class="typing-text"></span><span class="cursor">|</span>`; // Add a cursor

  const typingTextElement = typingElement.querySelector(".typing-text");
  const cursorElement = typingElement.querySelector(".cursor");

  // Typing animation
  gsap.to(typingTextElement, {
    text: text, // Animate the text content
    duration: 5, // 3-second animation
    ease: "power1.out",
    scrollTrigger: {
      trigger: typingElement,
      start: "top 80%", // Start animation when element enters viewport
      once: true, // Run animation only once
      onComplete: () => {
        // Keep cursor blinking after typing finishes
        gsap.to(cursorElement, {
          opacity: 0,
          repeat: -1,
          yoyo: true,
          duration: 0.5,
        });
      },
    },
  });

  // Cursor blinking while typing
  gsap.to(cursorElement, {
    opacity: 0,
    repeat: -1,
    yoyo: true,
    duration: 0.5,
  });
}


createTypingEffect();

