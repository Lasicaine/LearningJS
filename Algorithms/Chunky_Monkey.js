
function chunkArrayInGroups(arr, size) {
  var arrResult = [];
  var i = 0;
  while (i < arr.length) {
      arrResult.push(arr.slice(i, i + size));
      i += size;
  }
  return arrResult;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
