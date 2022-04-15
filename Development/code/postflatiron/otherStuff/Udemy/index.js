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


// function makeFrequencyCounter(obj){
   
//     let hash = {}
//     let i = 0;
//     while(i < obj.length){
//         if(!(hash[obj[i]])){
//             hash[obj[i]] = 1

//         } else {
//             return true
//         }
//         i++
//     }
//     return false
// }
// // console.log(areThereDuplicates(1, 2, 3))
// console.log(areThereDuplicates(1, 2, 2))
// console.log(areThereDuplicates('a', 'b', 'c', 'a'))


// function averagePair(arr, num){
//     let i = 0;
//     let j = 1;
  
//     if(arr === []){
//         return false 
//     }

//     while(i < arr.length - 1){
//        console.log(i)
//        console.log('-----')
//        console.log(arr.length)
//         if(j === arr.length){
//             console.log('hello butthole')
//             i++
//             j = i + 1
           
//     }
//         if((((arr[i] + arr[j]) / 2) === num)){
//             console.log('hello')
//             return true;

//         }  else {
//             console.log('hello james')
//             j++ 
           
//         }
         
//         } 
//         return false
     
// }

// console.log(averagePair([1, 2, 3], 2.5)) //true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12 , 19], 8)) // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) //false
// console.log(averagePair([], 4)) //false


// function isSubsequence(str1, str2){
//     let arr1 = str1.split('')
//     let arr2 = str2.split('')
//     console.log(arr1)
//     console.log(arr2)
//     let i = 0;
//     let j = 0;
//     while(j <= arr2.length){
//         if(i === arr1.length){
//             return true
//         }
//         if(arr1[i] === arr2[j]){
//             j++
//             i++
//         } else {
//             j++
//         }
        
//     }
//     return false
// }

// console.log(isSubsequence('hello', 'hello world')) // true 
// console.log(isSubsequence('sing', 'sting')) // true
// console.log(isSubsequence('abc', 'abracadabra')) //true
// console.log(isSubsequence('abc', 'acb')) // false (order mattters) 


// function maxSubarraySum(arr, num){
//     let i = 0;
//     let j = num - 1;
    
//     if(num > arr.length){
//         return null;
//     }
//     let totalSum = 0;

//     for(let i = 0; i < num; i++){
//         totalSum += arr[i]
//     }
    // while(j < arr.length){
    //     let temp = 0;
    //     let total = 0;
    //     let temparr = arr.slice(i, num).reduce((a, b) => a + b, 0)
    //     let othertemp = arr.slice(i + 1, num + 1).reduce((a, b) => a + b, 0)
    //     let answer = Math.max(temparr, othertemp)
    //     console.log(answer)
    //     j++
        
    // }
    // arr[i + j] - i 
    
// }

// console.log(maxSubarraySum([100, 200, 300, 400], 2)) // 700
// console.log(maxSubarraySum([1, 4, 3, 10, 23, 3, 1, 0, 20], 4)) // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6 , -1], 2)) // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) // 5
// console.log(maxSubarraySum([2, 3], 3)) // null




// function matrixSwitch(arr){
//     let first = 0;
//     let n = arr[0].length
//     for(let layer = 0; layer < n / 2; layer ++){

//     }
// }

// let temp = top;
// right = top[i][last]


// let matrix = [
//     [1, 5, 9, 13], 
//     [2, 6, 10, 14], 
//     [3, 7, 11, 15],
//     [4, 8, 12, 16],
// ]

// let matrix2 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9 ]
// ]

// console.log(matrixSwitch(matrix))
// console.log(matrixSwitch(matrix2))

// function subStringRotation(str1, str2){
//    let index =  str1.indexOf(str2[0])
// //    console.log(str1.slice(index))
// //    console.log(str1.slice(0, index))
//    let word = str1.slice(index) + str1.slice(0, index)

//    if(word === str2){
//        return true
//    } else {
//        return false 
//    }
    

// }

// let word = 'waterbottle'
// let testcase = 'erbottlewat'
// // console.log(subStringRotation())
// console.log(subStringRotation(testcase, word))

