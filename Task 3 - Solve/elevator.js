const calculateTime = (n, m, speeds) => {
  const a = speeds[0];
  const b = speeds[1];
  const c = speeds[2];
  const d = speeds[3];

  if (n === 0) {
    return {
      time: 0,
      msg: "John is already at 0 floor",
    };
  }

  const pureWalkTime = { time: n * d, msg: "John go downstairs by walking" };
  const elevFromNTime = {
    time: Math.abs(n - m) * a + b + c + n * a + b,
    msg: "John go downstairs by using the elevator",
  };
  const elevFromMTime = {
    time: Math.abs(n - m) * d + b + c + m * a + b,
    msg: `John walks ${n - m} floor and takes the elevator from there`,
  };

  const shortestTime = Math.min(
    pureWalkTime.time,
    elevFromMTime.time,
    elevFromNTime.time
  );
  return shortestTime;
};

const solution = calculateTime(7, 6, [3, 1, 1, 4]);
console.log(solution);
