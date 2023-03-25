function removeDuplicates (arraySize){
    let randomArray = getRandomArray(arraySize);
    let newArray = [...new Set(randomArray)];
    newArray = newArray.sort(function(a,b){return a - b}); // Sort Array with Integers

    return console.log(`Here's the random arary: {${randomArray}}.
    The new array is {${newArray}}`); 
}

// To Generate a random array giving the arraySize:
const getRandomArray = (arraySize) => {
    let myArray = [];
    for (let i = 0; i < arraySize; i++)
        myArray.push(Math.floor(Math.random()*11));
    return myArray;
}

removeDuplicates(10);