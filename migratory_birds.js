let arr = [1, 4, 4, 3, 3, 5];

// function numbersRepeat(arr) {
  let counts = {};
 arr.forEach((count) => {
   //  const que =  counts[count];
    counts[count] = (counts[count] || 0) + 1; 
    // console.log( counts[count]);
    
    console.log(counts);
   
 })
// }

// numbersRepeat(arr);

// counts[count] : é o elemento do array.

// (1 || 0) + 1
