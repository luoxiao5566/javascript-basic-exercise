export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  var Node = function (value) {
    this.value = value;
    this.next = null;
  }
  var length = 0;
  var head = null;
  if (undefined == array || array == null) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length == 0) {
    throw new Error('Creating list from empty array');
  }
  var curNode = new Node(array[0]);
  head = curNode;
  var arraySize = array.length;
  for(let i = 1; i < arraySize; i++){
    var node = new Node(array[i]);
    curNode.next = node;
    curNode = node;
  }
  return head;
}
