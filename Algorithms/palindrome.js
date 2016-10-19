
function palindrome(str) {
  var normalStr = str.replace(/[\W_]/g, "").toLowerCase();
  var reverseStr = normalStr.split('').reverse().join('');
  return normalStr === reverseStr;
}

palindrome("race Car");
