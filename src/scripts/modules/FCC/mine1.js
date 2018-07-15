function updateInventory(arr1, arr2) {
  // return JSON.parse(JSON.stringify([...arr1, ...arr2]))
  return [...arr1, ...arr2]
    .sort((a, b) => a[1] > b[1])
    .filter((el, i, cArr) => {
      if (i > 0 && cArr[i - 1][1] === el[1]) {
        cArr[i - 1][0] = cArr[i - 1][0] + el[0];
        return false;
      }
      return true;
    });
}

const curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone']
];

const newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste']
];

export const mine1 = data => {
  if (data.times === 1) {
    console.log(updateInventory(curInv, newInv));
    return;
  }
  let count = 0;
  const start = new Date();
  while (new Date() - start < data.duration) {
    updateInventory(curInv, newInv);
    count++;
  }
  return count;
};
