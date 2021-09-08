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


// menu

