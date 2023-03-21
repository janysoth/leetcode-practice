
// function mostCommonInt(arraySize){
//     const commonNumber = []; // The array to store each element's frequency
//     let mostCount = 0; // The amount of the frequent element shown in the array
//     let mostElement = []; 
//     let randomArray = generateRandomArray(arraySize);

//     // Store the frequency of each element in the commonCount object
//     for (const num of randomArray)
//     commonNumber[num] = (commonNumber[num] || 0) + 1;

//     // To Check if there's a tie, show the largest element
//     for (const [key, count] of Object.entries(commonNumber)){
//         if (count >= mostCount || (count === mostCount && key > mostElement)){
//         mostCount = count;
//         mostElement = key;
//         }
//     }
    
//     //return Number(mostElement); // To covert an element to a number
//     return console.log(`Here's the array {${randomArray}}.
//     The number ${mostElement} has shown the most,  ${mostCount} times.`);
// }

// const generateRandomArray = (arraySize) => {
//     let randomArray = [];
//     for (let i = 0; i < arraySize; i++)
//         randomArray.push(Math.floor(Math.random()*11));
//     return randomArray;
// }

// mostCommonInt(4);

function mostCommonInt (arraySize){
    let maxCount = 0;
    let randomArray = generateRandomArray(arraySize);
    let mostCommonNum = randomArray[0];

    for (let i = 0; i < randomArray.length; i++) {
        let count = 0;

        // To Count How Many Time Each Number appears in the array:
        for (let j = 0; j < randomArray.length; j++){
            if (randomArray[i] === randomArray[j])
                count++;
        }

        // If there's tie, it will return the largest integer:
        if (count > maxCount || (count === maxCount && randomArray[i] > mostCommonNum)) {
            maxCount = count;
            mostCommonNum = randomArray[i];
        } 
    }
    return console.log(`Here's the array {${randomArray}}.
    The number ${mostCommonNum} has shown the most,  ${maxCount} times.`); 
}

// To Generate a random array giving the arraySize:
const generateRandomArray = (arraySize) => {
    let randomArray = [];
    for (let i = 0; i < arraySize; i++)
        randomArray.push(Math.floor(Math.random()*11));
    return randomArray;
}

mostCommonInt(1);