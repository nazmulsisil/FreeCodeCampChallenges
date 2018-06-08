const Person = class {
  constructor(firstAndLast) {
    let fName;
    let lName;
    this.getFirstName = () => fName;
    this.getLastName = () => lName;
    this.getFullName = () => `${fName} ${lName}`;
    this.setFirstName = first => createName(first);
    this.setLastName = last => createName(undefined, last);
    this.setFullName = flN => createName(undefined, undefined, flN);

    const createName = (f = fName, l = lName, full) => {
      fName = f;
      lName = l;
      if (full !== undefined) {
        fName = full.split(' ')[0].toString();
        lName = full.split(' ')[1].toString();
      }
      this.getFullName();
    };

    createName(undefined, undefined, firstAndLast);
  }
};

const bob = new Person('Bob Ross');
bob.setFirstName('Haskell');

export const mine1 = data => {
  if (data.times === 1) {
    console.log(bob.getFullName());
    return;
  }
  let count = 0;
  const start = new Date();
  while (new Date() - start < data.duration) {
    bob.getFullName();
    count++;
  }
  return count;
};

// delete
// const args = [...arguments];
// return args.some(n => typeof n !== 'number')
//   ? undefined
//   : args.length > 1
//     ? args[0] + args[1]
//     : n => (typeof n === 'number' ? n + args[0] : undefined);
