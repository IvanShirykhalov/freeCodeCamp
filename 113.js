function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } else {
    let myArray = rangeOfNumbers(startNum, endNum - 1);
    myArray.push(endNum);
    return myArray;
  }
}
