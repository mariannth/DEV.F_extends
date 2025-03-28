function encontrarPar(array, target) {
    let left = 0;
    let right = array.length - 1;
    
    while (left < right) {
        let result = array[left] + array[right];
        if (result === target) {
            return [array[left], array[right]];
        } else if (result < target) {
            left++;
        } else {
            right--;
        }
    }
    return null;
}

let arr = [2, 7, 11, 15];
let target = 9;
let result = encontrarPar(arr, target);
console.log(result);


function improvedTwoSum(arr, target) {
    let left = 0; 
    let right = arr.length - 1;

    let counter = 0;
    while (left < right) {
        let result = arr[left] + arr[right];
        if (result === target) {
            return [arr[left], arr[right]];
        }
        counter++;
        if(counter % 2 === 0) {
            right--;
        } else {
            left++;
        }
    }
    return null;
}

let newArr = [2, 15, 11, 7];
let improvedResult = improvedTwoSum(newArr, target);

function impTowSum(arr, target){
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [arr[i], arr[j]];
            }
        }    
    }
    return null;
}

