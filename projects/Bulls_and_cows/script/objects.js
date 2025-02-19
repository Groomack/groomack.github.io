"use strict";

class GameField {
	constructor() {
		this.field = document.querySelector('.gameField');
		this.row = document.querySelector('.row');
		this.playerCard = document.querySelector('.playerInfo');
		this.bullsAndCows;
		this.number;
		this.tryCount = 0;
		this.playerName = 'unknown';
		this.winCount = 0;
	}

	checkIdentity() {
		if(this.bullsAndCows.bulls == 4) {
			return true;
		} else {
			return false;
		}
	}
	addPlayerInfo() {
		this.playerCard.firstElementChild.innerHTML = `Имя: ${this.playerName}`;
		this.playerCard.lastElementChild.innerHTML = `Угадано: ${this.winCount} раз`;
	}
	addWinPoint() {
		this.playerCard.lastElementChild.innerHTML = `Угадано: ${this.winCount + 1} раз`;
	}
	addNewRow() {
		let cloneRow;

		cloneRow = this.row.cloneNode(true);
		cloneRow.hidden = false;
		cloneRow.classList.add('removable');
		cloneRow.firstElementChild.innerHTML = this.tryCount;
		cloneRow.firstElementChild.nextElementSibling.innerHTML = this.number;
		cloneRow.lastElementChild.innerHTML = this.bullsAndCows['cows'];
		cloneRow.lastElementChild.previousElementSibling.innerHTML = this.bullsAndCows['bulls'];

		this.field.appendChild(cloneRow);
	}
	reset() {
		let whatRemove = document.querySelectorAll('.removable');

		this.tryCount = 0;

		for(let i = 0; i < whatRemove.length; i++) {
			this.field.removeChild(whatRemove[i]);
		}
	}
}
class Player {
	constructor(name) {
		this.name = name || 'unknown';
	}

	getName() {
		return this.name;
	}
}
class Bot {
	constructor(name) {
		this.name = name;
		this.myNumber;
		this.playerNumber;
	}
	
	makeRandomNumber() {
		let number = [],
		random = 0;

		for (let i = 0; i < 4; i++) {
			random = Math.floor( Math.random() * 10 );
			if ( number.indexOf(random) == -1 ) {
				number.push(random);
			} else {
				i--;
			};	
		}

		number = number.join('');
		this.myNumber = number;

		return number;
	}
	compare() {
		let bullsAndCows = {
				cows : 0,
				bulls : 0
			};

		for(let i = 0; i < 4; i++) {
			if ( this.myNumber.indexOf(this.playerNumber[i]) !== -1 ) {
				bullsAndCows.cows++;
			}
			if (this.myNumber[i] == this.playerNumber[i]) {
				bullsAndCows.bulls++;
			}
		}

		return bullsAndCows;
	}
	getMyNumber() {
		return this.myNumber;
	}
	getPlayerNumber() {
		return this.playerNumber;
	}
}

//Player
let player_1 = new Player;
//Bot
let bot_1 = new Bot('computer');
//Game field
let gameField = new GameField;