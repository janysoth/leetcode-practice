// Convert Integer to Roman Numerals
// function intToRoman(num){
// const romanNumerals = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }

//     let result = '';

//     for (let key in romanNumerals){
//         while (num >= romanNumerals[key]){
//         result += key;
//         num -= romanNumerals[key];
//         }
//     }
//     return result;
// }

let intToRoman = function (num) {
    let roman = '';
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10,9, 5,4, 1];
    let romanLetters = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            roman = roman + romanLetters[i];
            num = num - values[i];
        }
    }
    return roman;
};

let intArray = [];
intArray.push(3);
intArray.push(58);
intArray.push(1994);
intArray.push(1989);
intArray.push(2023);

intArray.forEach((num) => console.log(intToRoman(num)));
