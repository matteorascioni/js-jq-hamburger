// APERTURA MENU
var hambMenu = $('.fa-bars');

hambMenu.click( function () {
    $('.hamburger-menu').fadeIn(300);
});


// CHUSURA MENU
var closeMenu = $('.fa-times');

closeMenu.click( function () {
    $('.hamburger-menu').fadeOut(300);
});
