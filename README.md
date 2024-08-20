# Invent-test

<b>Technical Test Solutions</b>
<br/>
<b>Overview</b>
<br/>
This repository contains solutions for two coding problems: a FizzBuzz implementation and a search insert function. The solutions are written in JavaScript and are designed to handle various edge cases effectively.

<b>Functions</b>
<br/>

<b>1. FizzBuzz Function</b>
<br/>
   The FizzBuzz function prints numbers from 1 to a given integer i with specific rules:
<br/>
For numbers that are multiples of 3, it prints "Fizz".
For numbers that are multiples of 5, it prints "Buzz".
For numbers that are multiples of both 3 and 5, it prints "FizzBuzz".
For all other numbers, it prints the number itself.

// Example usage with edge cases
<br/>
console.log("Testing FizzBuzz(0):");
<br/>
FizzBuzz(0); // Expected: "Input must be a positive integer."
<br/>


console.log("Testing FizzBuzz(-5):");<br/>
FizzBuzz(-5); // Expected: "Input must be a positive integer."<br/>

console.log("Testing FizzBuzz(15):");<br/>
FizzBuzz(15); // Expected: FizzBuzz sequence from 1 to 15<br/>

<b>Edge Cases</b>
<br/>
FizzBuzz(0): Should print "Input must be a positive integer."
FizzBuzz(-5): Should print "Input must be a positive integer."
FizzBuzz(15): Should print the FizzBuzz sequence from 1 to 15.

<b>2. Search Insert Function</b>
<br/>

The searchInsert function finds the index at which a target value should be inserted into a sorted array of distinct integers. If the target is found, it returns its index. If not, it returns the index where it would be inserted to maintain order. This function uses binary search for an efficient solution with O(log n) runtime complexity.

<b>// Example usage</b>
<br/>
const nums = [1, 3, 5, 6];<br/>
console.log("searchInsert(nums, 5):", searchInsert(nums, 5)); // Expected: 2<br/>

console.log("searchInsert(nums, 2):", searchInsert(nums, 2)); // Expected: 1<br/>

console.log("searchInsert(nums, 7):", searchInsert(nums, 7)); // Expected: 4<br/>

console.log("searchInsert(nums, 0):", searchInsert(nums, 0)); // Expected: 0<br/>

<b>Edge Cases</b>
<br/>

Empty Array: The function should return 0 when the array is empty and the target is any value.
<br/>
Array with One Element: Tests should include arrays with a single element to verify correct insertion index.
<br/>
Target at the Beginning or End: Ensure that the function handles targets that should be inserted at the beginning or end of the array.<br/>

<b>Documentation</b>
<br/>
FizzBuzz Function: Handles positive integers and prints the sequence directly to the console. Edge cases are managed with a clear error message.<br/>

searchInsert Function: Efficiently finds the insertion index using binary search, with a time complexity of O(log n). Handles various edge cases effectively.<br/>


Conclusion<br/>


These solutions demonstrate problem-solving skills by implementing well-defined algorithms, handling edge cases, and providing clear, efficient code. The FizzBuzz function ensures that all output scenarios are covered, and the searchInsert function leverages binary search for optimal performance.
