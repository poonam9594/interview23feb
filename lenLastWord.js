const lengthOfLastWord = (s) => {
    // trim leading and trailing whitespace from input string then split remaining string by spaces 
    let tString = s.trim().split(' ')
  
    // return the length of the last string in the array
    return tString[tString.length-1].length  
  
  };
  document.write(lengthOfLastWord("Hello Word"));