function fearNotLetter(str) {
  let expectedCharCode = str.charCodeAt(0);
  let curCharCode;
  for (let i = 1; i < str.length; i++) {
    expectedCharCode += 1;
    curCharCode = str.charCodeAt(i);

    if (curCharCode !== expectedCharCode) {
      return String.fromCharCode(expectedCharCode);
    }

    // const prevCharCode = str.charCodeAt(i - 1);
    // if (str.charCodeAt(i) !== prevCharCode + 1)
    //   return String.fromCharCode(prevCharCode + 1);
  }
}

export const mine2 = data => {
  if (data.times === 1) {
    console.log(fearNotLetter('abce'));
    return;
  }
  let count = 0;
  const start = new Date();
  while (new Date() - start < data.duration) {
    fearNotLetter('abce');
    count++;
  }
  return count;
};
