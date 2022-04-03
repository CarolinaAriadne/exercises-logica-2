let matrizes = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

function diagonalDifference (matriz){
     let leftDiagonal = 0;
     let rightDiagonal = 0;
     for(let index = 0; index < matriz.length; index +=1){
       leftDiagonal += matriz[index][index];
       rightDiagonal += matriz[index][matriz.length -1 - index];
     }

     return Math.abs(leftDiagonal -  rightDiagonal);
}

console.log(diagonalDifference(matrizes));
