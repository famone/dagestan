import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

document.querySelector('.scroll-tracker').animate(
    { transform: ['scaleX(0)', 'scaleX(1)']},
    { duration: 1, // Totally arbitrary!
      fill: 'both',
      timeline: new ScrollTimeline({
          scrollOffsets: [
            CSS.percent(0),
            CSS.percent(100)
          ]
      })
    });

// CARDS EVENTS
const tour_card = document.querySelectorAll('.tour-card');
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

// BURGER
const burger_btn = document.querySelector('.burger')
const burger_menu = document.querySelector('.burger-menu')
const close_menu = document.querySelector('.close-menu')
const burger_order = burger_menu.querySelector('.order-btn')
const burger_ul = burger_menu.querySelector('ul')

burger_btn.addEventListener('click', function(){
    burger_menu.classList.toggle('active')
})

close_menu.addEventListener('click', function(){
    burger_menu.classList.toggle('active')
})

burger_order.addEventListener('click', function(){
    burger_menu.classList.toggle('active')
})
burger_ul.addEventListener('click', function(){
    burger_menu.classList.toggle('active')
})

// ADD MORE TOURS FOR VIEW

const add_more_btn = document.querySelector('.load-more')
const tours_array = document.querySelector('.tours-array')

add_more_btn.addEventListener('click', function(){
    const new_tour = document.createElement('div')
    new_tour.className = 'col-lg-4 col-sm-6'
    new_tour.innerHTML = `<div class="tour-card">
                            <img class="w-100 mb-16" src="./img/Rectangle1.jpg" alt="">
                            <h3>Тур с местным гидом-водителем</h3>
                            <p class="small-txt mb-16 collapsed">
                                Тур с местным гидом-водителем. Тур с местным гидом-водителем. Pulvinar magna purus semper id est lacus. Aenean morbi at eros curabitur volutpat. Тур с местным гидом-водителем. Pulvinar magna purus semper id est lacus. Aenean morbi at eros curabitur volutpat. Maecenas commodo integer massa ac ornare sed dui. Nunc suspendisse urna, lorem pharetra, sit. Aenean morbi at eros curabitur volutpat. Maecenas commodo integer massa ac ornare sed dui. Nunc suspendisse urna, lorem pharetra, sit. Aenean morbi at eros curabitur volutpat. Maecenas commodo integer massa ac ornare sed dui. Nunc suspendisse urna, lorem pharetra, sit. Aenean morbi at eros curabitur volutpat. Maecenas commodo integer massa ac ornare sed dui. Nunc suspendisse urna, lorem pharetra, sit.
                            </p>
                            <div class="d-flex">
                                <button class="order-btn me-2 more">Подробнее</button>
                                <a href="#submit"><button class="order-btn">Заказать тур</button></a>
                            </div>
                        </div>`
    tours_array.appendChild(new_tour)
})