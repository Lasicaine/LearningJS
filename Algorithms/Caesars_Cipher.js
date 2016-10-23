
function rot13(str) { // LBH QVQ VG!
  
  function decode(codeSymbol) {
    var index = codeSymbol.charCodeAt(0);
    if (index < 65 || index > 90) {
      return codeSymbol;
    }
    if (index < 78) {
      return String.fromCharCode(index + 13);
    } else { return String.fromCharCode(index - 13);}
  }
  
  return str.toUpperCase().split('').map(function(symbol){
    return decode(symbol);
  }).join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
