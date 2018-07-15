function checkCashRegister(price, cash, cid) {
  const noteValues = new Map();
  noteValues.set('PENNY', 0.01);
  noteValues.set('NICKEL', 0.05);
  noteValues.set('DIME', 0.1);
  noteValues.set('QUARTER', 0.25);
  noteValues.set('ONE', 1);
  noteValues.set('FIVE', 5);
  noteValues.set('TEN', 10);
  noteValues.set('TWENTY', 20);
  noteValues.set('ONE HUNDRED', 100);
  let availableNotes = [...cid]
    .filter(arr => arr[1] > 0)
    .reverse()
    .map(arr => {
      return [arr[0], arr[1] / noteValues.get(arr[0])];
    });
  availableNotes.forEach(arr => arr.splice(1, 0, noteValues.get(arr[0])));
  function updateAvailability() {
    availableNotes = availableNotes.filter(arr => arr[2] > 0);
  }
  const biggestNoteNeeded = amt =>
    availableNotes.find(note => {
      return note[1] <= amt.toFixed(2);
    });
  let payBack = cash - price;
  let toDeduct = 0;
  const resObj = { status: 'OPEN', change: [] };
  const start = new Date();
  while (
    payBack > 0 &&
    biggestNoteNeeded(payBack) &&
    new Date() - start < 500
  ) {
    if (biggestNoteNeeded(payBack)) {
      toDeduct = biggestNoteNeeded(payBack)[1];
      availableNotes.forEach((arr, i) => {
        if (arr[1] === toDeduct) {
          availableNotes[i][2]--;
          let whereToPush = resObj.change.findIndex(note => {
            return note[0] === arr[0];
          });
          if (whereToPush >= 0) {
            resObj.change[whereToPush][1] += noteValues.get(
              resObj.change[whereToPush][0]
            );
          } else {
            resObj.change.push([arr[0], arr[1]]);
          }
        }
      });
      updateAvailability();
      payBack -= toDeduct;
    }
  }
  const amountInCash = availableNotes
    .map(arr => arr[2])
    .reduce((a, b) => a + b, 0);
  if (amountInCash > 0) {
    resObj.status = 'OPEN';
  } else if (amountInCash <= 0) {
    resObj.status = 'CLOSED';
  } else {
    resObj.status = 'INSUFFICIENT_FUNDS';
    resObj.change = [];
  }
  if (payBack > 0) {
    resObj.status = 'INSUFFICIENT_FUNDS';
    resObj.change = [];
  }
  if (resObj.status === 'CLOSED') {
    resObj.change = [...cid];
  }
  return resObj;
}

export const mine2 = data => {
  if (data.times === 1) {
    console.log(
      checkCashRegister(19.5, 20, [
        ['PENNY', 0.01],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 1],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0]
      ])
    );
    return;
  }
  let count = 0;
  const start = new Date();
  while (new Date() - start < data.duration) {
    checkCashRegister(19.5, 20, [
      ['PENNY', 0.01],
      ['NICKEL', 0],
      ['DIME', 0],
      ['QUARTER', 0],
      ['ONE', 1],
      ['FIVE', 0],
      ['TEN', 0],
      ['TWENTY', 0],
      ['ONE HUNDRED', 0]
    ]);
    count++;
  }
  return count;
};
