function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

export const advanced = data => {
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
