
const textDisplay = document.getElementById('text');
const phrases = ['Welcome to my Portfolio'];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join('');

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join('');
    }

    if (isDeleting && j >= 0) {
      currentPhrase.pop();
      j--;
      textDisplay.innerHTML = currentPhrase.join('');
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = fasle;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
    }
  }

  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (50 - 100) + 100;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();


