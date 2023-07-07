let sequence = [];
let humanSequence = [];
let level = 0;
let tileNum = 4;

const startButton = document.querySelector('.start');
const info = document.querySelector('.info');
const heading = document.querySelector('.heading');
const tileContainer = document.querySelector('.squares');

function resetGame(currLvl) {
  sequence = [];
  humanSequence = [];
  level = 0;
  tileNum = 4;
  startButton.textContent = 'Play Again'
  startButton.classList.remove('hidden');
  heading.textContent = 'Game Over';
  //info.classList.add('hidden');
  info.textContent = `Score: ${currLvl}`;
  tileContainer.classList.add('unclickable');
  tileContainer.classList.add('shrunk');
}

function humanTurn(level) {
  tileContainer.classList.remove('unclickable');
  info.textContent = `Your turn: ${level} tile${level > 1 ? 's' : ''} remaining`;
}

function activateTile(id) {
  const tile = document.querySelector(`[data-tile='${id}']`);

  tile.classList.add('activated');

  setTimeout(() => {
    tile.classList.remove('activated');
  }, 300);
}

function playRound(nextSequence) {
  nextSequence.forEach((id, index) => {
    setTimeout(() => {
      activateTile(id);
    }, (index + 1) * 600);
  });
}

function nextStep() {
  const tiles = ['tl', 'tm', 'tr', 'ml', 'mm', 'mr', 'bl', 'bm', 'br'];
  const random = tiles[Math.floor(Math.random() * tiles.length)];

  return random;
}

function nextRound() {
  level += 1;

  tileContainer.classList.add('unclickable');
  info.textContent = 'Watch the pattern...';
  heading.textContent = `${level} Tile${level > 1 ? 's' : ''}`;

  const nextSequence = [...sequence];
  nextSequence.push(nextStep());
  playRound(nextSequence);

  sequence = [...nextSequence];
  setTimeout(() => {
    humanTurn(level);
  }, level * 600 + 200);
}

function handleClick(tile) {
  const index = humanSequence.push(tile) - 1;

  activateTile(tile);

  const remainingTaps = sequence.length - humanSequence.length;

  if (humanSequence[index] !== sequence[index]) {
    return resetGame(level);
  }

  if (humanSequence.length === sequence.length) {
    /*if (humanSequence.length === 20) {
      return resetGame('Congrats, You Legend! You completed all the levels');
    }*/

    humanSequence = [];
    info.textContent = 'Success! Keep going!';
    setTimeout(() => {
      nextRound();
    }, 400);
    return;
  }

  info.textContent = `Your turn: ${remainingTaps} tile${ remainingTaps > 1 ? 's' : '' } remaining`;
}

function startGame() {
  startButton.classList.add('hidden');
  info.classList.remove('hidden');
  tileContainer.classList.remove('unclickable');
  tileContainer.classList.remove('shrunk');

  setTimeout(nextRound, 1000);
}

startButton.addEventListener('click', startGame);
tileContainer.addEventListener('click', event => {
  const { tile } = event.target.dataset;

  if (tile) handleClick(tile);
});