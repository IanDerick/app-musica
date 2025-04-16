let isPlaying = false;

function togglePlay() {
  isPlaying = !isPlaying;
  document.getElementById('play-button').textContent = isPlaying ? '⏸️' : '▶️';
}

let isSound = false;

function toggleSound(){
  isSound = !isSound;
  document.getElementById('sound-button').textContent = isSound ? '🔊': '🔇';
}

const range = document.getElementById('auto-range');
    let progress = 0;
    setInterval(() => {
      range.value = progress;
      progress++;
      if (progress > 100) progress = 0;
    }, 1000);