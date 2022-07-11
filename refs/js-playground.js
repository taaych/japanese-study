function fibonacci(length) {
    // your code here
    //takes in a number length, and returns a fibonacci up to that length
    //fibonacci = first and second numbers are 1
    ////then add the previous element to the current element
    //1, 1
    //1 + 1 = 2
    //1,1,2 (2 + 1 = 3)
    //1,1,2,3 (3 + 2 = 5)

    //store the previous sum
    //store the current sum
    //store the sequence in an array

    //[1, 1, previoussum, currentsum]
    //push the currentsum on the end of the array
    //add the elements at Index[length - 1] to Index [length - 2] for currentsum

    let previousSum, currentSum = 0;
    let fibonacciArray = [1,1];

    for(let i = 1; i <= length; i++){
        previousSum = fibonacciArray.length - 1;
        currentSum = fibonacciArray.length - 2;
        console.log(previousSum)
    }
}

// console.log(fibonacci(0)); // []
// console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
// console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
