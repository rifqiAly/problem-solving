//start input area
//diambil asumi bahwa input selalu 5 angka di dalam array, karena tidak dijelaskan
let arr = [1, 3, 5, 7, 9];
//end input area

const miniMaxSum = (input) => {
  arr.sort();
  let maxSum = 0;

  for (let i = 0; i < input.length; i++) {
    const e = input[i];

    maxSum += e;
  }

  let minSum = maxSum - arr[arr.length - 1];
  maxSum -= arr[0];

  return `${minSum}  ${maxSum}`;
};

console.log(miniMaxSum(arr));
