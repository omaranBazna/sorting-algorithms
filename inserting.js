let arr = [1, 2, 4, -20, 20, 1, 2, 4];

let index = 0;
for (let i in arr) {
  let min = Infinity;
  let minIndex = -1;
  for (let i = index; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }
  [arr[index], arr[minIndex]] = [arr[minIndex], arr[index]];
  index++;
}
console.log(arr);
///Time Complexity O(n*n);
