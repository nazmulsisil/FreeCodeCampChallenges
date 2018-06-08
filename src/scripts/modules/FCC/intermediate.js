function smallestCommons(arr) {
  const range = [];
  for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }

  let lcm = range[0];
  for (let i = 1; i < range.length; i++) {
    // looping for each
    const GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;

  function gcd(x, y) {
    // Implements the Euclidean Algorithm
    if (y === 0) return x;
    return gcd(y, x % y);
  }
}

export const intermediate = data => {
  if (data.times === 1) {
    console.log(smallestCommons([2, 4]));
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
