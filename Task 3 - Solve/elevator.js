const calculateTime = (n, m, speeds) => {
  const a = speeds[0];
  const b = speeds[1];
  const c = speeds[2];
  const d = speeds[3];

  if (n === 0) return 0;

  const pureWalk = n * d;
  const elevFromN = Math.abs(n - m) * a + b + c + n * a + b;
  const elevFromM = Math.abs(n - m) * d + b + c + m * a + b;

  const shortestTime = Math.min(pureWalk, elevFromN, elevFromM);
  return shortestTime;
};

//checking examples given in question

console.log(calculateTime(4, 5, [1, 2, 3, 10])); //output 12
console.log(calculateTime(0, 5, [1, 2, 3, 10])); // output 0
console.log(calculateTime(4, 3, [2, 3, 4, 5])); //output 20
console.log(calculateTime(7, 6, [3, 1, 1, 4])); //output 25
