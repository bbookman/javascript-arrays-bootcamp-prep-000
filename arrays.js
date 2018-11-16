var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"]

 function addElementToBeginningOfArray(array, element) {
   var result = [element,...array]
  return result
}

function addElementToEndOfArray(array, element) {
  var result = [array, ...element]
  return result
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array = [element,...array]
  return array
}