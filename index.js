const board = document.getElementById('background-board');
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement('div');
    if ((row + col) % 2 === 0) {
      square.className = 'light';
    } else {
      square.className = 'dark';
    }
    board.appendChild(square);
  }
}

document.getElementById('vs-ai').addEventListener('click', () => {
  window.location = 'game.html?ai=1';
});

document.getElementById('vs-human').addEventListener('click', () => {
  window.location = 'game.html?ai=0';
});

document.getElementById('settings').addEventListener('click', () => {
  alert('Paramètres à venir');
});