// function findTheZero(matr){
//     let indexs = [];
//     for(let i = 0; i < matr.length; i++){
//             for(let j = 0; j < matr[i].length; j++){
//                 if(matr[i][j] === 0){
//                     indexs.push([matr.indexOf(matr[i]),matr[i].indexOf(matr[i][j])])
//                 }
//             }
//     }
//     for(let num = 0; num < indexs.length; num++){
//         changeColumn(indexs[num][0], matr)
//         changeRow(indexs[num][1], matr)
//     }

//     // return matr
// }

// function changeColumn(num, matr){
//     for(let i = 0; i < matr.length; i++){
//         if(num === matr[i]){
//             console.log(num)
//             // for(let j = 0; j < matr[i].length; j++){
//             //     matr[i][j] = 0
//             // }
//         }
//     }
//     return matr
// }

// function changeRow(num, matr){
//     for (let i = 0; i < matr.length; i++){
//         for(let j = 0; j< matr[i].length; j++){
//             // if(matr.indexOf(matr[i][j] === num))
//             // {
//                 console.log(matr.indexOf(matr[i][j]))
//             //     console.log(num)
//             //     // matr[i][j] = 0;
//             // }
//         }
//     }
//     return matr
// }


// let matrix = [
//     [1, 1, 1, 1, 1, 0, 1],
//     [1, 1, 1, 1, 1, 1, 1], 
//     [1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1],
// ]
// console.log(findTheZero(matrix))
// console.log(findTheZero())

// function numberOfWays(arr, k){
//     let i = 0;
//     let j = 0;
//     let count = 0;


//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] + arr[j] === k ){
//             count += 1
//             j++
            
//         }
    
        
//         j++ 
//     }
    


// }

// let arr1 = [1, 5, 3, 3, 3]
// let num = 6; 
// console.log(numberOfWays(arr1, num))


// function power(num1, num2){
// if(num2 === 0) return 1
//     return num1 * power(num1, num2 - 1)
// }


// console.log(power(2, 0)) //1
// console.log(power(2, 2)) //4
// console.log(power(2, 4)) //16


// function factorial(num){
//     if(num === 0) return 1
//     return num * factorial(num - 1)
// }

// console.log(factorial(1)) //1
// console.log(factorial(2)) //2
// console.log(factorial(4)) //24
// console.log(factorial(7)) //5040

// function productOfArray(arr){
//     if(arr.length === 0) return 1;
   
  
//      return arr[0] * productOfArray(arr.slice(1))
     
// }

// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1, 2, 3, 10])) // 60

// function recursiveRange(num){
//     if(num === 0) return 0
//     return num + recursiveRange(num - 1)
// }

// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55


// function fib(num){
//     let sequence = [1, 1];
//     function helper(){
//         if(sequence.length === num ){
//             return sequence[sequence.length - 1]
//         }
        
//         sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
        
//         return helper(num)
//     }
    
//     return helper(num)
// }

// console.log(fib(4)) // 3
// console.log(fib(10)) //55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465

// function isPalindrome(word){
//     let i = 0;
//     let j = word.length - 1

    


//     function helper(){
      
//         if(i >= j){
//             return true
//         }
//         if(word[i] === word[j]){
//             helper(i + 1, j - 1)
//         }
//         return false 
//     }
   
//     helper()
// }

// //dod // true 
// console.log(isPalindrome('awesome')) //false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) //true


// function flatten(arr){
//     let newArr = [];

//     return inner(arr, newArr)
// }

// function inner(arr, newArr){
//     if(arr.length === 0){
//         return newArr
//     }
//     if(typeof(arr[0]) === "number"){
//         newArr.push(arr[0])
//     }
//     if(typeof(arr[0]) === "object"){
//         console.log(arr[0])
//       return anotherOne(arr[0], newArr)
//     }

//     return inner(arr.slice(1), newArr)
// }


// function anotherOne(arr, answer){
//     arr.forEach((what)=> {
//        if(what != '[' || ']'){
//            answer.push(what)
//        }
//     })
//     return answer
// }



