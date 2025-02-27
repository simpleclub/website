
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


gsap.from(".studie-cta_media-image", {
  opacity: 0,
  x: 150, /* Start off-screen to the right */
  rotateY: 50, /* More angled perspective */
  scale: 1.2, /* Appears closer */
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".studie-cta",
    start: "top 80%",
    toggleActions: "play none none reverse",
  }
});