//start input area
let s = "7:5:45pm";
//end input area
let remvWhite = s.replace(" ", ""); //remove spaces
let lowered = remvWhite.toLowerCase(); //lowercasing
let sep;
for (let i = 0; i < lowered.length; i++) {
  const e = s[i];
  if (!(e / 1)) {
    sep = e;
    break;
  }
} // finding the separator
let conv = lowered.split(sep);

if (lowered.endsWith("pm")) {
  conv[2] = conv[2].replace("pm", "");
  let h = Number(conv[0]) + 12;
  if (h == 24) {
    conv[0] = "00";
  } else {
    conv[0] = h.toString();
  }
} else if (lowered.endsWith("am")) {
  conv[2] = conv[2].replace("am", "");
  if (conv[0] < 10) {
    conv[0] = `0${conv[0]}`;
  }
}
if (conv[2] < 10) {
  conv[2] = `0${conv[2]}`; //convert to 2digits seconds
}
if (conv[1] < 10) {
  conv[1] = `0${conv[1]}`; //convert to 2digits minutes
}
let res = conv.join(":");

console.log(res);
