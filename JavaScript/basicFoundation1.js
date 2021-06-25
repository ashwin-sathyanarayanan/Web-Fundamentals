
// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function returnNums(){
    var arr = [];
    for(i=1;i<=255;i++){
        arr.push(i);
    }
    return arr;
}
console.log(returnNums());

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function getEvenSum(){
    var sum = 0;
    for(i=1;i<=1000;i++){
        if(i%2==0){
            sum+= i;
        }
    }
    return sum
}
console.log(getEvenSum());

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function getOddSum(){
    var sum = 0;
    for(i=1;i<=5000;i++){
        if(i%2!=0){
            sum+= i;
        }
    }
    return sum
}
console.log(getOddSum());

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function arraySum(arr){
    var sum = 0;
    for(i=0;i<arr.length;i++){
        sum+= arr[i];
    }
    return sum;
}
console.log(arraySum([1,2,5]));
console.log(arraySum([-5,2,5,12]));

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function arrayMax(arr){
    var max = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i] > max)
        max= arr[i];
    }
    return max;
}
console.log(arrayMax([-3,3,5,7]));

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function arrayAvg(arr){
    var sum = 0;
    for(i=0;i<arr.length;i++){
        sum+= arr[i];
    }
    var avg = sum/arr.length
    return avg;
}
console.log(arrayAvg([1,3,5,7,20]));

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function returnOdd(){
    arr = []
    for(i=1;i<=50;i++){
        if(i % 2 != 0){
            arr.push(i);
        }
    }
    return arr
}
console.log(returnOdd())

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] 
// and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterThanY(arr,Y){
    var counter = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i]>Y){
            counter++;
        }
    }
    return counter;
}
console.log(greaterThanY([1, 3, 5, 7],3));

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function Squares(arr){
    for(i=0;i<arr.length;i++){
        arr[i] = arr[i]**2;
    }
    return arr;
}
console.log(Squares([1,5,10,-2]));

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function Negatives(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(Negatives([1,5,10,-2]));

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(arr){
    var returnArr = [];
    var sum = 0;
    var max = 0;
    var min = arr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i] > max)
        max= arr[i];
    }
    returnArr.push(max);
    for(i=0;i<arr.length;i++){
        if(arr[i] < min)
        min= arr[i];
    }
    returnArr.push(min);
    for(i=0;i<arr.length;i++){
        sum+= arr[i];
    }
    var avg = sum/arr.length
    returnArr.push(avg);
    return returnArr;
}
console.log(maxMinAvg([1,5,10,-2]));

// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapValues(arr){
    var temp = arr[arr.length -1];
    arr[arr.length -1] = arr[0];
    arr[0] = temp;
    return arr;
}
console.log(swapValues([1,5,10,-2]));

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numToString(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}
console.log(numToString([-1,-3,2]));