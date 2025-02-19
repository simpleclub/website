
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


gsap.from(".cta-side_media_small-image", {
  opacity: 0,
  x: 150, /* Start off-screen to the right */
  rotateY: 50, /* More angled perspective */
  scale: 1.2, /* Appears closer */
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".cta-side_media",
    start: "top 80%",
    toggleActions: "play none none reverse",
  }
});

gsap.from(".cta-side_media_large-image", {
  opacity: 0,
  x: 200, /* Starts even further right */
  rotateY: 60, /* More perspective */
  scale: 1.3, /* Appears larger */
  duration: 1.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".cta-side_media",
    start: "top 80%",
    toggleActions: "play none none reverse",
  }
});
