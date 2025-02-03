import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

function animateCircularMotion() {
    const elements = document.querySelectorAll(".home-ai_star");

    if (elements.length === 0) return;

    elements.forEach((element, index) => {
        const radius = 50 + index * 10;
        const duration = 10 + index * 2;  // Making the movement slower
        const rotationDuration = duration;  // Same duration for rotation effect

        gsap.to(element, {
            motionPath: {
                path: [
                    { x: Math.cos(0) * radius, y: Math.sin(0) * radius },
                    { x: Math.cos(Math.PI / 2) * radius, y: Math.sin(Math.PI / 2) * radius },
                    { x: Math.cos(Math.PI) * radius, y: Math.sin(Math.PI) * radius },
                    { x: Math.cos((3 * Math.PI) / 2) * radius, y: Math.sin((3 * Math.PI) / 2) * radius },
                    { x: Math.cos(2 * Math.PI) * radius, y: Math.sin(2 * Math.PI) * radius }
                ],
                autoRotate: true  // This makes the elements rotate with the path
            },
            duration: duration,
            repeat: -1,  // Make the animation repeat infinitely
            ease: "power1.inOut",  // Smoother easing for the motion
            opacity: 0.3,  // Fade the element as it moves
        });

        // Add additional rotation on itself during the movement
        gsap.to(element, {
            rotation: 360,  // Rotate 360 degrees during the animation
            duration: rotationDuration,
            repeat: -1,  // Keep rotating
            ease: "none"  // Constant speed for the rotation
        });
    });
}

animateCircularMotion();
