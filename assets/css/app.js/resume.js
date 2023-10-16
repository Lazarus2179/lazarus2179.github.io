
const textDisplay = document.getElementById('text');
const phrases = ['Here is my Resume'];
let i = 0;
let j = 0;

function type() {
    if (i < phrases.length) {
        if (j <= phrases[i].length) {
            textDisplay.innerHTML = phrases[i].substring(0, j);
            j++;
            setTimeout(type, 100); // Adjust the typing speed by changing the timeout value (in milliseconds)
        } else {
            // Typing is complete for this phrase, you can do something here
        }
    }
}

type();

