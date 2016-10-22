
function mutation(arr) {
  var str = arr[0].toLowerCase().split('');
  var charStr = arr[1].toLowerCase().split('');
 
  return charStr.every(function(comparsion) {
    return str.indexOf(comparsion) !== -1;
  });
}

mutation(["hello", "hey"]);
