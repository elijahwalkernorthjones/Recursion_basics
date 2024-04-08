

//loop scenario
// let count = 1
// function countFunc(){
//     while (count <= 3){
//         console.log(count);
//         count += 1;
//     }

// }

//recursive scenario where the function is called from within the function

// function count(n=1){
    // right here we set a brick wall for the function to return once it is met
//     if (n > 3) return;
//     console.log(n);
//     count(n + 1);
// }
// count()


// create a summing function that uses recursion

// sum([2,4,5]) --> = 11

//basic way using a for-let loop
// function sum(arr){
//     let sum = 0
//     for(let num of arr){
//         sum += num;
//     }
//     return sum;
// }

// using a classic for loop
// function sum(arr){
//     let sum = 0
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     console.log(sum);
// }

function sum(nums){
//base case
    if(nums.length === 0) return 0;
//normal case
    return nums[0] + sum(nums.slice(1));
}