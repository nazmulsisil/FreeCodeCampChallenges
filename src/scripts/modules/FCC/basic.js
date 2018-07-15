var denom = [
  { name: 'ONE HUNDRED', val: 100.0 },
  { name: 'TWENTY', val: 20.0 },
  { name: 'TEN', val: 10.0 },
  { name: 'FIVE', val: 5.0 },
  { name: 'ONE', val: 1.0 },
  { name: 'QUARTER', val: 0.25 },
  { name: 'DIME', val: 0.1 },
  { name: 'NICKEL', val: 0.05 },
  { name: 'PENNY', val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  var change = cash - price;

  var register = cid.reduce(
    (acc, curr) => {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  if (register.total === change) return 'Closed';
  if (register.total < change) return 'Insufficient Funds';

  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      change = Math.round(change * 100) / 100;
    }
    if (value > 0) acc.push([curr.name, value]);
    return acc;
  }, []);

  if (change_arr.length < 1 || change > 0) return 'Insufficient Funds';

  return change_arr.map(arr => [arr[0], arr[1].toFixed(2)]);
}

export const basic = data => {
  if (data.times === 1) {
    console.log(
      checkCashRegister(3.26, 100, [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100]
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
