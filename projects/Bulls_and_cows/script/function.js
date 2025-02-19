"use strict";

//Buttons
let continueSplashButton = document.querySelector('.slpashCuntinueButton'),
	rulesContinueButton = document.querySelector('.rulesContinueButton'),
	submitNameButton = document.querySelector('.submitNameButton'),
	botMode = document.querySelector('.botMode'),
	makeAMoveButton = document.querySelector('.makeAMoveButton'),
	playAgainButton = document.querySelector('.playAgainButton'),
	//Windows
	splashScreen = document.querySelector('.splashScreen'),
	rules = document.querySelector('.rules'),
	newGame = document.querySelector('.newGame'),
	gameMode = document.querySelector('.gameMode'),
	inputNotice = document.querySelector('.inputNotice'), //предупреждение о некоректном вводе имени
	wrapper = document.querySelector('.wrapper'),
	win = document.querySelector('.win'),
	//Input fields
	playerNameField = document.querySelector('.playerNameField'),
	inputNumberField = document.querySelector('.inputNumber');

//Continue button
continueSplashButton.addEventListener('click', (event) => {
	event.preventDefault();

	splashScreen.hidden = true;
	rules.hidden = false;
});
rulesContinueButton.addEventListener('click', (event) => {
	event.preventDefault();

	rules.hidden = true;
	newGame.hidden = false;
});

//Confirm name button
submitNameButton.addEventListener('click', (event) => {
	event.preventDefault();

		if(playerNameField.value.indexOf(' ') !== -1) {
			inputNotice.hidden = false;
			playerNameField.value = '';
			return;
		} else if(playerNameField.value == '') {
			return;
		} else {
			player_1.name = playerNameField.value;
			gameField.playerName = playerNameField.value;
			gameField.addPlayerInfo();
			newGame.hidden = true;
			gameMode.hidden = false;
		}
});

//Game mode
botMode.addEventListener('click', (event) => {
	event.preventDefault();

	bot_1.makeRandomNumber();

	gameMode.hidden = true;
	wrapper.style.display = 'flex';
});

//Main button
makeAMoveButton.addEventListener('click', (event) => {
	event.preventDefault();

	if( isNaN(inputNumberField.value) || inputNumberField.value == '' || inputNumberField.value.length < 4) {
		inputNumberField.value = '';
	} else {
		if(inputNumberField.value.indexOf(' ') == -1) {
			bot_1.playerNumber = inputNumberField.value;
			
			gameField.bullsAndCows = bot_1.compare();
			gameField.number = inputNumberField.value;

			if(gameField.checkIdentity()) {
				win.hidden = false;
				inputNumberField.disabled = true;
			} else {
				gameField.tryCount += 1;
				gameField.addNewRow();
			}
			inputNumberField.value = '';
		} else {
			inputNumberField.value = '';
		} 
	} 
});

//Play again button
playAgainButton.addEventListener('click', (event) => {
	event.preventDefault();

	win.hidden = true;
	inputNumberField.disabled = false;

	gameField.reset();
	gameField.addWinPoint();
	bot_1.makeRandomNumber();
});