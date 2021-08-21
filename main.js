var b00 = document.querySelector('.b00');
var b10 = document.querySelector('.b10');
var b20 = document.querySelector('.b20');
var b30 = document.querySelector('.b30');
var b40 = document.querySelector('.b40');
var b01 = document.querySelector('.b01');
var b11 = document.querySelector('.b11');
var b21 = document.querySelector('.b21');
var b31 = document.querySelector('.b31');
var b41 = document.querySelector('.b41');
var b02 = document.querySelector('.b02');
var b12 = document.querySelector('.b12');
var b22 = document.querySelector('.b22');
var b32 = document.querySelector('.b32');
var b42 = document.querySelector('.b42');
var b03 = document.querySelector('.b03');
var b13 = document.querySelector('.b13');
var b23 = document.querySelector('.b23');
var b33 = document.querySelector('.b33');
var b43 = document.querySelector('.b43');
var b04 = document.querySelector('.b04');
var b14 = document.querySelector('.b14');
var b24 = document.querySelector('.b24');
var b34 = document.querySelector('.b34');
var b44 = document.querySelector('.b44');
var gameBoard = document.querySelector('.full-game-board');
var startGame = document.querySelector('.start-button');
var stopGame = document.querySelector('.stop-button');
// var choice = event.target

var g00 = new Group();
var g10 = new Group();
var g20 = new Group();
var g30 = new Group();
var g40 = new Group();
var g01 = new Group();
var g11 = new Group();
var g21 = new Group();
var g31 = new Group();
var g41 = new Group();
var g02 = new Group();
var g12 = new Group();
var g22 = new Group();
var g32 = new Group();
var g42 = new Group();
var g03 = new Group();
var g13 = new Group();
var g23 = new Group();
var g33 = new Group();
var g43 = new Group();
var g04 = new Group();
var g14 = new Group();
var g24 = new Group();
var g34 = new Group();
var g44 = new Group();

var s00 = new Square(b00, g00, [g10, g01, g11]);
var s10 = new Square(b10, g10, [g00, g20, g01, g11, g10]);
var s20 = new Square(b20, g20, [g10, g30, g11, g21, g31]);
var s30 = new Square(b30, g30, [g20, g40, g21, g31, g41]);
var s40 = new Square(b40, g40, [g30, g31, g41]);
var s01 = new Square(b01, g01, [g00, g10, g11, g02, g12]);
var s11 = new Square(b11, g11, [g00, g10, g20, g01, g21, g02, g12, g22]);
var s21 = new Square(b21, g21, [g10, g20, g30, g11, g31, g12, g22, g32]);
var s31 = new Square(b31, g31, [g20, g30, g40, g21, g41, g22, g32, g42]);
var s41 = new Square(b41, g41, [g30, g40, g31, g32, g42]);
var s02 = new Square(b02, g02, [g01, g11, g12, g03, g13]);
var s12 = new Square(b12, g12, [g01, g11, g21, g02, g22, g03, g13, g23]);
var s22 = new Square(b22, g22, [g11, g21, g31, g12, g32, g13, g23, g33]);
var s32 = new Square(b32, g32, [g21, g31, g41, g22, g42, g23, g33, g43]);
var s42 = new Square(b42, g42, [g31, g41, g32, g33, g43]);
var s03 = new Square(b03, g03, [g02, g12, g13, g04, g14]);
var s13 = new Square(b13, g13, [g02, g12, g22, g03, g23, g04, g14, g24]);
var s23 = new Square(b23, g23, [g12, g22, g32, g13, g33, g14, g24, g34]);
var s33 = new Square(b33, g33, [g22, g32, g42, g23, g43, g24, g34, g44]);
var s43 = new Square(b43, g43, [g32, g42, g33, g34, g44]);
var s04 = new Square(b04, g04, [g03, g13, g04]);
var s14 = new Square(b14, g14, [g03, g13, g23, g04, g24]);
var s24 = new Square(b24, g24, [g13, g23, g33, g14, g34]);
var s34 = new Square(b34, g34, [g23, g33, g43, g24, g44]);
var s44 = new Square(b44, g44, [g33, g43, g34]);
var groupsAndSquares = new GroupsAndSquares();
var squares = [b00, b10, b20, b30, b40, b01, b11, b21, b31, b41, b02, b12, b22, b32, b42, b03, b13, b23, b33, b43, b04, b14, b24, b34, b44];
startGame.addEventListener('click', startZeroPlayerGame);
stopGame.addEventListener('click', stopZeroPlayerGame);

squares.forEach((square) => {
  square.addEventListener('click', function() {
    userChangeValue(square);
  })
});

function userChangeValue(square) {
  const userChoice = event.target
  square.classList.toggle('checked');
  groupsAndSquares.allSquares.forEach((square) => {
    if (square.position.classList.value === userChoice.classList.value && square.value === 0) {
      square.value++;
      square.group.value++;
    } else if (square.position.classList.value === userChoice.classList.value && square.value === 1) {
      square.value--;
      square.group.value--;
    }
  })
};

function startZeroPlayerGame() {
  const gameInPlay = setInterval(function() {
    cycleThroughSquares()
  }, 140);
};

function stopZeroPlayerGame() {
  clearInterval(gameInPlay);
};

function cycleThroughSquares() {
  groupsAndSquares.allSquares.forEach((square) => {
    if (square.value === 1) {
      console.log('active', square)
      groupsAndSquares.testForLivingNeighbors(square);
    } else if (square.value === 0) {
      console.log('inactive', square)
      groupsAndSquares.testForLivingNeighborsTwo(square);
    }
  })
};

// function findPosition(placement) {
//   var allSquares = gameBoardGroupings.entireBoard;
//   let expr = placement.position
//   allSquares.forEach((item) => {
//     // console.log(expr)
//     console.log('2', item.position)
//     switch (expr) {
//       case expr === item.position:
//         checkTarget(item, square);
//         break;
//     }
//     // console.log('this', square.classList)
//     // console.log('this', item.position)
//   })
// };

// function cycleThroughSquares(placements, squares) { //use a map() method here, to get a new array of matches and iterate through them, instead?
// //use a map() method here, to get a new array of matches and iterate through them, instead?
//   for (var i in placements) {
// //use a map() method here, to get a new array of matches and iterate through them, instead?
//     for (var p in squares) {
// //use a map() method here, to get a new array of matches and iterate through them, instead?
//       if (placements[i].position === squares[p].position) {
// //use a map() method here, to get a new array of matches and iterate through them, instead?
//         console.log(placements[i])
// //use a map() method here, to get a new array of matches and iterate through them, instead?
//         console.log(squares[p])
// //use a map() method here, to get a new array of matches and iterate through them, instead?
//         checkTarget(squares[p], squares[p].position);
//       }
//     }
//   }
// }

// function checkTarget(item, square) {
//   // console.log(item)
//   if (item.value === 1) {
//     gameBoardGroupings.testNeighborsForTheLiving(item, item.groupNumber, square)
//   }
// };
