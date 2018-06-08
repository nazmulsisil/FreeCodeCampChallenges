function smallestCommons(arr) {
  const resArr = [];
  for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    resArr.push(i);
  }

  let lcm = resArr[0];
  for (let i = 1; i < resArr.length; i++) {
    const GCD = gcd(lcm, resArr[i]);
    lcm = (lcm * resArr[i]) / GCD;
  }
  return lcm;

  function gcd(x, y) {
    if (y === 0) return x;
    return gcd(y, x % y);
  }
}

export const mine2 = data => {
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
