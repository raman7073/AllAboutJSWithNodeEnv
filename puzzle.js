function climb(depth, climb, slip) {
  let distance = 0;
  let days = 0;
  while (distance < depth) {
    distance += climb;
    if (distance >= depth) {
      days++;
      break;
    }
    distance -= slip;
    days++;
  }

  return days;
}
console.log(climb(100, 10, 4));
