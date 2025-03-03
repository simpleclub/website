// import '../../../css/pricing/_pricing-accordion.scss'

let accordions = document.querySelectorAll('.pricing-faq_accordion_row');

accordions.forEach(accordion => {
  let items = accordion.querySelectorAll('.pricing-faq_accordion_question');

  items.forEach(item => {
    item.addEventListener('click', () => {
      if (accordion.classList.contains('open')) {
        accordion.classList.remove('open'); // Remove "open" class from parent
      } else {
        // document.querySelectorAll('.pricing-faq_accordion_row').forEach(acc => acc.classList.remove('open')); // Close all others
        accordion.classList.add('open'); // Add "open" class to parent
      }
    });
  });
});
