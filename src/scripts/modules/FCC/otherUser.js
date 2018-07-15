let x;
function updateInventory(arr1, arr2) {
  arr2.forEach((e, i) => {
    x = arr1.map(e => e[1]).indexOf(e[1]);
    if (x == -1) arr1.push(e);
    else arr1[x][0] += e[0];
  });
  return arr1;
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

export const otherUser = data => {
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
