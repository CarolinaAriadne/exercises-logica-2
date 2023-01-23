function numbersRepeat(arr) {
  let counts = {};
  arr.forEach((count) => {
    //  const que =  counts[count];
    counts[count] = (counts[count] || 0) + 1;
    // console.log( counts[count]);
  });

  const maxVal = Math.max(...Object.values(counts));
  const num = Object.keys(counts).find((key) => {
    return counts[key] === maxVal;
  });

  return num;
}

console.log(numbersRepeat([2, 4, 3, 2, 3, 1, 2, 1, 3, 3, 5]));

// numbersRepeat(arr);

// counts[count] : é o elemento do array.

// (1 || 0) + 1
