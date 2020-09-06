export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let rangeValue = end-start;
  let Result = [];
  if (rangeValue == 0) {
    return Result;
  }
  if (rangeValue > 0) {
    for (let i = 0;i < rangeValue; i++) {
      Result.push(start + i);
    }
    return Result;
  }
     
  for (let i = 0;i > rangeValue; i--) {
    Result.push(start + i);
  }
  return Result; 
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let numbersSize = numbers.length;
  if (undefined == numbers) {
    return 0;
  }  
  let sumResult = 0;
  for (let i = 0;i < numbersSize;i++) {
    sumResult += numbers[i];
  }
  return sumResult;  
}
