
// Step 1: Declaring Arrays
let myArray = ["pizza", "apple", 8, 3.14, true];

console.log("Declared array is : " + myArray);

// Step 2: Accessing Arrays

firstElement = myArray[0];
lastElement = myArray[myArray.length - 1];

console.log("First element of the array is : " + firstElement);
console.log("Last element of the array is : " + lastElement);


if (myArray.length % 2 == 0) { //checking if length is odd or even
    console.log("Middle element(s) of array are : " + [myArray[(myArray.length / 2) - 1], myArray[myArray.length / 2]])
}
else {
    console.log("Middle element of array is : " + myArray[Math.floor(myArray.length / 2)])


}
// Step 3: Using Array Properties

lengthOftheArray = myArray.length;

console.log("Length of the declared array is : " + lengthOftheArray);



// Step 4: Array Methods
 
myArray.push("pastrie")
console.log("Push method on array (pushed ice cream) : " + myArray)

myArray.pop()
console.log("Pop method on array : " + myArray)

myArray.shift()
console.log("Shift method on array : " + myArray)

myArray.unshift("breadslice")
console.log("unshift method on array (added breadslice at first) : " + myArray)

myArray.splice(3, 2)
console.log("splice method on array with starting number as 3 and delete count as 2: " + myArray)


// Step 5: Iterating Through Arrays
function myLoopFunction(item) {
    console.log(item)
}
console.log("Iterating through array using forEach - ")
myArray.forEach(myLoopFunction)


console.log("Iterating through array using for loop - ")
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index])

}
// Step 6: Array Destructuring

//redefining array back to original form :
myArray = ["pizza", "apple", 8, 3.14, true];
console.log("Original array redefined : " + myArray)
//declaring variables from array destructuring

let [firstVariable, secondVariable, ...rest] = myArray;

console.log("variable firstVariable created from array destructuring value is : " + firstVariable)
console.log("variable secondVariable created from array destructuring value is : " + secondVariable)
console.log("variable 'rest' created from array destructuring from rest of elements of array value is : " + rest)