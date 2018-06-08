function smallestCommons(arr) {
  const min = Math.min.apply(null, arr);
  const max = Math.max.apply(null, arr);
  let grandLCM = min;

  for (let i = min; i < max; i++) {
    grandLCM = (grandLCM * (i + 1)) / gcd(grandLCM, i + 1);
  }

  return grandLCM;

  function gcd(x, y) {
    if (y === 0) return x;
    return gcd(y, x % y);
  }
}

export const advanced = data => {
  if (data.times === 1) {
    console.log(smallestCommons([1, 13]));
    return;
  }
  let count = 0;
  const start = new Date();
  while (new Date() - start < data.duration) {
    smallestCommons([1, 13]);
    count++;
  }
  return count;
};