// // // console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4],[5]]])) // [1,, 2, 3, 4, 5]
// console.log(flatten([1], [2] [3])) // [1, 2, 3]

// function capitalizeFirst(arr){
//     let newArr = []
    
//     function helper(arr){
//         if(arr.length === 0){
//             return newArr
//         }
//         newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1).toLowerCase())
//        return helper(arr.slice(1))
//     }
    
// return helper(arr)


    

// }


// console.log(capitalizeFirst(['car', 'taco', 'banana'])) // ['Car', 'Taco', 'Banana']


// function stringifyNumbers (obj) {
  
//   let newObj = makeNewObj(obj)
 
//   return inner(newObj)

//   }
  
// function makeNewObj(obj){
//     let newObj = {};
//     for(let key in obj){
//         if(!(newObj[key])){
//           newObj[key] = obj[key]
//         }
//     }
//     return newObj
// }


// function inner(newObj){
//     for(let key in newObj){
//       if(objOrNot(newObj[key], "number")){
//         newObj[key] = toString(newObj[key])
//     } 
//       if((objOrNot(newObj[key], "object"))){
//           inner(newObj[key])
//       }
     
//     }
//     return newObj
// }

// function objOrNot(something, thing){
//     return (typeof(something) === thing)
// }

//   function toString(num){
//       return num.toString()
     
//   }
  

//   function sumArr(arr){
//     console.log(arr)
//     let total = 0;
//     function inner(arr, total){
//         if(arr.length === 0 ){
//             return total
//         }
//         total += arr[0]
//        return inner(arr.slice(1), total)
//     }
   
//     return inner(arr, total)
//   }
//   var obj1 = {
//     outer: 2,
//     obj: {
//       inner: 2,
//       otherObj: {
//         superInner: 2,
//         notANumber: true,
//         alsoNotANumber: "yup"
//       }
//     }
//   }
  
//   var obj2 = {
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'}
//   };
  
//   console.log(nestedEvenSum(obj1)); // 6
//   console.log(nestedEvenSum(obj2)); // 10



//   if (objOrNot(obj[key])){
//     isEven(obj[key], arr)
// } if(!(objOrNot(obj[key]))) {
//    inner(obj[key], arr)
// }


// function capitalizedWords(arr){
//     let sentence = []
//     for(let word of arr){
//         sentence.push(capitalizeWord(word))
//     }
//     return sentence
// }

// function capitalizeWord(word){
//     let newWord = "";
//     function inner(newWord, word){
//         if(word.length === 0){
//             return newWord
//         } 
//         newWord += word[0].toUpperCase()
//        return inner(newWord, word.slice(1))
//     }
//    return inner(newWord, word)
// }

//  let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']



// function stringifyNumbers(obj){

// }

// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }


// console.log(stringifyNumbers(obj))


// function collectStrings(obj){
//      let answer = [];
//      function inner(obj, answer){
//       for(let key in obj){
//         if(typeof(obj[key]) === 'string'){
//            answer.push(obj[key])
//         }
//         if(typeof(obj[key]) === "object"){
//            inner(obj[key], answer)
//         }
//        }
//      }
//      inner(obj, answer)
//     return answer

// }


// const obj = {
//   stuff: "foo",
//   data: {
//       val: {
//           thing: {
//               info: "bar",
//               moreInfo: {
//                   evenMoreInfo: {
//                       weMadeIt: "baz"
//                   }
//               }
//           }
//       }
//   }
// }

// console.log(collectStrings(obj)) // ["foo", "bar", "baz"])


// const testArray = [1,4,29,10,6]

// function ForLoop (arr){
  
//   for(let i = 0; i < arr.length ; i ++){
//    let firstValue = arr[i];
//    let firstIndex = i;
//     for(let j = i + 1; j< arr.length; j++){
//       if (firstValue > arr[j]){
//           firstValue = arr[j]
//             firstIndex = j;
//       }
//       }
//       if(arr[i] != firstValue){
//         arr = swap(arr,firstValue, firstIndex, i ) 
//       }
//     }
    
//   return arr
// }

