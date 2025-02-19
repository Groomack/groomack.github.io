'use strict';

const button = document.querySelector('#buttonAdd'); // Кнопка "Добавить"
const input = document.querySelector('#field'); // Поле ввода суммы
const cover = document.querySelector('#cover'); // Прогресс бар визуальный
const thereIs = document.querySelector('#thereIs'); // То что в копилке
const percentages = document.querySelector('#percentages'); // Прогресс бар в процентах
const contentBlock = document.querySelector('.content'); // Блок content
const footer = document.querySelector('#footer'); // Блок footer
const cleanButton = document.querySelector('#cleanButton'); // Кнопка очистить прогресс

let forCalcPersent = {i: 360, counter: 0,}; // Объект для функции calcPersent()

button.addEventListener('click', addInPiggy);
cleanButton.addEventListener('click', cleanAll);
window.addEventListener('DOMContentLoaded', getSaved);
window.addEventListener('beforeunload', saveToLocal);

// Главная функция
function addInPiggy() {
	if ( validateNaN(input.value) ) {
		if ( validateNumber(input.value) ) { // Если введенные значения соответвуют
			thereIs.innerText = parseInt(thereIs.innerText) + parseInt(input.value);
			percentages.innerText = calcPersent(thereIs.innerText) + '%';
			if ( parseInt(percentages.innerText) >= 100) {
				cover.style.width = 0 + '%';
			} else {
				cover.style.width = `${100 - parseInt(percentages.innerText)}%`;
			}

			input.value = '';
		} else {
			let alertNumber = document.querySelector('#alertNumber');

			alertNumber.style.cssText = 'opacity: 1; top: 15px; transition: 1s ease-out;';

			setTimeout(function() {
				alertNumber.style.cssText = 'opacity: 0; top: -5px; transition: 1s ease-out 2s;';
			}, 1000);
			input.value = '';
		} 
	} else {
		let alertNaN = document.querySelector('#alertNaN');

		alertNaN.style.cssText = 'opacity : 1; top: 15px; transition : 1s ease-out;';

		setTimeout(function() {
			alertNaN.style.cssText = 'opacity : 0; top : -5px; transition : 1s ease-out 2s;';
		}, 1000);
		input.value = '';
	}

	if (thereIs.innerText >= 3600) {
			footer.style.display = 'block';
			setTimeout(function() {
				contentBlock.style.cssText = 'transition: 0.5s ease-out 1s; opacity: 0;';
				footer.style.cssText += 'transition: 1s ease-out 2s; opacity: 1; top: 380px;';
			}, 10);

			window.removeEventListener('beforeunload', saveToLocal);
			window.addEventListener('beforeunload', cleanFinal);

		if (thereIs.innerText == 3600) {
			let p = document.querySelector('#footer p');
			p.style.display = 'none';
		}
	}
}

// Проверка на число
function validateNaN(value) {
	if ( isNaN(value) || value == '') {
		return false;
	} else {
		return true;
	}
}

// Проверка на положительное число
function validateNumber(value) {
	if (value <= 0) {
		return false;
	} else {
		return true;
	}
}

// Расчет процентов
function calcPersent(value) {
	return Math.round(value/3600*100);
}

// Берет информацию из локалки
function getSaved() {
	if ( localStorage.getItem('save') == 0 || localStorage.getItem('save') == undefined ) {
		return;
	} else {
		input.value = localStorage.getItem('save');
		addInPiggy.call(button);
	}
}

// Сохраняет всю инфу в локаль
function saveToLocal() {
	localStorage.setItem('save', thereIs.innerText);
}

// Очищает прогресс
function cleanAll(event) {
	event.preventDefault();

	input.value = '';
	thereIs.innerText = 0;
	percentages.innerText = 0 + '%';
	cover.style.width = '100%';
	localStorage.clear();

	forCalcPersent['i'] = 360;
	forCalcPersent['counter'] = 0;
}

// Сброс всех данных в конце
function cleanFinal() {
	input.value = '';
	thereIs.innerText = 0;
	percentages.innerText = 0 + '%';
	cover.style.width = '100%';
	localStorage.clear();

	forCalcPersent['i'] = 360;
	forCalcPersent['counter'] = 0;
}