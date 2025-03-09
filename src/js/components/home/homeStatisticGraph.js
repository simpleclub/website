import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Select the trigger element
const graphTrigger = document.querySelector(".home-statistic_graph");

if (graphTrigger) {
    ScrollTrigger.create({
        trigger: graphTrigger,
        start: "top 80%", // Trigger when the section enters 80% of the viewport
        once: true, // Run only once
        onEnter: () => {
            // Animate Bar Widths
            gsap.utils.toArray(".home-statistic_graph_simple, .home-statistic_graph_gray").forEach((bar) => {
                gsap.to(bar, {
                    maxWidth: "650px",
                    duration: 5,
                    ease: "power2.out",
                });
            });

            // Animate Numbers Counting Up (Including Decimals)
            gsap.utils.toArray(".home-statistic_graph_numbers, .home-statistic_graph_numbers-other").forEach((numberWrapper) => {
                const numberElement = numberWrapper.querySelector("p");
                const finalValue = parseFloat(numberElement.textContent); // Get the original number
                const duration = 2; // Animation duration in seconds

                gsap.fromTo(
                    numberElement,
                    { innerText: 0 },
                    {
                        innerText: finalValue,
                        duration: duration,
                        ease: "power2.out",
                        snap: { innerText: 0.1 }, // Snap to 1 decimal place
                        onUpdate: function () {
                            numberElement.textContent = `${parseFloat(this.targets()[0].innerText).toFixed(1)}%`;
                        }
                    }
                );
            });
        }
    });
}
