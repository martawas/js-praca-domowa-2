let MyArray = [1, 6, 23, 8, 4, 8, 3, 7];


//b.	Create a function that takes in an array of numbers and returns sum of all elements
// function arraySum(arr){
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     }
//     return sum
// }

// console.log(arraySum(MyArray));

// c.	Create a function that takes in an array of numbers and returns sum of first and last element

// function SumfirstLast(arr){
// let first = arr[0];
// let last = arr[arr.length-1];
// return first + last;
// }
// console.log(SumfirstLast(MyArray));

// d.	Create a function that takes in an array and returns its copy in reverse order (DON’T use .reverse() method!)

// function reverse(arr){
// let revertedArr = [];
// for (let i = arr.length-1; i >= 0; i--)
// {
//     revertedArr.push(arr[i])
// }
// return revertedArr
// }
// console.log(reverse(MyArray));

// e.	Create a function that takes two parameters - array of numbers, and number of attempts. 
// Choose random numbers from the array based on the number of attempts and return the lowest among them.

// function random(arr,attempt){
//     let emArr = [];
//     for (let i = 1; i <= attempt; i++) {
//         emArr.push(arr[Math.floor(Math.random() * arr.length)])        
//     }
// let min = emArr[0];
// for (let i=0; i< emArr.length; i++){
//     if (emArr[i]<min){
//         min = emArr[i];
//     }
// }
// return min

// }

// console.log(random(MyArray, 3));

// f.	Create a function that takes in an array and returns it in random order

// function randomOrder(arr) {
//     let baseArr = [...arr]
//     let randomArr = []
//     for(let i=0; i < arr.length; i++){
//         let randomValue = Math.floor(Math.random() * baseArr.length)
//         randomArr.push(baseArr[randomValue])
//         baseArr.splice(randomValue, 1)
//     }
//     return randomArr
// }

// console.log(randomOrder(MyArray))

// g.	Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

let newArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98]

function sumOfOdd(newArray){

    let oddArr = []
    for (let i=0; i < newArray.length; i++){
        if(newArray[i]%2!==0) {
            oddArr.push(newArray[i])
        }
    }
    let sum = 0;
    for (let i = 0; i < oddArr.length; i++) {
        sum += oddArr[i];
        }
        return sum

}
console.log(sumOfOdd(newArray));

// h.	With  a given start value of 0. Iterate the array and add even 
// items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]

let superArray = [1,6,23,8,4,98,3,7,3,98,4,98]

function addAndSubstract(array) {
    let sum = 0
    for(let i=0; i<array.length; i++){
        if(array[i]%2===0) {
            sum = sum + array[i]
        } else {
            sum = sum - array[i]
        }
    }
    return sum
}

console.log(addAndSubstract(superArray))


