let arr = [4, 2, 0, 1, 5, 10, 12, 11];

let result = [];
for (let u in arr) {
  let min = Infinity;
  for (let i of arr) {
    min = Math.min(min, i);
  }
  result.push(min);
  arr.splice(arr.indexOf(min), 1);
}
console.log(result);
