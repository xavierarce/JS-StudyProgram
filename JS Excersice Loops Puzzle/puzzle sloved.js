array1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];


function answer(arr) {
    // Sort the input array in ascending order
    arr.sort((a, b) => a - b);
  
    const result = [];
    let currentArray = [];
  
    // Iterate over the sorted array
    for (let i = 0; i < arr.length; i++) {
      // If the current element is equal to the next element, add it to the current array
      if (arr[i] === arr[i + 1]) {
        currentArray.push(arr[i]);
      }
      // If the current element is not equal to the next element
      else {
        // Add the current element to the current array
        currentArray.push(arr[i]);
  
        // If the current array has more than one element, add it to the result array
        if (currentArray.length > 1) {
          result.push(currentArray);
        }
        // Otherwise, add the current element to the result array
        else {
          result.push(currentArray[0]);
        }
  
        // Reset the current array
        currentArray = [];
      }
    }
  
    return result;
}

console.log(answer(array1))
