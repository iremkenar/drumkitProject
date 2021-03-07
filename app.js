
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






