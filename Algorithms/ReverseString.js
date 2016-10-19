function reverseString(str) {
  var reversStr = str.split('').reverse().join('');
  return reversStr;
}

reverseString("hello");