
let accordions = document.querySelectorAll('.home-apprentice_accordion');
accordions.forEach(accordion => {
  let items = accordion.querySelectorAll('.home-apprentice_accordion_block .home-apprentice_accordion_question');

  items.forEach(item => {
    item.addEventListener('click', e => {
      if (e.currentTarget.classList.contains('open')) {
        e.currentTarget.classList.remove('open');
      } else {
        items.forEach(el => {
          el.classList.remove('open');
        });
        e.currentTarget.classList.add('open');
      }
    });
  });
});
