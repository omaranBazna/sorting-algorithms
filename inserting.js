let arr = [1, 2, 4, -20, 20, 1, 2, 4];

let index = 0;
let min = Infinity;
let minIndex = -1;
for (let i in arr) {
  if (arr[i] < min) {
    min = arr[i];
    minIndex = i;
  }
}
[arr[index], arr[minIndex]] = [arr[minIndex], arr[index]];
