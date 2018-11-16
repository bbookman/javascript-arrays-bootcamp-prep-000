var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"]

 function addElementToBeginningOfArray(array, element) {
   var result = [element,...array]
  return result
}

function addElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}