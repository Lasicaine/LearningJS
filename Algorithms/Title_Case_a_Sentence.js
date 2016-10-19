function titleCase(str) {
    var arrayOfWords = str.split(' ');
    for (var i = 0, arrLength = arrayOfWords.length; i < arrLength; i++) {
        arrayOfWords[i] = arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1).toLowerCase();
    }
    var titleCaseString = arrayOfWords.join(' ');
    return titleCaseString;
}

titleCase("I'm a little tea pot");