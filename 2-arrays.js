const assertEquals = require("./assert-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns the sum of an array
function sum(array) {
  return array.reduce((acc, currentValue) => acc + currentValue);
  /*
  let sum = 0;
  for (let ele of array) {
    sum += ele;
  }

  return sum;*/
}

// Assertions (do not change)
assertEquals(sum([1, 2]), 3);
assertEquals(sum([1, 2, 3, 4]), 10);

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function that returns an array of even numbers
function evenNumbersOnly(array) {
  return array.filter(ele => ele % 2 === 0);
  /*
  const evenArray = [];
  for (let ele of array) {
    if (ele % 2 === 0) {
      evenArray.push(ele);
    }
  }

  return evenArray; */
}

// Assertions (do not change)
assertEquals(evenNumbersOnly([1, 2, 3, 4]), [2, 4]);
assertEquals(evenNumbersOnly([10, 11, 12]), [10, 12]);

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function that returns the sum of even numbers in the array
// hint: reuse the 2 functions that you defined earlier.
function sumEvenNumbers(array) {
  //return sum(evenNumbersOnly(array));

  return array
    .filter(num => num % 2 === 0)
    .reduce((acc, currentValue) => acc + currentValue);
  /*
  const evenArray = evenNumbersOnly(array);
  let sum = 0;
  for (let ele of evenArray) {
    sum += ele;
  }

  return sum;*/
}

// Assertions (do not change)
assertEquals(sumEvenNumbers([1, 2, 3, 4]), 6);
assertEquals(sumEvenNumbers([10, 11, 12]), 22);

/* ---------------------- BONUS: EXERCISE 4 ---------------------- */
// Write a Javascript function to compute the union of two arrays. the returned array should be sorted in ascending order (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
function sortedUnion(arr1, arr2) {
  const concatArray = arr1.concat(arr2);
  return concatArray.sort((a, b) => a - b);
  /*
  concatArray.sort((a, b) => {
    console.log("a", a);
    console.log("b", b);
    console.log("a - b:", a - b);
  }); */
}

// Assertions (do not change)
assertEquals(sortedUnion([1], [2]), [1, 2]);
assertEquals(sortedUnion([1, 3], [2]), [1, 2, 3]);
assertEquals(sortedUnion([1, 3], [11, 2]), [1, 2, 3, 11]);
