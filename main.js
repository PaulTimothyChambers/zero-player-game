var b = [];
var s = [];

function makeRows(rows, clmns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', clmns);
  for (c = 0; c < (rows * clmns); c++) {
    let cell = document.createElement("button");
    // cell.innerText = `${(c)}`;
    b[c] = c +1;
    s[c] = c +1;

    container.appendChild(cell).className = `unselected grid-item b${c}`;
    cells(b)
  }
};

function cells() {
  for (var i=0;i<b.length;i++) {
    b[i] = document.querySelector(`.b${[i]}`);
  }
};

makeRows(45, 45);

var gameBoard = document.querySelector('.full-game-board');
var startGame = document.querySelector('.start-button');
var stopGame = document.querySelector('.stop-button');

for (var i=0;i<s.length;i++) {
  s[i] = new Square(b[i]);
};
var p = [];
for (var i=0;i<s.length;i++) {
  s[i].surroundingSquares = [s[i-46], s[i-45], s[i-44], s[i-1], s[i+1], s[i+46], s[i+45], s[i+44]];
  p[i] = s[i].surroundingSquares.filter(word => word !== undefined);
  s[i].surroundingSquares = p[i];
};

s[0].surroundingSquares = [s[1], s[46], s[45]];
s[44].surroundingSquares = [s[43], s[88], s[89]];
s[1980].surroundingSquares = [s[1935], s[1937], s[1981]];
s[2024].surroundingSquares = [s[1979], s[1978], s[2023]];

var groupsAndSquares = new GroupsAndSquares(s);

startGame.addEventListener('click', startZeroPlayerGame);
// stopGame.addEventListener('click', stopZeroPlayerGame);

b.forEach((square) => {
  square.addEventListener('click', function() {
    userChangeValue(square);
  })
});

function userChangeValue(square) {
  const userChoice = event.target;
  square.classList.toggle('checked');
  groupsAndSquares.allSquares.forEach((square) => {
    if (square.position.classList.value === userChoice.classList.value && square.value === 0) {
      square.value++;
    } else if (square.position.classList.value === userChoice.classList.value && square.value === 1) {
      square.value--;
    }
  })
};

function startZeroPlayerGame() {
  const gameInPlay = setInterval(function() {
    cycleThroughSquares()
  }, 75)
};

// function stopZeroPlayerGame() {
//   clearInterval(gameInPlay);
// };

function cycleThroughSquares() {
  s.forEach((square) => {
    if (square.value === 1) {
      groupsAndSquares.testForLivingNeighbors(square);
    } else if (square.value === 0) {
      groupsAndSquares.testForLivingNeighborsTwo(square);
    }
  })
};
