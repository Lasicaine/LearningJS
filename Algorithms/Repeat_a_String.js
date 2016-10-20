function repeatStringNumTimes(str, num) {
    var resultStr = "";
    for (var i = 0; i < num; i++) {
        resultStr += str;
    }
    return resultStr;
}

repeatStringNumTimes("abc", 3);

//Two algoritms
function repeatStringNumTimes(str, num) {
    var resultStr = "";
    while (num > 0) {
        resultStr += str;
        num--;
    }
    return resultStr;
}

repeatStringNumTimes("abc", 3);