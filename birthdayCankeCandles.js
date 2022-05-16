let heightCandles = [3, 2, 1, 3, 5, 6, 8, 8, 8, 8,45,45];

function birthdayCakeCandles(candles) {
  let quantity = 0;
  let biggerCandle = 0;

  candles.sort((a, b) => b - a);

  biggerCandle = candles[0];

  candles.map((candle) => {
    if (candle === biggerCandle) {
      quantity += 1;
    }
  });
  return quantity;
}

console.log(birthdayCakeCandles(heightCandles));