// const swap = (arr, x, index2, i) => {
//     let temp = arr[i];
//     arr[i] = arr[index2];
//     arr[index2] = temp;
  
//     return arr
// }

// console.log(ForLoop(testArray))


// function insertionSort(arr){
//     let i = 0;
//     let j = i + 1
//     while(j < arr.length){
        
//         if(arr[j] < arr[i]){
//             let temp = arr[i]
//             arr[i] = arr[j];
//            arr[j] = temp
           
//         }


//         j++
//         i++
//     }
//     return arr
// }

// function insertionSort(arr){
    
//     for(let i = 0; i < arr.length; i++){
//         let j = i + 1;
//         let h = i;
//         while(j > 0){
//             if (arr[j] < arr[h]){
//                 let temp = arr[h]
//                 arr[h] = arr[j]
//                 arr[j] = temp 
//             }
//             h--
//             j--
//         }
//     }
//     return arr
// }


// // console.log(insertionSort([2, 6, 5, 3, 8, 10, 9]))

// console.log(insertionSort([100, 82, 55, 96, 2, 12, 8]))


// function mergeSort(arr1, arr2){
//     let i = 0;
//     let j = 0;
//     let answerArr = [];
    
//     while(i < arr1.length || j < arr2.length ){
        
//         if(arr1[i] < arr2[j]){
//             answerArr.push(arr1[i])
//             i++ 
//         }
//         if(arr2[j] < arr1[i]){
//             answerArr.push(arr2[j])
//             j++
//         }
//         if( i === arr1.length){
//             return answerArr.concat(arr2.slice(j))
//         }
        
//         if( j === arr2.length){
//             return answerArr.concat(arr1.slice(i))
//         }
//     }
//     return answerArr
// }

// function recursion(arr){
//     if(arr.length <= 1){
//         return arr
//     }
//       if(arr.length % 2 === 0){
// //    recursion(arr.slice(0, arr.length /2), answer)
//     return mergeSort(recursion(arr.slice(arr.length /2)), recursion(arr.slice(0, Math.floor(arr.length/2))))
//   }
//    else {
//        return mergeSort(recursion(arr.slice(0, Math.floor(arr.length/2))), recursion(arr.slice(Math.floor(arr.length/2))))
//     // recursion(arr.slice(0, Math.floor(arr.length/2)))
//     // recursion(arr.slice(Math.floor(arr.length/2)))
//   }
// }

// function outerFunction(arr){
  
//     return recursion(arr)
// }

// function sorting(arr){
//     if(arr.length <= 1){
        
//     }
//   if(arr.length % 2 === 0){
//     sorting(arr.slice(0, arr.length /2))
//     sorting(arr.slice(arr.length /2))
//   } else {
//     sorting(arr.slice(0, Math.floor(arr.length/2)))
//     sorting(arr.slice(Math.floor(arr.length/2)))
//   }
// }


// console.log(outerFunction([1,10, 50, 2, 8, 4, 35]))

// let temp = arr[h]
//                 arr[h] = arr[j]
//                 arr[j] = temp 

// function pivot(arr, index1 = 0, index2 = arr.length -1){
//    let pivotVar = arr[index1];
//    let currentIndex = index1; 
//    for(let i = 0; i < arr.length; i++){
//        if (pivotVar > arr[i]){
//             currentIndex++;
//             arr = swap(arr, i, currentIndex)
//        }
//    }
//    arr = swap(arr, index1, currentIndex)
//    return currentIndex
// }



// function swap(arr, ele1 , ele2 ){
//     let temp = arr[ele1]
//     arr[ele1] = arr[ele2]
//     arr[ele2] = temp

//     return arr
// }

// let testArr = [25, 10,8, 9, 100]
// let startIndex = 0;
// let endIndex = testArr.length - 1




// function quickSort(arr, left = 0, right = arr.length - 1){
//     if(left < right){
//         let updatedIndex = pivot(arr)
//         quickSort(arr, left, updatedIndex -1)
//         quickSort(arr, updatedIndex + 1, right)
//         return arr
//     }
    

    
    
