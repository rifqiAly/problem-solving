//start input area
let input = "1 2 3 4 5";
//end input area

const formated = input.split(" ");
let toSum = [];
formated.forEach((val) => {
  toSum.push(parseInt(val));
});
toSum.sort();
let maxSum = 0;

for (let i = 0; i < toSum.length; i++) {
  const e = toSum[i];

  maxSum += e;
}

let minSum = maxSum - toSum[toSum.length - 1];
maxSum -= toSum[0];

console.log(`${minSum}  ${maxSum}`);
