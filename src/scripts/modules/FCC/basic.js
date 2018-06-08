function smallestCommons(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });

  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  var quot = 0;
  var loop = 1;
  var n;

  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

export const basic = data => {
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
