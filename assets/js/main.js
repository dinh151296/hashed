
// menu 
const burgerElement = document.querySelector('.menu-sp');
const menuHidd = document.querySelector('.menu-sp__hidden');
const menuShow = document.querySelector('.menu-sp__show');

const menuSp = document.querySelector('.mobile__menu');
burgerElement.addEventListener('click', function() {
    menuHidd.classList.toggle('hidd');
    menuShow.classList.toggle('show');

    if(menuSp.classList.contains('show')) {
        menuSp.classList.remove('show');
        document.body.style.overflowY = "scroll";
    }else {
        menuSp.classList.add('show');
        document.body.style.overflowY = "hidden";
    }
});



