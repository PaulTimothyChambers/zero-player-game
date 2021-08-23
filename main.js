var gameBoard = document.querySelector('.full-game-board');
var startGame = document.querySelector('.start-button');
var stopGame = document.querySelector('.stop-button');

var b = [];
var s = [];
var p = [];

var groupsAndSquares = new GroupsAndSquares(s);

makeRows(45, 45);
createSquares();
filterSquaresForUndefined();

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
  const gameInPlay = setInterval(cycleThroughSquares, 60)
};
// function stopZeroPlayerGame() {
  //   clearInterval(gameInPlay);
  // };

function cycleThroughSquares() {
  const refreshBoard = setTimeout(changeActiveValue, 30)
  for (var i=0;i<s.length;i++) {
    if (s[i].value === 1) {
      groupsAndSquares.testForLivingNeighbors(s[i]);

    } else if (s[i].value === 0) {
      groupsAndSquares.testForLivingNeighborsTwo(s[i]);
    }
  }
};

function changeActiveValue() {
  s.forEach((square) => {
    if (square.position.classList.contains('marked-for-inactive')) {
      square.position.classList.remove('checked')
      square.position.classList.remove('marked-for-inactive')
      square.value--;

    } else if (square.position.classList.contains('marked-for-active')) {
      square.position.classList.add('checked')
      square.position.classList.remove('marked-for-active')
      square.value++;
    }
  })
};

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("button");
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

function createSquares() {
  for (var i=0;i<s.length;i++) {
    s[i] = new Square(b[i]);
  }
};

function filterSquaresForUndefined() {
  for (var i=0;i<s.length;i++) {
    s[i].surroundingSquares = [s[i-46], s[i-45], s[i-44], s[i-1], s[i+1], s[i+46], s[i+45], s[i+44], s[i-1979], s[i+1979], s[i-1980], s[i+1980], s[i-1981], s[i+1981], s[i-2024], s[i+2024]];
    p[i] = s[i].surroundingSquares.filter(word => word !== undefined);
    s[i].surroundingSquares = p[i];
  }
};
