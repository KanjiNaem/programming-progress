// var matchResult = () =>
var gameArr = (s: string): string[] =>
  s
    .split("\n")
    .join("")
    .split(" ")
    .join("")
    .split(/(?<=^(?:.{2})+)(?!$)/);

function replaceGameState1(arr: string[]): number {
  let score = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(1) === "X") {
      score += 1;
    }
    if (arr[i].charAt(1) === "Y") {
      score += 2;
    }
    if (arr[i].charAt(1) === "Z") {
      score += 3;
    }
    if (
      (arr[i].charAt(0) === "A" && arr[i].charAt(1) === "X") ||
      (arr[i].charAt(0) === "B" && arr[i].charAt(1) === "Y") ||
      (arr[i].charAt(0) === "C" && arr[i].charAt(1) === "Z")
    ) {
      score += 3;
      continue;
    }
    if (arr[i].charAt(0) === "A") {
      if (arr[i].charAt(1) === "Y") {
        score += 6;
        continue;
      }
      continue;
    }
    if (arr[i].charAt(0) === "B") {
      if (arr[i].charAt(1) === "X") {
        continue;
      }
      score += 6;
    }
    if (arr[i].charAt(0) === "C") {
      if (arr[i].charAt(1) === "X") {
        score += 6;
        continue;
      }
      continue;
    }
  }
  return score;
}

function replaceGameState2(arr: string[]): number {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    // draw
    if (arr[i].charAt(1) === "Y") {
      counter += 3;
      if (arr[i].charAt(0) === "A") {
        counter += 1;
        continue;
      }
      if (arr[i].charAt(0) === "B") {
        counter += 2;
        continue;
      }
      counter += 3;
      continue;
    }
    // win
    if (arr[i].charAt(1) === "Z") {
      counter += 6;
      if (arr[i].charAt(0) === "A") {
        counter += 2;
        continue;
      }
      if (arr[i].charAt(0) === "B") {
        counter += 3;
        continue;
      }
      counter += 1;
      continue;
    }
    // lose
    if (arr[i].charAt(0) === "A") {
      counter += 3;
      continue;
    }
    if (arr[i].charAt(0) === "B") {
      counter += 1;
      continue;
    }
    counter += 2;
    continue;
  }

  return counter;
}

// const matchArr = gameArr(input);
// console.log(replaceGameState1(matchArr));
// console.log(replaceGameState2(matchArr));