// }
// // console.log(swap(testArr, 2, 4))
// console.log(quickSort(testArr))


// function getDigit(num, place){
//     let count = place;
    
//     let stringNum = num.toString()
//     let j = stringNum.length -1
//     for(let i = count; i >= 0; i--){
//         if(i === 0){
//             return parseInt(stringNum[j])
//         }
//             // return parseInt(stringNum[i])
//         j++
//     }
// }
// function getDigit(num, i){
//     return Math.floor(Math.abs(num) / Math.pow(10, i )) % 10;
// }



// function digitCount(num){
//     return String(num).length 
// }

// function mostDigits(nums){
//     let largestNum = digitCount(nums[0]); 
//     for(let i = 1; i < nums.length; i++){
//         if(largestNum < digitCount(nums[i])){
//             largestNum = digitCount(nums[i])
//         }
//     }
//     return largestNum
// }

// // function outerFunction(nums){
// //     let largestDigit = mostDigits(nums)
// //     let k = 0;
// //     while(k <= largestDigit){
// //         for(let i =0; i < nums.length; i++){
// //             (getDigit(nums[i], k))
// //         }
// //         k++
// //     }
// // }

// function radixSort(nums){
//     let largestDigit = mostDigits(nums)
//     let newNums = nums;
   
//     let buckets = []
//     for(let k = 0;  k < largestDigit; k++){
       
//         for(let i = 0; i < nums.length; i ++){
//            buckets = helper(buckets, getDigit(newNums[i], k), newNums[i])
          
//         }
//       newNums = arrayMerger(buckets)
//         buckets = [] 
//     }
// return newNums
// }
// function helper(arr, key, element){
//     if(!(arr[key])){
//         arr[key] = [element]
//     } else {
//         arr[key].push(element)
//     }
//     return arr
// }

// function arrayMerger(arr){
//     newArr = arr.filter(value=> typeof(value) === 'object')
    
//     return [].concat.apply([], newArr)
// }


// // console.log(arrayMerger([[1], [3]]))


//  console.log(radixSort([1234, 56, 7, 74])) //5


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val)

        if(!(this.head)){
            this.head = newNode

            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
           
            
        }
        this.length += 1
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let currentNode = this.head
        let previousNode = null;
        while(currentNode.next){
            previousNode = currentNode
            currentNode = currentNode.next
           
        }
        previousNode.next = null
        this.tail = previousNode;
        this.length--
        return this;
    }

    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--
        return temp
    }

    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
    //     let str = '.next'
    //     let longString = str.repeat(index)
    //    return this.head + longString
    let counter = 0;
    let currentNode = this.head
        let previousNode = null;

    while(counter <= index){
       if(counter === index){
           return currentNode
       }
        previousNode = currentNode
        currentNode = currentNode.next
        counter++;
    }
       
    }

    set(val, idx){
        let node = this.get(idx)
        if(!node) { return false; }
        else {
           node.val = val;
            return true;
        }
    }

    insert(val, idx){
        let newNode = new Node(val)
        if(idx < 0 || idx > this.length) return false;
        if(idx === this.length){
            this.push(val)
            return true;
            
        }
        if(idx === 0){
            this.unshift(val)
            return true
        } else {
            let node = this.get(idx - 1)
            newNode.next = node.next;
            node.next = newNode;
            this.length++
            return true;
        }
    }

    remove(idx){
        if(idx < 0 || idx > this.length) return undefined;
        if(idx === this.length - 1) return this.pop();
        if(idx === 0) return this.shift();
        let node = this.get(idx - 1);
        let temp = node.next
        node.next = temp.next
        this.length--
        return temp
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let nextVar;
        let prevVar = null; 
     
     

        for(let i = 0; i < this.length; i++){
           
    
            nextVar = node.next;
            node.next = prevVar;
            prevVar = node;
            node = nextVar;
            
           
        }
        return this

    }
}


let list = new SinglyLinkedList()
list.push(2)
list.push(4)
list.push(6)
list.push(8)
list.push(10)
console.log(list.reverse())


console.log(list)




