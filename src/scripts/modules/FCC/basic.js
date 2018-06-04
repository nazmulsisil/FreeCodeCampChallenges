function myReplace(str, before, after) {
  const index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  str = str.replace(before, after);
  return str;
}

export const basic = data => {
  if (data.times === 1) {
    console.log(
      myReplace('Let us get back to more Coding', 'Coding', 'algorithms')
    );
    return;
  }
  let count = 0;
  const start = new Date();
  while (new Date() - start < data.duration) {
    myReplace('Let us get back to more Coding', 'Coding', 'algorithms');
    count++;
  }
  return count;
};
