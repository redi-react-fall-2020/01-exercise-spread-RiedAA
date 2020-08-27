// Exercise 0
// Given a string,
// return the string
function returnTheString (string) {
  // your code here
  return(string);
}

// Exercise 1
// Given a string,
// turn it into an array of the letters in the string
function splitTheString (string) {
  // your code here
  const arrayOfLetters =[...string];
  return arrayOfLetters;
}

// Exercise 2
// Given an object,
// return a shallow copy of the object
function shallowCopyObject (object) {
  const NewObject={...object};
  return NewObject
  // your code here
}

// Exercise 3
// Given an array,
// return a shallow copy of the array
function shallowCopyArray (array) {
  // your code here
  const NewArray=[...array];
  return NewArray;
}

// Exercise 4
// Given two objects,
// turn them into one object that contains the properties of both objects
function mergeTwoObjects (object1, object2) {
  // your code here
  const NewMergedObject={...object1, ...object2};
  return NewMergedObject;
}

// Exercise 5
// Given two arrays,
// turn them into one array containing all elements of both arrays
function combineTwoArrays (array1, array2) {
  // your code here
  const NewCombinedArray=[...array1,...array2];
  return NewCombinedArray;
}
/*
module.exports = {
  returnTheString,
  splitTheString,
  shallowCopyObject,
  shallowCopyArray,  
  mergeTwoObjects,
  combineTwoArrays,
};*/
