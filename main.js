function toggleBurger(){
    var burger = $('.burger');
    var menu = $('.navbar-menu');
    burger.toggleClass('is-active');
    menu.toggleClass('is-active');
}

let quoteList = 
[
    '"No matter what people tell you, words and ideas can change the world." - Robin Williams',
    '"Continuous improvement is better than delayed perfection."',
    '"You are awesome."',
    '"Everything you want to be, you already are. You\'re simply on the path to discovering it."',
    '"Be yourself. Everyone else is already taken." - Oscar Wilde',
    '"If you fell down yesterday, stand up today." - H.G.Wells',
    '"Why fit in when you were born to stand out." - Dr Seuss',
    '"Our dreams can come true if we have the courage to pursue them." - Walt Disney',
    '"If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it\'s not." - Elon Musk',
    '"Strive not to be a success, but rather to be of value." - Albert Eintein',
    '"Your time is limited, so don’t waste it living someone else’s life." - Steve Jobs',
    '"The only way to do great work is to love the work you do." - Steve Jobs',
    '"Once you replace negative thoughts with positive ones, you\'ll start having positive results."',
    '"Do not wish for an easy life. Wish for the strength to endure a difficult one."',
    '"People are smarter than you think. Give them a chance to prove themselves."',
    '"You miss 100% of the shots you don\'t take." - Wayne Gretzky',
    '"Don\'t cry because it\'s over. Smile because it happened." - Dr Seuss',
    '"Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway."',
    '"The way you tell your story to yourself matters." - Amy Cuddy',
    '"Life is either a daring adventure, or nothing." - Helen Keller'
]

function textRefesh(){
    let index = Math.floor(Math.random() * quoteList.length)
    let displayTxt = quoteList[index]
    document.getElementById('quotes').innerHTML = displayTxt
}