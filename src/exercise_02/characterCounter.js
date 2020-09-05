export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  let stringLength = 0;
  if(undefined === string || string === null || string === ''){
    return stringLength; 
  }
  
  if(undefined === prediction && string.length>0) {    
    return stringLength = string.length;
  }
    
  let temp = string.length;
  for (let i = 0; i < temp; i++) {
    if(prediction(string[i])){
      stringLength++;
    }    
  }
  
  return stringLength;
}
