///////////// OTHER USERS ///////////////////
String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

function titleCase(str) {
  var newTitle = str.toLowerCase().split(' ');
  var updatedTitle = [];
  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st].replaceAt(
      0,
      newTitle[st].charAt(0).toUpperCase()
    );
  }
  return updatedTitle.join(' ');
}

export const otherUser = data => {
  if (data.times === 1) {
    console.log(titleCase(data.paragraph));
    return;
  }
  let count = 0;
  const start = new Date();
  while (new Date() - start < data.duration) {
    titleCase(data.paragraph);
    count++;
  }
  return count;
};
