document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.menu__close');

    hamburger.addEventListener('click', function() {
       return menu.classList.add('active');
    })

    close.addEventListener('click', function() {
       return menu.classList.remove('active');})
});
   const counters = document.querySelectorAll('.skills__rating-counter');
   const lines = document.querySelectorAll('.skills__rating-line span');

   counters.forEach((item, i) => {
      lines[i].style.width = item.innerHTML;
   });