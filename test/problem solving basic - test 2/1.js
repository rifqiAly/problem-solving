//start input area
let arr = [-4, 3, -9, 0, 4, 1];
//end of input area

let neg = [];
let pos = [];
let zero = [];

let ans1;
let ans2;
let ans3;

const plusMinus = (input) => {
  let neg = [];
  let pos = [];
  let zero = [];

  input.map((val) => {
    if (val == 0) {
      zero.push(val);
    } else if (val > 0) {
      pos.push(val);
    } else if (val < 0) {
      neg.push(val);
    }
  });

  let total = neg.length + zero.length + pos.length;
  ans1 = (pos.length / total).toFixed(6);
  ans2 = (neg.length / total).toFixed(6);
  ans3 = (zero.length / total).toFixed(6);
};

plusMinus(arr);
console.log(ans1);
console.log(ans2);
console.log(ans3);
