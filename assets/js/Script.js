let menu = document.querySelector('header');
let button = document.querySelector('header button')
window.addEventListener('scroll', function(){

    menu.classList.toggle('ativo', window.scrollY > 0);
    button.classList.toggle('show', window.scrollY > 0);
   
  })

  