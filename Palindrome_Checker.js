//Palindrome Checker
function palindrome(str) {
    //set string as const
    const alphaOnly = str
    //set all to lowercase
    .toLowerCase()
    //remove all non-alphanumchars
    .match(/[a-z0-9]/g);
    
    //use join to merge const into string
    //compare straight to reverse
    //return if they match
    return alphaOnly.join('') ===
      alphaOnly.reverse().join('');
  }
  