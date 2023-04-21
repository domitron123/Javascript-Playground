function isSorted(arr) {
    // Returns true if the array is sorted, false otherwise.
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        return false;
      }
    }
    return true;
  }
  
  function bogosort(arr) {
    // Bogosorts the given array in-place.
    while (!isSorted(arr)) {
      arr.sort(() => Math.random() - 0.5);
    }
  }
  
  // Example usage:
  let arr = [9, 4, 12, 43, 1, 5, 2];
  bogosort(arr);
  console.log(arr);
  