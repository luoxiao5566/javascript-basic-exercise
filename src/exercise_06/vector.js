export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.
  constructor(a, b) {    
    Object.defineProperties(this, {
      x:{
        value:a,              
        enumerable:true
      },
      y:{
        value:b,               
        enumerable:true
      }
    })    
  } 
  
  static plus(vector1, vector2) {
    let xTemp = vector1.x + vector2.x;
    let yTemp = vector1.y + vector2.y;
    let vectorResult = new Vector(xTemp,yTemp);
    return vectorResult;
  }
  
  static minus(vector1, vector2) {
    let xTemp = vector1.x - vector2.x;
    let yTemp = vector1.y - vector2.y;
    let vectorResult = new Vector(xTemp,yTemp); 
    return vectorResult;
  }

  distance() {   
    let distance = Math.sqrt( Math.pow(this.x, 2)+Math.pow(this.y, 2));
    return distance;
  }  
}
