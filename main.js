function toggleBurger(){
    var burger = $('.burger');
    var menu = $('.navbar-menu');
    burger.toggleClass('is-active');
    menu.toggleClass('is-active');
}

function textRefesh(){
    let text = ["Quote 1", "Quote 2", "Quote 3", "Quote 4", "Quote 5", "Quote 6"]
    let index = Math.floor(Math.random() * text.length)
    let displayTxt = text[index]
    document.getElementById('quotes').innerHTML = displayTxt
}