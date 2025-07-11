let playing = false;
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
  tileContainer.classList.add('unclickable');
  tileContainer.classList.add('shrunk');
  heading.style.opacity = 0;
  startButton.style.opacity = 0;
  info.style.opacity = 0;
  setTimeout(function() {
      document.body.classList.remove('gameOver');
      startButton.textContent = 'Play Again'
      startButton.classList.remove('hidden');
      heading.textContent = 'Oops!';
      info.textContent = `Score: ${currLvl}`;
      heading.style.opacity = 1;
      startButton.style.opacity = 1;
      info.style.opacity = 1;
  }, 700);
}

function humanTurn(level) {
  tileContainer.classList.remove('unclickable');
  info.textContent = `Tap the sequence: ${level} left`;
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
  playing = true;
  level += 1;

  tileContainer.classList.add('unclickable');
  info.textContent = 'Watch the sequence...';
  heading.textContent = `Level ${level}`;

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
    playing = false;
    document.body.classList.add('gameOver');
    if(level > 5) __saveScoreToDatabase__('sequence', level);
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

  info.textContent = `Tap the sequence: ${remainingTaps} left`;
}

function startGame() {
  startButton.classList.add('hidden');
  info.classList.remove('hidden');
  tileContainer.classList.remove('unclickable');
  tileContainer.classList.remove('shrunk');
  heading.textContent = 'Sequence';
  info.textContent = '';

  setTimeout(nextRound, 1000);
}

startButton.addEventListener('click', startGame);
tileContainer.addEventListener('click', event => {
  if(!playing) return;
  const { tile } = event.target.dataset;

  if (tile) handleClick(tile);
});