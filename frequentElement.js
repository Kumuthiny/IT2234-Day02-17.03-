function mostFrequentElement(arr) {
    let freqMap = {};
    let maxCount = 0;
    let mostFrequent = null;

    arr.forEach(num => {
        freqMap[num] = (freqMap[num] || 0) + 1;

        if (freqMap[num] > maxCount) {
            maxCount = freqMap[num];
            mostFrequent = num;
        }
    });

    return mostFrequent;
}

// Example usage:
let arr = [4, 8, 3, 4, 3, 2, 18, 4];
console.log(mostFrequentElement(arr)); 
