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
///////////////////////////
