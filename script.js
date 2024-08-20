/**
 * Generates a FizzBuzz sequence from 1 to `i`.
 * For each number from 1 to `i`:
 * - Print "Fizz" if the number is a multiple of 3.
 * - Print "Buzz" if the number is a multiple of 5.
 * - Print "FizzBuzz" if the number is a multiple of both 3 and 5.
 * - Print the number itself if none of the above conditions are met.
 *
 * @param {number} i - The upper limit of the sequence (must be a positive integer).
 */

function FizzBuzz(i) {
  if (i <= 0) {
    console.log("Input must be a positive integer.", i);
    return i;
  }
  for (let num = 1; num <= i; num++) {
    let output = "";
    if (num % 3 === 0) output += "Fizz";
    if (num % 5 === 0) output += "Buzz";
    console.log(output || num);
  }
}

/**
 * Example usage of the FizzBuzz function.
 */
console.log(FizzBuzz(15));
// Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz

// Edge case for FizzBuzz
console.log("FizzBuzz(0):", FizzBuzz(0)); // Should handle zero gracefully
console.log("FizzBuzz(-5):", FizzBuzz(-5)); // Should handle negative numbers gracefully

/////////////// QUESTION 2 //////////

/**
 * Finds the index at which the target value should be inserted
 * into a sorted array to maintain order.
 *
 * Uses binary search to achieve O(log n) time complexity.
 *
 * @param {number[]} nums - A sorted array of distinct integers.
 * @param {number} target - The target value to insert.
 * @returns {number} - The index where the target should be inserted.
 */
function searchInsert(nums, target) {
  let left = 0; // Starting index
  let right = nums.length; // Ending index (one past the last element)

  while (left < right) {
    const mid = (left + right) >>> 1; // Calculate the middle index

    if (nums[mid] < target) {
      left = mid + 1; // Move the left boundary up
    } else {
      right = mid; // Move the right boundary down
    }
  }

  return left; // The insertion index
}

// Example usage:
console.log("searchInsert([1, 3, 5, 6], 5):", searchInsert([1, 3, 5, 6], 5)); // 2
console.log("searchInsert([1, 3, 5, 6], 2):", searchInsert([1, 3, 5, 6], 2)); // 1
console.log("searchInsert([1, 3, 5, 6], 7):", searchInsert([1, 3, 5, 6], 7)); // 4
console.log("searchInsert([1, 3, 5, 6], 0):", searchInsert([1, 3, 5, 6], 0)); // 0

// Edge cases for searchInsert
console.log(searchInsert([], 5)); // Empty array
console.log(searchInsert([1], 0)); // Single element, target is less than the element
console.log(searchInsert([1], 1)); // Single element, target equals the element
console.log(searchInsert([1], 2)); // Single element, target is greater than the element
console.log(searchInsert([1, 3, 5, 7, 9], 6)); // Target between elements
