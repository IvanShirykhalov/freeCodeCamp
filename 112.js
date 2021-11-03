// Only change code below this line
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    let myArray = countdown(n - 1);
    myArray.unshift(n);
    return myArray;
  }
}
// Only change code above this line
