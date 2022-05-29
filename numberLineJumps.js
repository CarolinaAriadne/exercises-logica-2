let cang1 = 0;
let jump1 = 2;
let cang2 = 3;
let jump2 = 1;

function canguru(cang1, jump1, cang2, jump2) {
  let yes = "SIM";
  let not = "NÃO";

  if (cang1 === cang2) {
    if (jump1 === jump2) {
      console.log(`A resposta é ${yes}`);
    } else {
      console.log(`A resposta é ${not}`);
    }
  }
  if (cang1 > cang2) {
    if (jump2 > jump1) {
      console.log(`A resposta é ${yes}`);
    } else {
      console.log(`A resposta é ${not}`);
    }
  } else {
    if (jump1 > jump2) {
      console.log(`A resposta é ${yes}`);
    } else {
      console.log(`A resposta é ${not}`);
    }
  }
}

canguru(cang1, jump1, cang2, jump2);

// function kangaroo(x1, v1, x2, v2) {
//   let jump1 = x1;
//   let jump2 = x2; //4
//   let yesNo = "NO";

//   for (let index = 0; index < 10000; index += 1) {
//     jump1 += v1;
//     if (jump1 === jump2) {
//       yesNo = "YES";
//     }
//   }

//   return yesNo;
// }

// console.log(kangaroo(0, 3, 4, 2));
