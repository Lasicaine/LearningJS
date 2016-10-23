
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var i = arr.sort((current, next) => current > next).findIndex(function(element){
   return element>=num;
  });
  return i >= 0 ? i : arr.length;
}

getIndexToIns([40, 60], 50);
