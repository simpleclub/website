// CSS import
import '../../../css/components/roiRechner/_roi-accordion.scss'

console.log('aaa');

let roiTopAccordions = document.querySelectorAll('.roi-all_info_top');
roiTopAccordions.forEach(item => {
    item.addEventListener('click', e => {
        if (e.currentTarget.classList.contains('open')) {
            e.currentTarget.classList.remove('open');
        } else {
           // roiTopAccordions.forEach(el => el.classList.remove('open')); // Fix: close all other open elements
            e.currentTarget.classList.add('open');
        }
    });
});

let roiBottomAccordion = document.querySelectorAll('.roi-all_info_accordion');
roiBottomAccordion.forEach(item => {
    item.addEventListener('click', e => {
        if (e.currentTarget.classList.contains('open')) {
            e.currentTarget.classList.remove('open');
        } else {
         //   roiBottomAccordion.forEach(el => el.classList.remove('open')); // Fix: close all other open elements
            e.currentTarget.classList.add('open');
        }
    });
});
