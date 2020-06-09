function bubbleSort(inputArray, arrLength = inputArray.length) {
    // have a changed variable
    // should check two elements
    // if the right one is smaller then swap, changed variable = true
    // if on the last index and changed variable is true then repeat with the new inputArray else return the inputArray
    let changed = false;
    
    for (let i = 0; i < arrLength; i++) {
        let presentEle = inputArray[i];
        let nextEle = inputArray[i + 1];
//         debugger;
        if (nextEle < presentEle) {
            inputArray[i] = nextEle;
            inputArray[i + 1] = presentEle;
            changed = true;
        }
        if (i === arrLength - 1) {
            if (changed) {
                return bubbleSort(inputArray, arrLength - 1);
            } else {
                return inputArray;
            }
        }
    };
};

module.exports = {bubbleSort}