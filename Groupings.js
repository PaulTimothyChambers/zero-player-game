class Groupings {
  constructor() {
    this.groupOne = [s00, etc];
    this.groupTwo = [];
    this.groupThree = [];
    this.groupFour = [];
    this.groupFive = [];
    this.groupSix = [];
    this.groupSeven = [];
    this.groupEight = [];
    this.groupNine = [];
    this.groupTen = [];
    this.groupEleven = [];
    this.groupTwelve = [];
    this.groupThirteen = [];
    this.groupFourteen = [];
    this.groupFifteen = [];
    this.groupSixteen = [];
    this.groupSeventeen = [];
    this.groupEighteen = [];
    this.groupNineteen = [];
    this.groupTwenty = [];
    this.groupTwentyOne = [];
    this.groupTwentyTwo = [];
    this.groupTwentyThree = [];
    this.groupTwentyFour = [];
    this.groupTwentyFive = [];
  }

  determineGroupValue(grpNum) {
    let sumStager = []
    grpNum.forEach((item) => {
      sumStager.push(item.value);
    })
    let sum = sumStager.reduce(function (a, b) {
      return a + b;
    })
    return sum
  }

  testNeighborsForTheLiving(square, grpNum) {
    let expr = determineGroupValue(grpNum)
    switch (expr) {
      case 1:
        square.value = 1;
        break;
      case 2:
        square.value = 1;
        break;
      case 3:
        square.value = 1;
        break;
      default:
        square.value = 0
        break;
    }
    return square.value
  }
}
