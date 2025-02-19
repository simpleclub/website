
const buttons = document.querySelectorAll(".aus-platform-btn");
const blocks = document.querySelectorAll(".aus-platform_branch_content_block");

buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
        // Remove active classes from all buttons and blocks
        document.querySelector(".aus-platform-btn.active-tab")?.classList.remove("active-tab");
        document.querySelector(".aus-platform_branch_content_block.active-block")?.classList.remove("active-block");

        // Add active classes to the clicked button and corresponding block
        button.classList.add("active-tab");
        blocks[index].classList.add("active-block");
    });
});

