
const button = document.querySelector(".kun-testimonial_button");
const rightElement = document.querySelector(".kun-testimonial_right");

if (button && rightElement) {
  button.addEventListener("click", function () {
    rightElement.style.display = "flex";
    rightElement.style.opacity = "1";
    button.style.display = "none";
  });
}

  