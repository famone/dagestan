// CARDS EVENTS

const tour_card = document.querySelectorAll('.tour-card');

console.log(tour_card)

tour_card.forEach((item) => {
    const more_btn = item.querySelector('.more');
    const text = item.querySelector('.small-txt');

    more_btn.addEventListener('click', function(){
        if(text.classList.contains('collapsed')){
            text.classList.remove('collapsed')
            more_btn.innerText = 'Закрыть'
        }else{
            text.classList.add('collapsed')
            more_btn.innerText = 'Подробнее'
        }
    })
})

// CUSTOM CURSOR

let clientX = -100;
let clientY = -100;
var innerCursor = document.querySelector(".cursor");

const initCursor = ()=>{
    document.addEventListener("mousemove", cursor);
}

const disableCursor = ()=>{
    document.removeEventListener("mousemove", cursor);
}

function cursor(e) {
    clientX = e.clientX;
    clientY = e.clientY;
}
const render = ()=>{

    innerCursor.style.top = clientY + 'px';
    innerCursor.style.left = clientX + 'px';

    requestAnimationFrame(render);
};

initCursor();
requestAnimationFrame(render);