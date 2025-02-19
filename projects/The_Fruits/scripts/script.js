"use strict";

let images = {
    'card1' :'images/apple.svg',
    'card2' :'images/banana.svg',
    'card3' :'images/blueberries.svg',
    'card4' :'images/cherry.svg',
    'card5' :'images/grape.svg',
    'card6' :'images/lemon.svg',
    'card7' :'images/pineapple.svg',
    'card8' :'images/plum.svg',
    'card9' :'images/strawberry.svg',
    'card10' :'images/watermelone.svg',
    'card11' :'images/avocado.svg',
    'card12' :'images/maracuja.svg',
    'card13' :'images/orange.svg',
    'card14' :'images/peach.svg',
    'card15' :'images/tamarindo.svg'
},
    imagesKey = ['card1', 'card2', 'card3', 'card4',
                 'card5', 'card6', 'card7', 'card8', 
                 'card9', 'card10', 'card11', 'card12',
                 'card13', 'card14', 'card15'],
    field = document.querySelector('div.field'),
    out = '';
    //Events
document.addEventListener('DOMContentLoaded', newGame);
document.addEventListener('DOMContentLoaded', showModal);
document.addEventListener('keydown', fullScreenMode); 
function newGame() {
    imagesKey = shuffleKeys(imagesKey);
    createCards();
    imagesKey = shuffleKeys(imagesKey);
    createCards();
    field.innerHTML += out;
    out = '';
    field.addEventListener('click', checkTargetEvent);
};
    //Show Modal
function showModal() {
    setTimeout(function() {
        document.querySelector('.modal').style.cssText = 'opacity : 1; bottom : 50px;';
        return setTimeout(function(){
            document.querySelector('.modal').style.cssText = 'opacity : 0; bottom : -60px;';
        }, 4000);
    }, 3000);
}
    //Full Screen
function fullScreenMode(event) {
    if (event.keyCode == 13) {
        document.documentElement.requestFullscreen();
    }
}
    //Check click on card
function checkTargetEvent(event) {
    if (event.target.tagName == 'DIV') {
        return
    } else {
        if (event.target.id == 'ok') {
            return;
        } else {
            let copyEvent = event; 
            logic(copyEvent);
        }
    }
}
    //Create tags
function createCards() {
    imagesKey.forEach(function(elem) {
        out += `<img class="card" id="${elem}" src="images/hide_logo.svg" alt="pic_Card" \n>`;
    });
}
    //Shuffle keys
function shuffleKeys(arr) {
    let currentIndex = arr.length,
        tempValue,
        randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        tempValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = tempValue;
    }
    return arr;
}