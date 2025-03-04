import '../../css/components/_navbar.scss';
import gsap from "gsap";

const dropdowns = document.querySelectorAll(".nav-menu_dropdown");
const navMenu = document.querySelector(".nav-menu");
const mobileDropdown = document.querySelector(".mobile-dropdown");
const mobileDropdownContent = document.querySelector(".mobile-dropdown_content");
const backButtons = document.querySelectorAll(".nav_drop_back");
const closeButtons = document.querySelectorAll(".nav_drop_block_close");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const dropWrappers = document.querySelectorAll(".nav_drop-wrapper");
const navDrops = document.querySelectorAll(".nav_drop");
const dropBackground = document.querySelector(".dropdown-background");

let isLargeScreen = null;
let resizeTimeout;

// Function to get the movement value based on screen width
const getMovementValue = () => window.innerWidth < 480 ? "-100vw" : "-400px";

// Function to handle dropdown hover (Large screens)
const handleMouseEnter = (event) => {
  if (!isLargeScreen) return;

  const dropdown = event.currentTarget;
  const dropWrapper = dropdown.querySelector(".nav_drop-wrapper");
  const navDrop = dropWrapper.querySelector(".nav_drop");

  dropWrapper.style.display = "block";

  gsap.to(dropWrapper, { opacity: 1, duration: 0.3, ease: "power2.out" });
  gsap.to(navDrop, { x: 0, y: 0, z: 0, rotateX: 0, duration: 0.3, ease: "power2.out" });

  dropBackground.style.opacity = "100";
  dropBackground.style.display = "block";
};

const handleMouseLeave = (event) => {
  if (!isLargeScreen) return;

  const dropdown = event.currentTarget;
  const dropWrapper = dropdown.querySelector(".nav_drop-wrapper");
  const navDrop = dropWrapper.querySelector(".nav_drop");

  gsap.to(dropWrapper, { opacity: 0, duration: 0.3, ease: "power2.out", onComplete: () => {
    dropWrapper.style.display = "none";
  }});

  gsap.set(navDrop, { x: 0, y: 30, z: 0, rotateX: 10 });

  dropBackground.style.opacity = "0";
  dropBackground.style.display = "none";
};

// Function to handle dropdown click (Small screens)
const handleDropdownClick = (event) => {
  if (isLargeScreen) return;

  event.preventDefault();
  event.stopPropagation();

  const dropdown = event.currentTarget;
  const dropInner = dropdown.querySelector(".nav_drop_inner");

  if (!dropInner || !mobileDropdownContent) return;

  // Clear existing content inside `mobile-dropdown_content`
  mobileDropdownContent.innerHTML = "";

  // Copy `.nav_drop_inner` into `mobile-dropdown_content`
  mobileDropdownContent.appendChild(dropInner.cloneNode(true));

  const moveValue = getMovementValue();

  // Move elements
  gsap.to(navMenu, { left: moveValue, duration: 0.3, ease: "power2.out" });
  gsap.to(mobileDropdown, { inset: `0% 0px auto auto`, duration: 0.3, ease: "power2.out" });

  mobileDropdown.style.display = "block";
};

// Function to handle back button click
const handleBackClick = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const moveValue = getMovementValue();

  gsap.to(mobileDropdown, { inset: `0% ${moveValue} auto auto`, duration: 0.3, ease: "power2.out", onComplete: () => {
    mobileDropdownContent.innerHTML = ""; // Clear content only after movement
  }});

  gsap.to(navMenu, { left: "0px", duration: 0.3, ease: "power2.out" });
};

// Function to handle close button click
const handleCloseClick = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const moveValue = getMovementValue();

  gsap.to(mobileDropdown, { inset: `0% ${moveValue} auto auto`, duration: 0.3, ease: "power2.out", onComplete: () => {
    mobileDropdownContent.innerHTML = ""; // Clear content after animation
  }});

  gsap.to(navMenu, { left: "0px", duration: 0.3, ease: "power2.out" });

  // Trigger click on hamburger button
  if (hamburgerBtn) {
    hamburgerBtn.click();
  }
};

// Function to check screen size and update event listeners & styles
const checkScreenSize = () => {
  const newSize = window.innerWidth > 991;
  
  // Prevent redundant updates
  if (isLargeScreen === newSize) return;
  isLargeScreen = newSize;

  // Ensure proper layout reset
  navMenu.style.transform = "unset";

  if (isLargeScreen) {
    dropdowns.forEach(dropdown => dropdown.removeEventListener("click", handleDropdownClick));

    dropdowns.forEach(dropdown => {
      dropdown.addEventListener("mouseenter", handleMouseEnter);
      dropdown.addEventListener("mouseleave", handleMouseLeave);
    });

    dropWrappers.forEach(wrapper => gsap.set(wrapper, { opacity: 0 }));
    navDrops.forEach(drop => gsap.set(drop, { x: 0, y: 30, z: 0, rotateX: 10 }));

  } else {
    dropdowns.forEach(dropdown => {
      dropdown.removeEventListener("mouseenter", handleMouseEnter);
      dropdown.removeEventListener("mouseleave", handleMouseLeave);
      dropdown.addEventListener("click", handleDropdownClick);
    });

    backButtons.forEach(button => button.addEventListener("click", handleBackClick));
    closeButtons.forEach(button => button.addEventListener("click", handleCloseClick));

    dropWrappers.forEach(wrapper => gsap.set(wrapper, { opacity: 1 }));
    navDrops.forEach(drop => gsap.set(drop, { x: 0, y: 0, z: 0, rotateX: 0 }));
  }
};

// Debounced resize event listener
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(checkScreenSize, 300);
});

// Initialize event listeners and styles on load
checkScreenSize();



///////////////
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const nav = document.querySelector(".nav");

ScrollTrigger.create({
  start: "top top", // Start tracking from the top
  end: "bottom bottom",
  onUpdate: (self) => {
    if (self.direction === 1 && self.scroll() > 100) {  
      // Scrolling down past 100px → Hide nav
      nav.style.transform = "translateY(-40px)";
      nav.style.transition = "transform 0.3s ease-out";
      nav.style.pointerEvents = "none"; // Disable interactions when hidden
    } else if (self.direction === -1 || self.scroll() <= 50) {
      // Scrolling up OR back near the top → Show nav
      nav.style.transform = "unset";
      nav.style.transition = "transform 0.3s ease-out";
      nav.style.pointerEvents = "auto"; // Re-enable interactions when visible
    }
  }
});

////////////////////////

const toggleBodyScroll = () => {
  if (hamburgerBtn.classList.contains("w--open")) {
    document.body.style.overflow = "hidden"; // Disable scroll
    document.body.style.touchAction= "none";
    dropBackground.style.opacity = "100";
    dropBackground.style.display = "block";
  } else {
    document.body.style.overflow = ""; // Enable scroll
    document.body.style.touchAction= "auto";
    dropBackground.style.opacity = "0";
    dropBackground.style.display = "none";
  }
};

// Observe class changes on hamburger button
const observer = new MutationObserver(toggleBodyScroll);
observer.observe(hamburgerBtn, { attributes: true, attributeFilter: ["class"] });

// Run once in case the class is already there on page load
toggleBodyScroll();
