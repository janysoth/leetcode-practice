
function findMostCommonInt(arraySize){
    const commonCount = {}; // The object to store each element's frequency
    let mostCount = 0; // The amount of the frequent element shown in the array
    let mostElement = []; 
    let randomArray = [];

    for (let i = 0; i < arraySize; i++)
        randomArray.push(Math.floor(Math.random()*11));

    // Store the frequency of each element in the commonCount object
    for (const num of randomArray)
    commonCount[num] = (commonCount[num] || 0) + 1;

    // To Check if there's a tie, show the largest element
    for (const [key, count] of Object.entries(commonCount)){
        if (count > mostCount || (count === mostCount && key > mostElement)){
        mostCount = count;
        mostElement = key;
        }
    }
  //return Number(mostElement); // To covert an element to a number
    return console.log(`Here's the array {${randomArray}}.
    The number ${mostElement} has shown the most,  ${mostCount} times.`);
}

findMostCommonInt(10);
