function myReplace(str, before, after) {
  //Create a regular expression object
  var re = new RegExp(before, 'gi');
  //Check whether the first letter is uppercase or not
  if (/[A-Z]/.test(before[0])) {
    //Change the word to be capitalized
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  //Replace the original word with new one
  var newStr = str.replace(re, after);

  return newStr;
}

export const intermediate = data => {
  if (data.times === 1) {
    console.log(
      myReplace(
        'A quick brown fox jumped over the lazy dog',
        'jumped',
        'leaped'
      )
    );
    return;
  }
  let count = 0;
  const start = new Date();
  while (new Date() - start < data.duration) {
    myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');
    count++;
  }
  return count;
};
