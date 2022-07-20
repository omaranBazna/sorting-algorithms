let arr = [4, 2, 0, 1, 5, 10, 12, 11];

let result = [];
let n = arr.length;
for (let u = 0; u < n; u++) {
  let min = Infinity;
  for (let i of arr) {
    min = Math.min(min, i);
  }
  result.push(min);
  arr.splice(arr.indexOf(min), 1);
}
console.log(result);
//Time complexity O(n*n);
///Space Complexity O(n);
