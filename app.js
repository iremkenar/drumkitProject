
// Method 1 for the solution, 2 and 3 are below
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  }

  function handleKeyClass(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (key === null) return;
    key.classList.add('playing');
    key.addEventListener('transitionend', removeTransition);
  }
  
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  window.addEventListener('keydown', playSound);
  window.addEventListener('keydown', handleKeyClass);


/****** Method 2 for the solution

function playSound(e) {
    const pressKey = document.querySelectorAll(`[data-key="${e.keyCode}"]`);
    const pressedKey = pressKey.item(0);
    const pressedKeyAudio = pressKey.item(1);
    if(!pressedKeyAudio) return; // stop the function from running altogether
    pressedKeyAudio.play();
    pressedKeyAudio.currentTime = 0; //rewind to the start
    pressedKey.classList.add("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
    if (e.propertyName !== "transform") return; // skip if it's not a transform
    this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);************/


/************ Method 3
function initiateEventListeners() {
    window.addEventListener("keydown", playSound);
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener("transitionend", removeTransition));
}

function playSound(e) {
    const pressKey = document.querySelectorAll(`[data-key="${e.keyCode}"]`);
    const pressedKey = pressKey.item(0);
    const pressedKeyAudio = pressKey.item(1);
    if(!pressedKeyAudio) return; // stop the function from running altogether
    pressedKeyAudio.play();
    pressedKeyAudio.currentTime = 0; //rewind to the start
    pressedKey.classList.add("playing");
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return; // skip if it's not a transform
    this.classList.remove("playing");
}

initiateEventListeners(); *****************/






