let arr = [2, 4, 5, 2, 1, 2, 5];

///Time Complexity O(n*n)
for (let i of arr) {
  for (let j of arr) {
    if (arr[j] < arr[i]) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }
}
