function checkAnswer(questionNumber) {
    console.log({questionNumber})
    const answer = document.getElementById(`q${questionNumber}`).value;
    let result;
    switch (questionNumber) {
      case 1:
        result = largerNumber(4, 7) === 7;
        break;
      case 2:
        result = isPalindrome("racecar") === true;
        break;
      case 3:
        result = sumEvenNumbers([1, 2, 3, 4, 5, 6]) === 12;
        break;
      case 4:
        console.log("case",JSON.stringify(startsWithVowel(["apple", "banana", "orange"])))
        result = JSON.stringify(startsWithVowel(["apple", "banana", "orange"])) === JSON.stringify(["apple", "orange"]);
        break;
      case 5:
        result = areAnagrams("listen", "silent") === true;
        break;
      case 6:
        result = average([1, 2, 3, 4, 5, 6]) === 3.5;
        break;
      case 7:
        result = isValidEmail("test@example.com") === true;
        break;
      case 8:
        result = isDivisibleBy(10, 2) === true;
        break;
      case 9:
        result = JSON.stringify(findPalindromes(["racecar", "hello", "level", "world"])) === JSON.stringify(["racecar", "level"]);
        break;
      case 10:
        result = countWords("The quick brown fox jumps over the lazy dog") === 9;
        break;
    }
    document.getElementById(`q${questionNumber}-answer`).textContent = result === true ? "Correct!" : "Incorrect. Try again!";
    document.getElementById(`q${questionNumber}-answer`).style.display="block"
  }
  
  function largerNumber(a, b) {
    // Starter code for Question 1
    // Write your code here
    // 1 compare a < b
    // 2 if true return b
    // 3 else return a
    if(a<b)return b
    return a

    // if(a<b)console.log(b)
    // else console.log(a)
    
  }
  
  function isPalindrome(str) {
    // Starter code for Question 2
    // Write your code here
    
  }
  
  function startsWithVowel(strings) {
    // Starter code for Question 4
    const vowels = ["a", "e", "i", "o", "u"];
    return strings.filter(word=>{      
      return vowels.includes(word[0])
    })
  }
  
  function areAnagrams(str1, str2) {
    // Starter code for Question 5
    str1 = str1.replace(/\s/g, "").toLowerCase();
    str2 = str2.replace(/\s/g, "").toLowerCase();
    return str1.split("").sort().join("") === str2.split("").sort().join("");
  }
  
  function average(numbers) {
    // Starter code for Question 6
    
  }
  
  function isValidEmail(email) {
    // Starter code for Question 7
   
  }
  
  function isDivisibleBy(num1, num2) {
    // Starter code for Question 8
    // 1: num1 / num2
    // 2: check remainder
    // 3: if remainder is 0? return true, else return false
    return num1 % num2 === 0;
  }
  
  function findPalindromes(strings) {
    // Starter code for Question 9
    
  }
  
  function countWords(str) {
    // Starter code for Question 10    
    const words = str.split(" ");
    return words.length;
  }