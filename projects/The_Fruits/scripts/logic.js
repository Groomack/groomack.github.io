"use strict";(function() {
    let idFirst = '',
        idSecond = '';

function logic(event) {
    if (idFirst == '') {
        idFirst = event.target.id;
        event.target.src = images[event.target.id];
        event.target.setAttribute('data-checked', 'true');
    } else {
        if (event.target.hasAttribute('data-checked')) {
            return;
        }
        idSecond = event.target.id;
        event.target.src = images[event.target.id];
        field.removeEventListener('click', checkTargetEvent);

        setTimeout(compareId, 500);
    }
}
function compareId() {
    if (idFirst !== idSecond) {
        field.querySelectorAll(`#${idFirst}`).forEach(function(elem) {
            elem.src = 'images/hide_logo.svg';
            elem.removeAttribute('data-checked');
        });
        field.querySelectorAll(`#${idSecond}`).forEach(function(elem) {
            elem.src = 'images/hide_logo.svg';
        });
        idFirst = '';
        idSecond = '';
    } else {
        field.querySelectorAll(`#${idFirst}`).forEach(function(elem) {
            elem.style.opacity = '0';
            elem.id = 'ok';            
        });
        idFirst = '';
        idSecond = '';
        if ( isEmptyField() ) {
            field.innerHTML = '<div class="button" id="again">Еще раз</div>';
            field.classList.remove('field');
            field.classList.add('endGame');
            field.querySelector('#again').addEventListener('click', refreshField);
        }
    }
    field.addEventListener('click', checkTargetEvent);
}
    //New game after end current game
function refreshField() {
    field.innerHTML = '';
    field.classList.remove('endGame');
    field.classList.add('field');
    this.removeEventListener('click', refreshField);
    
    newGame();
}
    //Check field
function isEmptyField() {
    if (field.querySelectorAll('#ok').length == imagesKey.length * 2) {
        return true;
    } else {
        return false;
    }
}
window.logic = logic;
}());