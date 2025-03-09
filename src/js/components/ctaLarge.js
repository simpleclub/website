import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const ctaMedia = document.querySelector(".cta-large_media");

if (ctaMedia) {
    // Set perspective on parent
    ctaMedia.style.perspective = "1000px";
    
    gsap.fromTo(
        ".cta-large_media img", 
        {
            y: 200,          // Start below
            rotateX: 45,     // Tilt effect (bottom closer to user)
            opacity: 0
        },
        {
            y: 0,            // Move to original position
            rotateX: 0,      // Remove tilt effect
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.4,    // Stagger images for a nice effect
            scrollTrigger: {
                trigger: ".cta-large_media",
                start: "top 85%", // When the element enters 80% of the viewport
                toggleActions: "play none none reverse" // Smooth reverse animation
            }
        }
    );
}

