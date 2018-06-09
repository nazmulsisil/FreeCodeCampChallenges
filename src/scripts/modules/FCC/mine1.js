function telephoneCheck(str) {
  return /1?[( ]?\d{3}[- )]?\d{3}[- ]?\d{4}/.test(str);
}

export const mine1 = data => {
  if (data.times === 1) {
    console.log(telephoneCheck('555-555-5555'));
    return;
  }
  let count = 0;
  const start = new Date();
  while (new Date() - start < data.duration) {
    telephoneCheck('555-555-5555');
    count++;
  }
  return count;
};
