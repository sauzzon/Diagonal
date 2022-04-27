const calculateTime = (n, m, speeds) => {
  const a = speeds[0];
  const b = speeds[1];
  const c = speeds[2];
  const d = speeds[3];

  if (n === 0)
    return {
      time: 0,
      msg: "John is already at 0 floor.",
    };

  const times = [
    n * d, // pure walking
    Math.abs(n - m) * a + b + c + n * a + b, // elevator from N
    Math.abs(n - m) * d + b + c + m * a + b, // elevator from M
  ];

  const msgs = [
    "John go downstairs by walking.",
    "John go downstairs by using the elevator.",
    `John walks  ${Math.abs(n - m)} floor and takes the elevator from there.`,
  ];

  const shortestTime = Math.min(...times);
  const shortestMsg = msgs[times.indexOf(shortestTime)];
  return {
    time: shortestTime,
    msg: shortestMsg,
  };
};

//checking examples given in question

console.log(calculateTime(4, 5, [1, 2, 3, 10])); //output 12 - John go downstairs by using the elevator.
console.log(calculateTime(0, 5, [1, 2, 3, 10])); // output 0 - John is already at 0 floor.
console.log(calculateTime(4, 3, [2, 3, 4, 5])); //output 20 - John go downstairs by walking.
console.log(calculateTime(7, 6, [3, 1, 1, 4])); //output 25 - John walks 1 floor and takes the elevator from there.
