// -------------------------lokesh anna task----------------------------------
// --------1)Count Alphabets and Numbers in a String----------------------
// let string = "suhirdharma040206"
// let alphabetCount = 0
// let numberCount = 0

// for (let i = 0; i < string.length; i++) {
//     if ((string[i] >= 'a' && string[i] <= 'z')||(string[i] >= 'A' && string[i] <= 'Z'))
//  {
//     alphabetCount++;
//     }      else if (string[i] >= '0' && string[i] <= '9')
// {
//       numberCount++;
//     }
// }

// console.log("Alphabet Count:", alphabetCount)
// console.log("Number Count:", numberCount)
// --------------2)sum of numbers in an array----------------------
// let array=[1,2,3,4,5,6,7,8,9,10,true]
// function addnumbers(array)
// {
//     let sum=0
//     for(let i=0;i<array.length;i++)
//         {
//         if(typeof array[i]==='number')
//             {
//             sum=sum+array[i]
//         }
//  }           
//     return sum
// }
// let result=addnumbers(array)
// console.log(result)
// --------------3)find the second largest number----------------
// let array = [10, 50, 20, 5, 40, 35];
// let largest = array[0];
// for (let i = 1; i < array.length; i++) {

//     if (array[i] > largest) 
//         {
//         largest = array[i];
//     }
// }
// let secondLargest = array[0];
// for (let i = 1; i < array.length; i++) {
//     if (array[i] > secondLargest && array[i] < largest) 
//         {
//         secondLargest = array[i];
//     }
// }
// console.log("Second Largest:", secondLargest);
// -------------------------4)ascending and descending order with out method------------------

// function orderArray(array, type) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (type === "asc") {
//                 if (array[i] > array[j]) {
//                     let temp = array[i];
//                     array[i] = array[j];
//                     array[j] = temp;
//                 }
//             }
//             if (type === "desc") {
//                 if (array[i] < array[j]) {
//                     let temp = array[i];
//                     array[i] = array[j];
//                     array[j] = temp;
//                 }
//             }
//         }
//     }

//     return array;
// }

// console.log(orderArray([9, 3, 6, 1], "asc"))   
// console.log(orderArray([9, 3, 6, 1], "desc"))


// -------------------------5)array count possitiveand negative-------------------------------------------------  
// let array = [5, -3, 10, -8, 2, -1, 7];

// let positiveCount = 0;
// let negativeCount = 0;
// let positiveSum = 0;
// for (let i = 0; i < array.length; i++) {

//     if (array[i] > 0) {  
//         positiveCount++;   
//         positiveSum = positiveSum + array[i]; 
//     }
//     else if (array[i] < 0) {  
//         negativeCount++;    
//     }
// }
// console.log("Positive Count:", positiveCount);
// console.log("Negative Count:", negativeCount);
// console.log("Sum of Positive Numbers:", positiveSum);

// -------------------------6) find the misssing number in the array with out methods------------------------------------
// let array = [1,2,4,8,9];  
// let n = 10;

// for (let num = 1; num <= n; num++) {
//     let found = false;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === num) {
//             found = true;
//             break;
//         }
//     }
//     if (!found) {
//         console.log(num);
//     }
// }
