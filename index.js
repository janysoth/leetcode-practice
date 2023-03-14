function romanToInt(s) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100, 
        D: 500,
        M: 1000,
    }

    let result = 0;

    for (let i = 0; i < s.length; i++){
        const currentNum = romanNumerals[s[i]]; 
        const previousNum = romanNumerals[s[i+1]]; 

        if (currentNum < previousNum)
            result -= currentNum;
        else result += currentNum;
    }
    return result; 
}

let romanArray = [];
romanArray.push('III');
romanArray.push('LVIII');
romanArray.push('MCMXCIV');

romanArray.forEach((string) => console.log(romanToInt(string)));



