const urlParams = new URLSearchParams(window.location.search);
const vsAI = urlParams.get('ai') === '1';
const boardElem = document.getElementById('board');

const piecesSymbols = {
  'p': '\u265F',
  'r': '\u265C',
  'n': '\u265E',
  'b': '\u265D',
  'q': '\u265B',
  'k': '\u265A',
  'P': '\u2659',
  'R': '\u2656',
  'N': '\u2658',
  'B': '\u2657',
  'Q': '\u2655',
  'K': '\u2654'
};

const initialBoard = [
  ['r','n','b','q','k','b','n','r'],
  ['p','p','p','p','p','p','p','p'],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  ['P','P','P','P','P','P','P','P'],
  ['R','N','B','Q','K','B','N','R']
];

let dragged = null;

function createBoard() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
            square.className = "square " + (((row + col) % 2 === 0) ? "light" : "dark");
      square.dataset.row = row;
      square.dataset.col = col;

      const piece = initialBoard[row][col];
      if (piece) {
        const pieceElem = document.createElement('div');
        pieceElem.className = 'piece';
        pieceElem.textContent = piecesSymbols[piece];
        pieceElem.draggable = true;
        pieceElem.dataset.piece = piece;
        square.appendChild(pieceElem);
      }

      square.addEventListener('dragover', e => e.preventDefault());
      square.addEventListener('drop', e => {
        e.preventDefault();
        if (dragged) {
          square.innerHTML = '';
          square.appendChild(dragged);
          dragged = null;
          if (vsAI) {
            alert('IA non impl\u00e9ment\u00e9e pour le moment');
          }
        }
      });
      boardElem.appendChild(square);
    }
  }

  document.querySelectorAll('.piece').forEach(p => {
    p.addEventListener('dragstart', e => {
      dragged = p;
    });
  });
}

createBoard();
