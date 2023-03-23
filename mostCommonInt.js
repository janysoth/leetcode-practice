let names = ['Kirko', 'Jettas', 'Dalvin', 'KOC', 'KAM'];

function mostCommonInt(arraySize){
    const commonNumber = []; // The array to store each element's frequency
    let maxCount = 0; // The amount of the frequent element shown in the array
    let mostCommonInt = []; 
    let randomArray = getRandomArray(arraySize);

    // Store the frequency of each element in the commonCount object
    // for (const num of randomArray)
    // commonNumber[num] = (commonNumber[num] || 0) + 1;

    randomArray.forEach((num) => commonNumber[num] = (commonNumber[num] || 0) + 1);

    // To Check if there's a tie, show the largest element
    for (const [key, count] of Object.entries(commonNumber)){
        if (count >= maxCount || (count === maxCount && key > mostCommonInt)){
        maxCount = count;
        mostCommonInt = key;
        }
    }
    
    let duplicateNames = showName(maxCount);

    //return Number(mostElement); // To covert an element to a number
    return console.log(`Here's the array {${randomArray}}.
    The number ${mostCommonInt} has shown the most,  ${maxCount} times.
    
    ${duplicateNames} `);
}

// To Generate Random Array given the size:
const getRandomArray = (arraySize) => {
    let myArray = [];
    for (let i = 0; i < arraySize; i++)
        myArray.push(Math.floor(Math.random()*11));
    return myArray;
}

// To display name the same amount as the common integer:
const showName = (maxCount) => {
    let name = getRandomName(names);
    const nameArray= [];
    for (let i = 0; i < maxCount; i++)
        nameArray.push(name);
    return nameArray;
} 

// To Get Random Name from Given Array:
function getRandomName (array){
	const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

mostCommonInt(4);

// function mostCommonInt (arraySize){
//     let maxCount = 0;
//     let randomArray = generateRandomArray(arraySize);
//     let mostCommonInt = randomArray[0];

//     for (let i = 0; i < randomArray.length; i++) {
//         let count = 0;

//         // To Count How Many Time Each Number appears in the array:
//         for (let j = 0; j < randomArray.length; j++){
//             if (randomArray[i] === randomArray[j])
//                 count++;
//         } 

//         // If there's tie, it will return the largest integer:
//         if (count > maxCount || (count === maxCount && randomArray[i] > mostCommonInt)) {
//             maxCount = count;
//             mostCommonInt = randomArray[i];
//         } 
//     }
//     return console.log(`Here's the array {${randomArray}}.
//     The number ${mostCommonInt} has shown the most,  ${maxCount} times.`); 
// }

// // To Generate a random array giving the arraySize:
// const generateRandomArray = (arraySize) => {
//     let myArray = [];
//     for (let i = 0; i < arraySize; i++)
//         myArray.push(Math.floor(Math.random()*11));
//     return myArray;
// }

// mostCommonInt(3);