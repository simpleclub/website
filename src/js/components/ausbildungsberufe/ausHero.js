import '../../../css/components/ausbildungsberufe/_aus-hero.scss'


let heroBlocks = document.querySelectorAll(".aus-hero_background .aus-hero_block");

heroBlocks.forEach((block, index) => {
    block.style.animation = `fadeInLeftAngled 0.8s ease-out forwards`;
    block.style.animationDelay = `${index * 0.1}s`; // Staggered delay
});
