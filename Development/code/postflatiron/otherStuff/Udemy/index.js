// function sort(arr){
    
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; i++){
//             if(arr[j] > arr[j + 1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
                
//             }
//         }
//     }
// return arr

// }

// function selectionSort(arr){

//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j] > arr[j+ 1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
// return arr

// }



// console.log(selectionSort([8, 6, 4, 1, 2, 5]))

// function sumZero(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
           
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
//     return undefined 
// }





// let test1 = [-3, -2, -1, 0, 1, 2, 3]
// let test2 = [-2, 0, 1, 3]
// let test3 = [1, 2, 3]

// console.log(sumZero(test3))


// function countUniqueValues(arr){
//     let counter = 0;
//     let firstpointer = 0;
//     let secondpointer = firstpointer + 1;

//     while(firstpointer < arr.length ){
//         if(arr[firstpointer] === arr[secondpointer]){
//             secondpointer++
//             firstpointer++
//         } else if (arr[firstpointer] != arr[secondpointer]){
//             counter++
//             firstpointer++ 
//             secondpointer = firstpointer + 1
//         }
    
        
//     }
//     return counter
// }



// function countUniqueValues(arr){
//     let i = 0;
//     let j = 1;
//     while(j < arr.length  ){
//         if(arr[i] === arr[j]){
//             j++
//         }else {
//             i++
//            arr[i] = arr[j]
           
//            j++
//         }
    
//     }
//     return i +1 
// }

// let test1 = [1, 1, 1, 1, 1, 2]
// let test2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
// let test3 = []
// let test4 = [-2, -1, -1, 0, 1]
// let test5 = [1, 2, 3, 4, 4, 4]



// console.log(countUniqueValues(test2))

// function maxSubarraySum(arr, num){
//     let total = 0;
//     let highest = 0;
//     let counter = num;
//     let i = 0;
//     let j = 1;
//     while(j < arr.length){
//         let total = 0;
//         let temp = 0;
//         if(counter === 0 ){
//             counter = num;
//             temp = total;
//         }
//         if(counter > 0){
//             total += arr[j]
//             total += arr[i]
//             j += 2;
//             i += 2;
//             counter--
//             counter--
//         }
//         if(counter === 0 && j === arr.length){

//         }
//     }
// }

// function maxSubarraySum(arr, num){

//     for(let i = 0; i < arr.length; i++){
//        console.log(arr.slice(i, i+num).reduce((a, b )=> a + b, 0))
//     }
// }

// function grabHighestNumber(arr, num){
//     let highestNumber = -Infinity;
//     for(let i = 0; i < arr.length; i++){
//         let bigNum = maxSubarraySum(arr[i], num)
//         if(bigNum > highestNumber){
//             highestNumber = bigNum
//         }
//     }
//     return highestNumber
// }



// let test1 = [1, 2, 5, 2, 8,1, 5]
// let num1 = 2;
// let test2 = [1, 2, 5, 2, 8, 1, 5]
// let num2 = 4;
// let test3 = [4, 2, 1, 6]
// let num3 = 1;
// let test4 = []
// let num4 = 4;


// console.log(maxSubarraySum(test1, num1))

// function sameFrequency(num1, num2){
//     let obj = {};
//     let i = 0;
//     let j = 0;
//     let firstNum = num1.toString().split('')
//     let secondNum = num2.toString().split('')
//     while(i < firstNum.length){
//         if(!(obj[firstNum[i]])){
//             obj[firstNum[i]] = 1;
//         } else {
//             obj[firstNum[i]] += 1
//          }
//          i++
//     }

//    for(let j = 0; j < secondNum.length; j++){
//        let number = secondNum[j];

//        if(!(obj[number])){
//            return false
//        }else {
//            obj[number] -= 1
//        }
//    }
 
//     return true 


// }

// console.log(sameFrequency(182, 281))
// console.log(sameFrequency(34, 14))
// console.log(sameFrequency(3589578, 5879385))


// function areThereDuplicates(arr){
//     let i = 0;
//     let j = 1;
//     while(j < arr.length){
//         if(arr[i] === arr[j]){
//             return true
//         } else {
//             j++
//             i++
//         }
//     }
//     return false;
// }

// function areThereDuplicates(arr){
//     let obj = {};
//     console.log(arr)
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i])
//         if(!(obj[arr[i]])){
//             obj[arr[i]] = 1;
//         } else {
//             return true
//         }
//     }
//     return false
// }


function areThereDuplicates(){
    let args = arguments;
    let obj = [];
    for (var i = 0; i < args.length; i++) {
        obj.push(args[i])
      }
      return makeFrequencyCounter(obj)
}


function makeFrequencyCounter(obj){
   
    let hash = {}
    let i = 0;
    while(i < obj.length){
        if(!(hash[obj[i]])){
            hash[obj[i]] = 1

        } else {
            return true
        }
        i++
    }
    return false
}
// console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
// console.log(areThereDuplicates('a', 'b', 'c', 'a'))