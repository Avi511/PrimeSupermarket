let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginButton = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

document.querySelector('#search_btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginButton.classList.remove('active');
    navbar.classList.remove('active');
};

document.querySelector('#cart_btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginButton.classList.remove('active');
    navbar.classList.remove('active');
};

document.querySelector('#login_btn').onclick = () => {
    loginButton.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
};

document.querySelector('#menu_btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginButton.classList.remove('active');
};

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginButton.classList.remove('active');
    navbar.classList.remove('active');
};

var swiper = new Swiper(".product-slide", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableInteraction:false,
    },
    centeredSlides : true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
