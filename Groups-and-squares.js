class GroupsAndSquares {
  constructor() {
    this.allSquares = [s00, s10, s20, s30, s40, s01, s11, s21, s31, s41, s02, s12, s22, s32, s42, s03, s13, s23, s33, s43, s04, s14, s24, s34, s44];
    this.allGroups = [g00, g10, g20, g30, g40, g01, g11, g21, g31, g41, g02, g12, g22, g32, g42, g03, g13, g23, g33, g43, g04, g14, g24, g34, g44];
  }

  determineGroupValue(surrSquares) {
    let sumStager = []
    surrSquares.forEach((square) => {
      sumStager.push(square.value);
    })
    let sum = sumStager.reduce(function (a, b) {
      return a + b;
    })
    return sum;
  }

  testForLivingNeighbors(square) {
    if (this.determineGroupValue(square.surroundingSquares) < 1 || this.determineGroupValue(square.surroundingSquares) > 3) {
      this.changeActiveValue(square);
    }
  }

  testForLivingNeighborsTwo(square) {
    if (this.determineGroupValue(square.surroundingSquares) > 2) {
      this.changeInactiveValue(square);
    }
  }

  changeActiveValue(square) {
    square.position.classList.remove('checked')
    square.value--;
    square.group.value--;
  }

  changeInactiveValue(square) {
    square.position.classList.add('checked')
    square.value++;
    square.group.value++;
  }

};
