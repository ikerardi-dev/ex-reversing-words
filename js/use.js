import { reverseWords } from './main.js';

const playInput  = document.getElementById('play-input');
const playOutput = document.getElementById('play-output');

function updatePlay() {
  playOutput.textContent = reverseWords(playInput.value);
}

playInput.addEventListener('input', updatePlay);
updatePlay();