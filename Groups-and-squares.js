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
      this.markInactive(square);
    }
  }

  testForLivingNeighborsTwo(square) {
    // return console.log(square.surroundingSquares)
    if (this.determineGroupValue(square.surroundingSquares) === 3 ) {
      this.markActive(square);
    }
  }

  markInactive(square) {
    square.position.classList.add('marked-for-inactive');
  }

  markActive(square) {
    square.position.classList.add('marked-for-active')
  }



//   changeInactiveValue(square) {
//     square.position.classList.add('checked')
//     square.value++;
//   }
};
