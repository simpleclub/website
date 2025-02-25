import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const platformMedia = document.querySelector(".exp-platform_media");
const device = document.querySelector(".exp-platform_media_device");
const infoElements = document.querySelectorAll(
  ".exp-platform_info-1, .exp-platform_info-2, .exp-platform_info-3, .exp-platform_info-4, .exp-platform_info-5"
);

if (platformMedia && device) {
  gsap.fromTo(
    device,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: platformMedia,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    }
  );
}

if (infoElements.length) {
  gsap.fromTo(
    infoElements,
    { opacity: 0, y: 20 }, // Start hidden & slightly lower
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.3, // Delay between elements
      scrollTrigger: {
        trigger: platformMedia,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    }
  );
}
