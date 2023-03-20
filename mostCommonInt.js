
function findMostCommonInt(arraySize){
    const commonCount = {}; // The object to store each element's frequency
    let mostCount = 0; // The amount of the frequent element shown in the array
    let mostElement = []; 
    let randomArray = generateRandomArray(arraySize);
    //let randomArray =[5,8,4,9,9,8,5,4,10,10];
    // let randomArray = [];

    // Generate random num 1-10 and push into the array
    // for (let i = 0; i < arraySize; i++)
    //     randomArray.push(Math.floor(Math.random()*11));

    // Store the frequency of each element in the commonCount object
    for (const num of randomArray)
    commonCount[num] = (commonCount[num] || 0) + 1;

    // To Check if there's a tie, show the largest element
    for (const [key, count] of Object.entries(commonCount)){
        if (count >= mostCount || (count === mostCount && key > mostElement)){
        mostCount = count;
        mostElement = key;
        }
    }
    
    //return Number(mostElement); // To covert an element to a number
    return console.log(`Here's the array {${randomArray}}.
    The number ${mostElement} has shown the most,  ${mostCount} times.`);
}

const generateRandomArray = (arraySize) => {
    let randomArray = [];
    for (let i = 0; i < arraySize; i++)
        randomArray.push(Math.floor(Math.random()*11));
    return randomArray;
}

findMostCommonInt(4);