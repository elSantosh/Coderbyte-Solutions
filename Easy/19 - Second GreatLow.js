/***************************************************************************************
 *                                                                                      *
 *                  CODERBYTE BEGINNER CHALLENGE                                        *
 *                                                                                      *
 *  Second Great Low                                                                    *
 *  Using the JavaScript language, have the function SecondGreatLow(arr) take the array *
 *  of numbers stored in arr and return the second lowest and second greatest numbers,  *
 *  respectively, separated by a space. For example: if arr contains                    *
 *  [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and     *
 *  will contain at least 2 numbers. It can get tricky if there's just two numbers!     *                                              *
 *                                                                                      *
 *  SOLUTION                                                                            *
 *  This challenge has one outlier and that is if there are only two elements in the    *
 *  array. In that case you sort the pair and return each entry as the second highest   *
 *  and second lowest.                                                                  *
 *  Outside of that I am going to sort the array in ascending order and remove          *
 *  duplicate values. Then retorn the second entry and the next to last entry.          *
 *                                                                                      *
 *  Steps for solution                                                                  *
 *    1) Check for outlier of array with only two entries                               *
 *    2) Sort array in ascending order                                                  *
 *    3) Remove duplicate values                                                        *
 *    4) Return second and next to last values for answer                               *
 *                                                                                      *
 ***************************************************************************************/
// Step By Step
function SecondGreatLow(arr) {
  // Use the sort function and pass in a callback to sort from smallest to largest
  // If you haven't encountered function expressions/callbacks before, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort gives a good explanation of how this method works.
  arr = arr.sort(function (a, b) {
    return a - b;
  });

  // Loop through each item in the array and check if the adjacent array item is the same.
  for (var i = arr.length - 1; i > 0; i--) {
    if (arr[i] === arr[i - 1]) {
      // If it is, we use the .splice method to remove it.
      arr.splice(i, 1);
    }
  }

  if (arr.length > 2) {
    // If our array is longer than two items, we return the 2nd and 2nd to last item in the array.
    return arr[1] + " " + arr[arr.length - 2];
  } else if (arr.length === 2) {
    // If our array is exactly two items long, we return the 2nd and the first item
    return arr[1] + " " + arr[0];
  } else {
    // If our array is only one item, we return the only element twice.
    return arr[0] + " " + arr[0];
  }
}
