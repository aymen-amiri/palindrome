const isPalindrome = (p) => {
    let str = stripNonAlphaNum(p);
    if(str == null || str === undefined) return false;
    
    let length = str.length;
    if (length === 0 || length === 1) {
      return true;
    }
    if (str[0] === str[length - 1]) {
      return isPalindrome(str.slice(1, length - 1) );
    } 
    return false;
   };
