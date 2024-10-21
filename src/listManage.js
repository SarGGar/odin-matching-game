

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min)+min);
}

function genRandomIntArray(len, min, max) {
    let i = 0;
    let randomNumList = []
    while (i < len) {
        const newInt = getRandomInt(min, max)
        if (!randomNumList.includes(newInt)) {
            randomNumList.push(newInt)
            i++
        }
    }
    return randomNumList
}

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

export { genRandomIntArray, shuffle };