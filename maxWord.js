var mostWordsFound = function(sentences) {
    
    // create a variable to hold the number;
    let count = []
    
    // then loop each senternce in "sentences"
    sentences.forEach((sentence) => {
        // convert the sentence into a "string" then change it again into an "array";
        let eachWord = sentence.toString().split(" ")
        // loop and push the length of each sentence to variable "count";
        for(let i = 0; i < 1; i++){
            count.push(eachWord.length)
        }
    })
    // sort the number in array count from the highest number to the lowest number
    let s = count.sort((a,b) => {return b - a})
    
    // and then return the index [0] which is highest number
    return s[0]
};
document.write(mostWordsFound("My Name is Poonam","I love India","I like to watch TV"));