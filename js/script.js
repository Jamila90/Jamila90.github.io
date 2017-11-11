"use strict";
var modal = document.querySelector(".modal");
var modalForm = document.querySelector(".modal__form");
var topMenu = document.querySelector(".top-menu");
var topMenuToggle = document.querySelector(".main-header__toggle");

document.addEventListener('click', function(evt) {
  var el = evt.target;
  while (el !== null) {
    if (el.classList.contains('modal-button')) {
      evt.preventDefault();
      modal.classList.add('modal--show');
    }
    el = el.parentElement
  }
});

if(modal) {
    modal.addEventListener("click", function () {
    modal.classList.remove("modal--show");
    });
};

if(modalForm) {
modalForm.addEventListener("click", function (evt) {
    evt.stopPropagation();
  });
};
    
topMenu.classList.remove("top-menu--nojs");

topMenuToggle.addEventListener("click", function() {
        topMenu.classList.toggle("top-menu--closed");
});

topMenuToggle.addEventListener("click", function() {
        topMenuToggle.classList.toggle("main-header__toggle--closed");
});