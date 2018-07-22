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

function reverseString(s) {
  let result = "";
  try {
    let chars = s.split("");
    for (let i = chars.length - 1; i >= 0; i--) {
      result += chars[i];
    }
  } catch (e) {
    console.log(e.message);
    result += s;
  } finally {
    console.log(result);
  }
}

function main() {
  const s = eval(readLine());

  reverseString(s);
}
