class GroupsAndSquares {
  constructor(s) {
    this.allSquares = s;
  }

  determineGroupValue(surrSquares) {
    let sumStager = [];
    surrSquares.forEach((square) => {
      sumStager.push(square.value);
    })
    let sum = sumStager.reduce(function (a, b) {
      return a + b;
    })
    return sum;
  }

  testForLivingNeighbors(square) {
    // return console.log(square.surroundingSquares)
    if (this.determineGroupValue(square.surroundingSquares) < 2 || this.determineGroupValue(square.surroundingSquares) > 3) {
      this.changeActiveValue(square);
    }
  }

  testForLivingNeighborsTwo(square) {
    // return console.log(square.surroundingSquares)
    if (parseInt(this.determineGroupValue(square.surroundingSquares)) === 3 ) {
      this.changeInactiveValue(square);
    }
  }

  changeActiveValue(square) {
    square.position.classList.remove('checked')
    square.value--;
  }

  changeInactiveValue(square) {
    square.position.classList.add('checked')
    square.value++;
  }
};
