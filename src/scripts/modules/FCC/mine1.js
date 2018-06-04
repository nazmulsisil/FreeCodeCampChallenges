function uniteUnique(arr) {
  const newArr = [];
  const isPresent = (item, whichArr) => {
    let notFound = true;
    for (let i = 0; i < whichArr.length; i++)
      if (whichArr[i] === item) notFound = false;
    if (notFound) whichArr.push(item);
  };
  Array.from(arguments).forEach(el => {
    if (Array.isArray(el)) el.forEach(subEl => isPresent(subEl, newArr));
    else isPresent(el, newArr);
  });

  return newArr;
}

export const mine1 = data => {
  if (data.times === 1) {
    console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
    return;
  }
  let count = 0;
  const start = new Date();
  while (new Date() - start < data.duration) {
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
    count++;
  }
  return count;
};
