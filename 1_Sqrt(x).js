// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.



function numsqrt(x) {
    let squre=1
    let result=0
    while(squre*squre <= x){
        result=squre
        squre++

    }
    return result
    
};

const result= numsqrt(8)
console.log(result)