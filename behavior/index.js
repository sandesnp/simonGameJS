let items = document.querySelectorAll('.container div');
let gameSentence = document.querySelector('h1');
let answerArray = [];
let gameStart = false;
let counter = 0;

document.addEventListener('keydown', function (event) {
	if (event.key === 's' && !gameStart) {
		gameSentence.textContent = '';
		getRandom();
		console.log('clicked');
		gameStart = true;
	}
});

for (let i = 0; i < items.length; i++) {
	items[i].addEventListener('click', function () {
		if (!gameStart) {
			return;
		}
		if (i === answerArray[counter]) {
			beep(i, 'beep-correct', 200);
			counter++;
			if (counter === answerArray.length) {
				setTimeout(() => {
					counter = 0;
					getRandom();
				}, 1000);
			}
			return;
		} else {
			gameSentence.textContent = "Game Over, press 'S' to start again.";
			answerArray = [];
			gameStart = false;
			counter = 0;

			beep(i, 'beep-wrong', 200);
		}
	});
}

function getRandom() {
	let randomNumber = Math.random();
	randomNumber *= 4;
	randomNumber = Math.floor(randomNumber);
	beep(randomNumber, 'beep', 400);
	answerArray.push(randomNumber);
}

function beep(index, classname, delay) {
	items[index].classList.toggle(classname);
	setTimeout(() => {
		items[index].classList.toggle(classname);
	}, delay);
}
