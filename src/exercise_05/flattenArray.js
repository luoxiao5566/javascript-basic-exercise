export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (undefined == array || array == null) {
    throw new Error('Flatten undefined or null array');
  }
  var arraySize = array.length;
  var flattenResult = [];
  for(let i = 0; i < arraySize; i++){
    let temp = array[i].length;
    if (undefined == temp){
      flattenResult.push(array[i]);
      continue;
    }
    for(let j = 0; j < temp; j++){
      flattenResult.push(array[i][j])
    }
  }
  return flattenResult;
}
