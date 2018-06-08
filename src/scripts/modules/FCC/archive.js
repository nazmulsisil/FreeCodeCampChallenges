function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .reduce((p, c) => {
      const cur = c.replaceAt(0, c.charAt(0).toUpperCase());
      return p === '' ? cur : `${p} ${cur}`;
    }, '');
}
titleCase('hello, I am need to be changed');

/////////////// MINE 1 Fastest ////////////////////////////////////////
function chunkArrayInGroups(arr, size) {
  const finalArr = [];
  let tempArr = [];
  let milestone = 0;
  for (let i = 0; i < arr.length; i++) {
    tempArr[i % size] = arr[i];
    if (tempArr.length === size || i === arr.length - 1) {
      finalArr[milestone] = tempArr;
      milestone++;
      tempArr = [];
    }
  }
  return finalArr;
}
chunkArrayInGroups(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2);

////////// not quick but shortest ///////////////
function destroyer(arr) {
  return arr.filter(el => [...arguments].slice(1).every(arg => el !== arg));
}

////// not quick but shortest ////
function destroyer(arr, ...args) {
  return arr.filter(el => !args.includes(el));
}

//////// mine fastest /////////
function destroyer(arr) {
  return arr.filter(el => {
    for (let i = 1; i < arguments.length; i++)
      if (el === arguments[i]) return false;
    return true;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//////// shortest mine ////////////
function getIndexToIns(arr, num) {
  return [...arr, num].sort((a, b) => a - b).indexOf(num);
}
/////// base, fastest, amar noi //////
function getIndexToIns(arr, num) {
  var times = arr.length;
  var count = 0;
  for (i = 0; i < times; i++) {
    if (num > arr[i]) {
      count++;
    }
  }
  return count;
}

getIndexToIns([5, 3, 20, 3], 5);

////////// mine /////////////////////
function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1.slice(), ...arr2.slice(n)];

  const myArr = [...arr2];
  myArr.splice(n, 0, ...arr1);
  return myArr;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);
///////////// mine //////////////////
function diffArray(arr1, arr2) {
  return [...arr1, ...arr2].sort().filter((cur, i, curArr) => {
    if (cur !== curArr[i - 1] && cur !== curArr[i + 1]) {
      return true;
    }
    return false;
  });
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
/////////// mine ////////////////////
function whatIsInAName(collection, source) {
  return collection.filter(obj =>
    Object.keys(source).every(prop => {
      return obj.hasOwnProperty(prop) && source[prop] === obj[prop];
    })
  );
}
whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }
  ],
  { last: 'Capulet' }
);
///////////// mine not fastest /////////////
function myReplace(str, before, after) {
  return str.replace(
    before,
    after.replace(/^\w/, L => (/^[A-Z]/.test(before) ? L.toUpperCase() : L))
  );
}

myReplace('Let us get back to more Coding', 'Coding', 'algorithms');
//////////// mine /////////////////
function pairElement(str) {
  const pair = { T: 'A', A: 'T', G: 'C', C: 'G' };
  return Array.from(str).map(el => [el, pair[el]]);
}
console.log(pairElement('GCG'));
////////// mine //////////////
function fearNotLetter(str) {
  for (let i = 1; i < str.length; i++) {
    const prevCharCode = str.charCodeAt(i - 1);
    if (str.charCodeAt(i) !== prevCharCode + 1)
      return String.fromCharCode(prevCharCode + 1);
  }
}
fearNotLetter('abce');
/////////// mine ////////////////
function uniteUnique(...args) {
  const newArr = [];
  args.forEach(el => {
    if (Array.isArray(el))
      el.forEach(subEl => {
        if (!newArr.includes(subEl)) newArr.push(subEl);
      });
    else if (!newArr.includes(el)) newArr.push(el);
  });

  return newArr;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
/////////// mine ////////////////
function sumFibs(num) {
  const fibArr = [1, 1];
  const numToPush = () => fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1];
  while (num >= numToPush()) fibArr.push(numToPush());
  return fibArr.reduce((a, b) => a + (b % 2 !== 0 ? b : 0), 0);
}
console.log(sumFibs(10));

///////////// other people ///////////
const sumFibs = (n, prev = 0, curr = 1, sum = 0) =>
  curr > n ? sum : sumFibs(n, curr, prev + curr, sum + (curr % 2 && curr));
sumFibs(4);
////////// mine not fastest not shortest. faster than int and adv /////////////////////
function sumPrimes(num) {
  if (num < 2) return 0;
  const primes = [2];

  for (let i = 3; i <= num; i++) {
    const sqrt = Math.sqrt(i);
    let isPrime = true;

    primes.some(el => {
      if (i % el === 0) isPrime = false;
      return el >= sqrt;
    });

    if (isPrime) primes.push(i);
  }

  return primes.reduce((a, b) => a + b);
}
sumPrimes(20); // returns 77
/////////////// /mine /////////////////
function steamrollArray(arr) {
  const newArr = [];
  processEl(arr);

  function processEl(el) {
    if (!Array.isArray(el)) newArr.push(el);
    else el.forEach(newEl => processEl(newEl));
  }

  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
//////////// mine /////////////////////////
function dropElements(arr, func) {
  // Drop them elements.
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return arr.slice(i);
  }
  return [];
}
dropElements([1, 2, 3], function(n) {
  return n < 3;
});
////////////// mine //////////////
function binaryAgent(str) {
  return str.replace(/(\d+)|(\s)/g, (m, p1) => {
    if (m === p1) return String.fromCharCode(parseInt(m, 2));
    else return '';
  });
}

binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
);
////////////mine//////////////////////
function truthCheck(collection, pre) {
  return collection.every(el => el[pre]);
}

truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
    { user: 'Laa-Laa', sex: 'female' },
    { user: 'Po', sex: 'female' }
  ],
  'sex'
);
///////// mine /////////////////////////
function addTogether() {
  const insider = function(a, b) {
    // do not use arrow here, arguments will break then
    if (typeof arguments[1] !== 'number') return;
    return a + b;
  };

  const args = [...arguments];
  if (args.length > 1) return insider(...args);
  else if (typeof args[0] === 'number') return insider.bind(null, args[0]);
}

addTogether(2);
/////////// made advanced solution readable ///////////////////////
function addTogether() {
  const args = [...arguments];
  if (args.some(el => typeof el !== 'number')) return undefined;
  if (args.length > 1) return args[0] + args[1];
  return a => (typeof a === 'number' ? a + args[0] : undefined);
}
addTogether(2, 3);
///////////// mine - didn't find hint page /////////////////////
const Person = class {
  constructor(firstAndLast) {
    let fName = firstAndLast.split(' ')[0].toString();
    let lName = firstAndLast.split(' ')[1].toString();

    this.getFirstName = () => fName;
    this.getLastName = () => lName;
    this.getFullName = () => `${fName} ${lName}`;
    this.setFirstName = first => (fName = first);
    this.setLastName = last => (lName = last);
    this.setFullName = full => {
      fName = full.split(' ')[0].toString();
      lName = full.split(' ')[1].toString();
    };
  }
};

const bob = new Person('Bob Ross');
///////////////////////////////////
