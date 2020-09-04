export default function formatNumber(number, option) {
  // This function will format the number to a fixed number string. The decimal part should 2.
  // That means the number 2 will be formatted as '2.00'. The `option` is an object which contains
  // a `currency` property. If the property is `true`, a dollar sign will be added to the result.
  //
  // Your target:
  //
  // * Please implement the function and pass all the tests in format_number_spec.js.
  // * Please do NOT modify the signature of the function.
  
  var number = Math.round(parseFloat(number)*100)/100;  
  var numArray = number.toString().split("."); 
  if(numArray.length == 1){
    number = number.toString()+".00";    
  }
  if(numArray.length>1 && numArray[1].length<2){
    number = number.toString()+"0";
  }
  number = number.toString();

  if(option == undefined){
    return number;
  }
  
  if(true ==  option.currency ){
    number = number.slice(0,0)+'$ '+number.slice(0);    
  }  
  return number;
}
