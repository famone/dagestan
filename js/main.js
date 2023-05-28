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