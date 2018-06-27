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

function vowelsAndConsonants(s) {
  let vowels = "";
  let consonants = "";
  for (let c of s) {
    if ("aeiou".includes(c)) {
      vowels += c + "\n";
    } else {
      consonants += c + "\n";
    }
  }

  console.log(vowels + consonants);
}

function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}
