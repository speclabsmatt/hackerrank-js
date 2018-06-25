"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .trim()
    .split("\n")
    .map(string => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const PI = Math.PI;

  let r = parseFloat(readLine());
  let area = Math.pow(r, 2) * PI;
  let perimeter = 2 * PI * r;

  console.log(area);
  console.log(perimeter);
}
