let scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

function breakingRecords(scores) {
  let worstRecords = 0;

  let betterRecords = 0;

  let max = scores[0];
  let min = scores[0];

  for (let index = 0; index < scores.length; index += 1) {
    if (scores[index] > max) {
      max = scores[index];
      betterRecords = betterRecords + 1;
    }
    if (scores[index] < min) {
      min = scores[index];
      worstRecords = worstRecords + 1;
    }
  }

  console.log(`${worstRecords}, ${betterRecords}`);
}

breakingRecords(scores);
