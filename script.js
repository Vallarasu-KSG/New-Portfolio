const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

// Change header background on scroll
document.addEventListener('scroll', () => {
  const scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Close menu on link click
menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobile_menu.classList.remove('active');
  });
});


// ---------------------------------------

const name    =document.querySelectorAll("#name")
const email   =document.querySelectorAll("#email")
const message =document.querySelectorAll("#message")