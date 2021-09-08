
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


//hover page portfolio

const elementHover = document.querySelectorAll('.event-hover');

for (let index = 0; index < elementHover.length; index++) {

    // const contentShowed = document.querySelector('.show');
    // console.log(contentShowed);

    elementHover[index].addEventListener('mouseenter', function() {
        const parentE = this.parentElement.parentElement;
        const contentShow = parentE.children[1];
        console.log(contentShow);

        

        if(contentShow.classList.contains('show')) {
            contentShow.classList.remove('show');
            console.log("cos");
        } else {
            contentShow.classList.add('show');
        }
        
    });
}