var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"]

 function addElementToBeginningOfArray(array, element) {
   var result = [element,...array]
  return result
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var result = array.unshift(element)
  return result
}