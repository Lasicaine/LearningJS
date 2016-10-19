/*function findLongestWord(str) {
    var arrayOfWords = str.split(' ');
    var bigWords = 0;
    var i = 0;
    var arrLenght = arrayOfWords.length;

    while (i < arrLenght) {
        var wordsLenght = arrayOfWords[i].length;
        if (wordsLenght > bigWords) {
            bigWords = wordsLenght;
        }

        i++;

    }

    return bigWords;
}*/

function findLongestWord(str) {
    var arrayOfWords = str.split(' ');
    arrayOfWords.sort(function inverseCompareLengths(a, b) {
        return b.length - a.length;
    });
    var bigWords = arrayOfWords[0].length;

    return bigWords;

}

findLongestWord("The quick brown fox jumped over the lazy dog");