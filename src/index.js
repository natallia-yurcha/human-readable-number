module.exports = function toReadable(number) {
    let currentNum = number;
    let hundreds = 0;
    let tens = 0;
    let currentNumStr = '';
    let hundredsStr = '';
    let tensStr = '';
    let resutlStr = '';
    if (currentNum >= 100 && currentNum <= 999) {
        hundreds = (currentNum - (currentNum % 100)) / 100;
        currentNum = currentNum % 100;
    }
    if (currentNum >= 20 && currentNum <= 99) {
        tens = (currentNum - (currentNum % 10)) / 10;
        currentNum = currentNum % 10;
    }

    switch (hundreds) {
        case 1:
            hundredsStr = "one hundred";
            break;
        case 2:
            hundredsStr = "two hundred";
            break;
        case 3:
            hundredsStr = "three hundred";
            break;
        case 4:
            hundredsStr = "four hundred";
            break;
        case 5:
            hundredsStr = "five hundred";
            break;
        case 6:
            hundredsStr = "six hundred";
            break;
        case 7:
            hundredsStr = "seven hundred";
            break;
        case 8:
            hundredsStr = "eight hundred";
            break;
        case 9:
            hundredsStr = "nine hundred";
            break;
    }

    switch (tens) {
        case 2:
            tensStr = "twenty";
            break;
        case 3:
            tensStr = "thirty";
            break;
        case 4:
            tensStr = "forty";
            break;
        case 5:
            tensStr = "fifty";
            break;
        case 6:
            tensStr = "sixty";
            break;
        case 7:
            tensStr = "seventy";
            break;
        case 8:
            tensStr = "eighty";
            break;
        case 9:
            tensStr = "ninety";
            break;
    }

    switch (currentNum) {
        case 0:
            currentNumStr = "zero";
            break;
        case 1:
            currentNumStr = "one";
            break;
        case 2:
            currentNumStr = "two";
            break;
        case 3:
            currentNumStr = "three";
            break;
        case 4:
            currentNumStr = "four";
            break;
        case 5:
            currentNumStr = "five";
            break;
        case 6:
            currentNumStr = "six";
            break;
        case 7:
            currentNumStr = "seven";
            break;
        case 8:
            currentNumStr = "eight";
            break;
        case 9:
            currentNumStr = "nine";
            break;
        case 10:
            currentNumStr = "ten";
            break;
        case 11:
            currentNumStr = "eleven";
            break;
        case 12:
            currentNumStr = "twelve";
            break;
        case 13:
            currentNumStr = "thirteen";
            break;
        case 14:
            currentNumStr = "fourteen";
            break;
        case 15:
            currentNumStr = "fifteen";
            break;
        case 16:
            currentNumStr = "sixteen";
            break;
        case 17:
            currentNumStr = "seventeen";
            break;
        case 18:
            currentNumStr = "eighteen";
            break;
        case 19:
            currentNumStr = "nineteen";
            break;
    }

    if (hundredsStr !== '') {
        resutlStr = hundredsStr;
    }

    if (tensStr !== '' && resutlStr !== '') {
        resutlStr = resutlStr + ' ' + tensStr;
    } else if (tensStr !== '') {
        resutlStr = tensStr;
    }

    if (resutlStr !== '' && currentNumStr !== 'zero') {
        resutlStr = resutlStr + ' ' + currentNumStr;
    } else if (resutlStr !== '' && currentNumStr === 'zero') {
        resutlStr = resutlStr;
    } else {
        resutlStr = currentNumStr;
    }
    return resutlStr;

}