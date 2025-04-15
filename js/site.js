let isPlaying = false;

function togglePlay() {
  isPlaying = !isPlaying;
  document.getElementById('play-button').textContent = isPlaying ? '⏸️' : '▶️';
}
const range = document.getElementById('auto-range');
    let progress = 0;
    setInterval(() => {
      range.value = progress;
      progress++;
      if (progress > 100) progress = 0;
    }, 1000); // ajusta a velocidade aqui (ms)