  const commonCount = {}; // To store the most frequent element
  let mostCount = 0; // The amount of the frequent element shown in the array
  let mostElement = []; 

function findMostCommonInt(array){
  // Store the frequency of each element in the commonCount object
  for (const num of array){
  	commonCount[num] = (commonCount[num] || 0) + 1;
  }
  
  // To Check if there's a tie, show the largest element
  for (const [key, count] of Object.entries(commonCount)){
  	if (count > mostCount || (count === mostCount && key > mostElement)){
    mostCount = count;
    mostElement = key;
    }
  }
  //return Number(mostElement); // To covert an element to a number
  return console.log(`${mostElement} has shown the most,  ${mostCount} times.`);
}

let array = [5, 43, 23, 65, 65, 5, 65, 5];
findMostCommonInt(array);
console.log(commonCount);
