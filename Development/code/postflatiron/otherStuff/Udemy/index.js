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



function countUniqueValues(arr){
    let i = 0;
    let j = 1;
    while(j < arr.length  ){
        if(arr[i] === arr[j]){
            j++
        }else {
            i++
           arr[i] = arr[j]
           
           j++
        }
    
    }
    return i +1 
}

let test1 = [1, 1, 1, 1, 1, 2]
let test2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
let test3 = []
let test4 = [-2, -1, -1, 0, 1]
let test5 = [1, 2, 3, 4, 4, 4]



console.log(countUniqueValues(test2))