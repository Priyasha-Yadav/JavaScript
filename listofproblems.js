//Beginner Friendly Questions
// 1. **Print "Hello, World!"**  
//    - Task: Write a function that prints "Hello, World!" to the console.
console.log("Hello World!")



// 2. **Add Two Numbers**  
//    - Task: Write a function that takes two numbers and returns their sum.  
//    - Test: `sum(3, 5)`  
//    - Expected Output: `8`

function sum(a, b) { console.log(a + b) }
sum(5, 3)

// 3. **Find the Largest Number**  
//    - Task: Write a function that takes three numbers and returns the largest.  
//    - Test: `findLargest(2, 8, 5)`  
//    - Expected Output: `8`

function max(num1, num2, num3) {
    console.log(Math.max(num1, num2, num3))
}
max(23, 345, 53)
//1 min

// 4. **Check if a Number is Even or Odd**  
//    - Task: Write a function that checks if a number is even or odd.  
//    - Test: `isEven(4)`  
//    - Expected Output: `true`

function isEven(number) {
    if (number % 2 == 0) { console.log('True') }
    else { console.log('False') }
}

isEven(87)

// 5. **Calculate the Factorial of a Number**  
//    - Task: Write a function that returns the factorial of a number.  
//    - Test: `factorial(5)`  
//    - Expected Output: `120`

// 5min
function factorial(number) {

    let a = 1;
    for (i = 1; i <= number; i++) {
        a = a * i
    } console.log(a)
}
factorial(5)

// 6. **Reverse a String**  
//    - Task: Write a function that takes a string and returns it reversed.  
//    - Test: `reverseString('hello')`  
//    - Expected Output: `'olleh'`
function reverseString(string) {
    const c = string.split('').reverse().join('');
    console.log(c);
}

reverseString('Hello'); 

// 7. **Check for Palindrome**  
//    - Task: Write a function that checks if a given string is a palindrome.  
//    - Test: `isPalindrome('madam')`  
//    - Expected Output: `true`

function palindrome(string) {
    b = string.toString().split('')
    c = b.reverse()
    let p_string = '';

    for (i = 0; i < c.length; i++) {
        p_string = p_string + c[i]
    }
    console.log(p_string)

    if (p_string === string) { console.log('Palindrome') }
    else { console.log('Not a Palindrome') }
}
palindrome('MOM')

function isPalindrome(string){
    b=string.split('').reverse().join('')
    if (string==b){console.log('True')}
    else{console.log('False')}
  }
  
  isPalindrome('MOM')

// 8. **Find the Minimum Number in an Array**  
//    - Task: Write a function that takes an array and returns the smallest number.  
//    - Test: `findMin([3, 1, 4, 1, 5])`  
//    - Expected Output: `1`

function min_arr(arr) {
    console.log(Math.min(...arr))
}
min_arr([3, 1, 4, 1, 5])

// 9. **Sort an Array**  
//    - Task: Write a function that sorts an array of numbers in ascending order.  
//    - Test: `sortArray([3, 1, 4, 1, 5])`  
//    - Expected Output: `[1, 1, 3, 4, 5]`

function sortArray(sort_arr) {
    console.log(sort_arr.sort((a,b)=> a-b))
}
sortArray([3, 1, 4, 1, 5])


// 10. **Check if a String Contains a Substring**  
//     - Task: Write a function that checks if a string contains another substring.  
//     - Test: `containsSubstring('hello world', 'world')`  
//     - Expected Output: `true`
function containsSubstring(string, sub) {
    console.log(string.includes(sub))
}
containsSubstring('hello world', 'world')


// 11. **Sum All Elements in an Array**  
//     - Task: Write a function that returns the sum of all numbers in an array.  
//     - Test: `sumArray([1, 2, 3, 4, 5])`  
//     - Expected Output: `15`
sum = 0;
function array_sum(arr) {
    for (i = 0; i < arr.length; i++) { sum = sum + arr[i] }
    console.log(sum)
}

array_sum([1, 2, 3, 4, 5])


// 12. **Generate Fibonacci Sequence**  
//     - Task: Write a function that generates the first `n` Fibonacci numbers.  
//     - Test: `fibonacci(5)`  
//     - Expected Output: `[0, 1, 1, 2, 3]`

// function fibonacci(steps) {
//     let one = 0;
//     console.log(one)
//     let two=1;
//     console.log(two)
//     let three=0;
//     for(i=1;(i<steps-2);i++){
//         three=one+two
//         one=two
//         two=three;
//         console.log(three)
//     }}
// fibonacci(5)

function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        let nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }

    return sequence;
}

console.log(fibonacci(5)); 



// 13. **Check if a Number is Prime**  
//     - Task: Write a function that checks if a number is prime.  
//     - Test: `isPrime(7)`  
//     - Expected Output: `true`
// count_fact=0;
// function isPrime(numb){
//     for(i=1;i<=Math.sqrt(numb);i++){
//         if(numb%i==0){count_fact++}}
//         console.log(count_fact)
//     if(count_fact>1){console.log('Not Prime')}
//     else{console.log('Prime')}
   
// }
// isPrime(70)

var count_fact=0;
function isPrime(numb){

    for(i=1;i<=numb;i++){
        if (numb%i==0){
            count_fact=count_fact+1
    
        }

        
    }
    if(count_fact==2){console.log('True')}
    else{ console.log('False')}
}
isPrime(34)

// function isPrime(numb) {
//     if (numb <= 1) {
//         return false; 
//     }
//     if (numb === 2) {
//         return true; 
//     }
//     if (numb % 2 === 0) {
//         return false; 
//     }

//     for (let i = 3; i * i <= numb; i += 2) {
//         if (numb % i === 0) {
//             return false; 
//         }
//     }

//     return true; 
// }

// console.log(isPrime(97)); 


// 14. **Count the Number of Vowels in a String**  
//     - Task: Write a function that counts the number of vowels in a given string.  
//     - Test: `countVowels('hello')`  
//     - Expected Output: `2`
var count = 0
function vowel_count(string) {
    for (i = 0; i < string.length; i++) {
        if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') { count = count + 1 }
    } console.log(count)
}
vowel_count("Priyasha")

// 15. **Find the Index of an Element in an Array**  
//     - Task: Write a function that returns the index of a given element in an array. If the element is not found, return -1.  
//     - Test: `findIndex([1, 2, 3, 4, 5], 3)`  
//     - Expected Output: `2`
//ChatGPT
function findIndex(arr, element) {
    console.log(arr.indexOf(element))
}

const result = findIndex([1, 2, 3, 4, 5], 3);


// 16. **Remove Duplicates from an Array**  
//     - Task: Write a function that removes duplicate elements from an array.  
//     - Test: `removeDuplicates([1, 2, 2, 3, 4, 4, 5])`  
//     - Expected Output: `[1, 2, 3, 4, 5]`

function removeDuplicates(arr){
    console.log(Array.from(new Set(arr)))
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5])

console.log('Here dude') 
// 17. **Find the Intersection of Two Arrays**  
//     - Task: Write a function that returns an array of the common elements in two arrays.  
//     - Test: `findIntersection([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[2, 3]`
let arr3=[]
function findIntersection(arr1,arr2){
for(i=0;i<arr1.length;i++){
    if (arr2.includes(arr1[i])){
        arr3.push(arr1[i])
    }
}
console.log(arr3)
}
findIntersection([1, 2, 3], [2, 3, 4])

// function findIntersection(arr1, arr2) {
//     let set2 = new Set(arr2); // Convert arr2 to a Set for O(1) lookups
//     let arr3 = arr1.filter(element => set2.has(element)); // Filter arr1 elements based on Set
//     return arr3;
// }

// // Example usage
// console.log(findIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
// 18. **Check if Two Strings are Anagrams**  
//     - Task: Write a function that checks if two strings are anagrams of each other.  
//     - Test: `areAnagrams('listen', 'silent')`  
//     - Expected Output: `true`
//CHAT GPT
function anagram(word1, word2) {
    function sortString(str) {
        return str.split('').sort().join('');
    }

    if (sortString(word1) === sortString(word2)) {
        console.log('Anagram');
    } else {
        console.log('Not an Anagram');
    }
}

anagram('silent', 'listen');




// 19. **Capitalize the First Letter of Each Word**  
//     - Task: Write a function that capitalizes the first letter of each word in a string.  
//     - Test: `capitalizeWords('hello world')`  
//     - Expected Output: `'Hello World'`

function capitalizeWords(string) {
    var words = string.split(' ');
    
    // Step 2: Capitalize the first letter of each word
    for (var i = 0; i < words.length; i++) {
        // Check if the word is not empty
        if (words[i].length > 0) {
            // Capitalize the first letter and combine it with the rest of the word
            words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        }
    }
    
    return words.join(' ');
}
console.log(capitalizeWords("hello world")); // Output: 'Hello World'




// 20. **Flatten a Nested Array**  
//     - Task: Write a function that flattens a nested array (an array of arrays) into a single array.  
//     - Test: `flattenArray([1, [2, 3], [4, [5, 6]]])`  
//     - Expected Output: `[1, 2, 3, 4, 5, 6]`
function flattenArray(array){
    return array.flat(4/*Infinity*/)
 }console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));


// 21. **Generate a Random Number within a Range**  
//     - Task: Write a function that generates a random number between a given range.  
//     - Test: `randomNumber(1, 10)`  
//     - Expected Output: `A random number between 1 and 10`

function randomNumber(min, max) {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    var random = Math.random();

    // Scale and shift the random number to the desired range
    var scaled = random * (max - min + 1); // Scale to the range size + 1
    var result = Math.floor(scaled) + min; // Shift to start from min

    return result;
}

// Test the function
console.log(randomNumber(1, 10)); // Example output: 4 (a random number between 1 and 10)


// 22. **Check if a String is a Valid Email**  
//     - Task: Write a function that checks if a given string is a valid email address.  
//     - Test: `isValidEmail('test@example.com')`  
//     - Expected Output: `true`
 
// function isValidEmail(email) {
//     // Check for the presence of exactly one '@' symbol
//     const atIndex = email.indexOf('@');
//     if (atIndex === -1 || email.indexOf('@', atIndex + 1) !== -1) {
//         return false; // No '@' or more than one '@'
//     }

//     // Check there is at least one character before and after the '@'
//     if (atIndex === 0 || atIndex === email.length - 1) {
//         return false; // '@' at the beginning or end
//     }

//     // Check for the presence of a '.' after the '@' symbol
//     const dotIndex = email.indexOf('.', atIndex);
//     if (dotIndex === -1 || dotIndex === atIndex + 1 || dotIndex === email.length - 1) {
//         return false; // No '.' or '.' immediately after '@' or at the end
//     }

//     return true; // All checks passed
// }

// // Test the function
// console.log(isValidEmail('test@example.com')); // Expected Output: true
// console.log(isValidEmail('invalid-email'));     // Expected Output: false
// console.log(isValidEmail('test@.com'));         // Expected Output: false
// console.log(isValidEmail('test@example.c'));    // Expected Output: false
// console.log(isValidEmail('@example.com'));      // Expected Output: false

function isValidEmail(email) {
    // Regular expression for validating an email address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailPattern.test(email);
}

console.log(isValidEmail('test@example.com')); 



// 23. **Convert Celsius to Fahrenheit**  
//     - Task: Write a function that converts a temperature from Celsius to Fahrenheit.  
//     - Test: `celsiusToFahrenheit(0)`  
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(fahrenheit);
}

celsiusToFahrenheit(0)

// 24. **Remove a Specific Element from an Array**  
//     - Task: Write a function that removes a specific element from an array.  
//     - Test: `removeElement([1, 2, 3, 4, 5], 3)`  
//     - Expected Output: `[1, 2, 4, 5]`

function removeElement(arr,element){
    arr.splice(arr.indexOf(element),1)
    console.log(arr)
}
removeElement([1,2,3,4,45],45)


// 25. **Find the Second Largest Number in an Array**  
//     - Task: Write a function that returns the second largest number in an array.  
//     - Test: `secondLargest([1, 2, 3, 4, 5])`  
//     - Expected Output: `4`
function secondLargest(arr) {
    if (arr.length < 2) {
        return "Array must contain at least two elements.";
    }

    let uniqueArr = Array.from(new Set(arr)).sort((a, b) => b - a);

    if (uniqueArr.length < 2) {
        return "There is no second largest number.";
    }

    return uniqueArr[1];
}

console.log(secondLargest([1, 2, 3, 4, 5])); 


// 26. **Find the Longest Word in a String**  
//     - Task: Write a function that returns the longest word in a string.  
//     - Test: `longestWord('The quick brown fox jumped over the lazy dog')`  
//     - Expected Output: `'jumped'`

function longestWord(string) {
    var words = string.split(' ');
    var longest = '';
    
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    
    return longest;
}

console.log(longestWord('The quick brown fox jumped over the lazy dog')); 


// 27. **Find the Missing Number in an Array**  
//     - Task: Write a function that finds the missing number in a sequence from 1 to n.  
//     - Test: `findMissingNumber([1, 2, 4, 5, 6])`  
//     - Expected Output: `3`

function findMissingNumber(arr) {
    const n = arr.length + 1; 
    const expectedSum = (n * (n + 1)) / 2; 
    const actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of numbers in the array
    
    return expectedSum - actualSum; // Missing number is the difference
}

// Test the function
console.log(findMissingNumber([1, 2, 4, 5, 6])); // Expected Output: 3



// 28. **Calculate the GCD of Two Numbers**  
//     - Task: Write a function that calculates the greatest common divisor (GCD) of two numbers.  
//     - Test: `gcd(12, 18)`  
//     - Expected Output: `6`
function gcd(a, b) {
    // Convert negative numbers to positive
    if (a < 0) a = -a;
    if (b < 0) b = -b;
    
    // Apply Euclidean algorithm
    while (b !== 0) {
        // Get the remainder of a divided by b
        let remainder = a % b;
        // Update a and b
        a = b;
        b = remainder;
    }
    
    return a;
}


// Test the function
console.log(gcd(12, 18)); // Expected Output: 6
console.log(gcd(56, 98)); // Expected Output: 14
console.log(gcd(-101, 10)); // Expected Output: 1


// 29. **Calculate the LCM of Two Numbers**  
//     - Task: Write a function that calculates the least common multiple (LCM) of two numbers.  
//     - Test: `lcm(4, 6)`  
//     - Expected Output: `12`
// Function to calculate GCD using Euclidean algorithm
function gcd(a, b) {
    // Convert negative numbers to positive manually
    a = a < 0 ? -a : a;
    b = b < 0 ? -b : b;

    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}

// Function to calculate LCM using the GCD
function lcm(a, b) {
    // Calculate the GCD of a and b
    const gcdValue = gcd(a, b);

    // Calculate the LCM using the formula
    // We use the absolute value trick manually
    return (a * b) / gcdValue;
}

// Test the function
console.log(lcm(4, 6)); // Expected Output: 12
console.log(lcm(15, 25)); // Expected Output: 75
console.log(lcm(-7, 5)); // Expected Output: 35
console.log(lcm(7, -5)); // Expected Output: 35
console.log(lcm(-7, -5)); // Expected Output: 35


// 30. **Check for Balanced Parentheses**  
//     - Task: Write a function that checks if a string has balanced parentheses.  
//     - Test: `isBalanced('()')`  
//     - Expected Output: `true`
function isBalanced(str) {
    // Initialize an empty stack
    let stack = [];

    // Iterate through each character in the string
    for (let char of str) {
        if (char === '(') {
            // Push opening parenthesis onto the stack
            stack.push(char);
        } else if (char === ')') {
            // For closing parenthesis, check if the stack is empty
            if (stack.length === 0) {
                return false; // Unbalanced: no matching opening parenthesis
            }
            // Pop the last opening parenthesis from the stack
            stack.pop();
        }
    }

    // If stack is empty, parentheses are balanced
    return stack.length === 0;
}

// Test cases
console.log(isBalanced('()')); // Expected Output: true
console.log(isBalanced('(()())')); // Expected Output: true
console.log(isBalanced('(()')); // Expected Output: false
console.log(isBalanced('())')); // Expected Output: false
console.log(isBalanced('((())())')); // Expected Output: true


// 31. **Rotate an Array**  
//     - Task: Write a function that rotates an array by k steps.  
//     - Test: `rotateArray([1, 2, 3, 4, 5], 2)`  
//     - Expected Output: `[4, 5, 1, 2, 3]`
function rotateArray(arr, k) {
    const n = arr.length;
    // Normalize k to ensure it's within the bounds of the array length
    k = k % n;
    
    if (k === 0) return arr; // No rotation needed if k is 0

    // Slice the array into two parts and concatenate in reversed order
    const part1 = arr.slice(-k); // Last k elements
    const part2 = arr.slice(0, -k); // First n - k elements
    
    return part1.concat(part2);
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Expected Output: [4, 5, 1, 2, 3]


// String Questions

// 32 //1. **Reverse a String**
//    - Task: Write a function that reverses a given string.
//    - Test:
//      ```javascript
//      console.log(reverseString("hello"));
//      ```
//    - Expected Output: `"olleh"`

reverseString('hello')

// 33 //2. **Check if a String is a Palindrome**
//    - Task: Write a function that checks if a given string is a palindrome (reads the same forward and backward).
//    - Test:
//      ```javascript
//      console.log(isPalindrome("racecar"));
//      console.log(isPalindrome("hello"));
//      ```
//    - Expected Output:
//      ```javascript
//      true
//      false
//      ```
palindrome('')

// 34 //3. **Count the Number of Vowels in a String**
//    - Task: Write a function that counts the number of vowels (`a, e, i, o, u`) in a given string.
//    - Test:
//      ```javascript
//      console.log(countVowels("hello world"));
//      ```
//    - Expected Output: `3`
vowel_count('')

// 35 //4. **Find the First Non-Repeated Character in a String**
//    - Task: Write a function that finds the first non-repeated character in a string.
//    - Test:
//      ```javascript
//      console.log(firstNonRepeatedCharacter("swiss"));
//      ```
//    - Expected Output: `"w"`

function firstNonRepeatedCharacter(string) {
    // Step 1: Create arrays to store characters and their counts
    const chars = [];
    const counts = [];

    // Step 2: Count occurrences of each character
    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        // Check if the character is already in the chars array
        const index = chars.indexOf(char);

        if (index === -1) {
            // If not in chars array, add it and initialize count
            chars.push(char);
            counts.push(1);
        } else {
            // If already in chars array, increment its count
            counts[index]++;
        }
    }

    // Step 3: Find the first character with a count of 1
    for (let i = 0; i < chars.length; i++) {
        if (counts[i] === 1) {
            // Return the first non-repeated character
            return chars[i];
        }
    }

    // Return null if no non-repeated character is found
    return null;
}

// Test the function
console.log(firstNonRepeatedCharacter("swiss")); // Expected Output: 'w'


// 36//5. **Count the Number of Words in a String**
//    - Task: Write a function that counts the number of words in a string. Assume words are separated by spaces.
//    - Test:
//      ```javascript
//      console.log(countWords("This is a test string"));
//      ```
//    - Expected Output: `5`

function countWords(string){
words=string.split(' ')
console.log(words.length)
}
countWords("This is a test string")

//37// 6. **Check if Two Strings are Anagrams**
//    - Task: Write a function that checks if two strings are anagrams (contain the same characters in different orders).
//    - Test:
//      ```javascript
//      console.log(areAnagrams("listen", "silent"));
//      console.log(areAnagrams("hello", "world"));
//      ```
//    - Expected Output:
//      ```javascript
//      true
//      false
//      ```

anagram('hello','world')

// 38// 7. **Replace All Spaces in a String with Hyphens**
//    - Task: Write a function that replaces all spaces in a string with hyphens (`-`).
//    - Test:
//      ```javascript
//      console.log(replaceSpaces("Hello World"));
//      ```
//    - Expected Output: `"Hello-World"`

function replaceSpaces(string){
    arra=string.split('')
    for(i=0;i<arra.length;i++){
        if(arra[i]==' '){
            arra[i]='-'
        }
    }
    console.log(arra.join(''))
}
replaceSpaces("Hello World")

// 39//8. **Convert a String to Title Case**
//    - Task: Write a function that converts a string to title case (capitalizes the first letter of each word).
//    - Test:
//      ```javascript
//      console.log(toTitleCase("this is a test string"));
//      ```
//    - Expected Output: `"This Is A Test String"`
console.log(capitalizeWords("this is a test string")); 

// 40//9. **Check if a String Contains Only Digits**
//    - Task: Write a function that checks if a string contains only numeric digits.
//    - Test:
//      ```javascript
//      console.log(isNumeric("12345"));
//      console.log(isNumeric("123a5"));
//      ```
//    - Expected Output:
//      ```javascript
//      true
//      false
//      ```
function isNumeric(string) {
    // Loop through each character in the string
    for (let i = 0; i < string.length; i++) {
        // Get the ASCII value of the current character
        const charCode = string.charCodeAt(i);

        // Check if the ASCII value is not between 48 ('0') and 57 ('9')
        if (charCode < 48 || charCode > 57) {
            return false; // Return false if any character is not a digit
        }
    }
    return true; // Return true if all characters are digits
}

// Test the function
console.log(isNumeric("12345")); // Expected Output: true
console.log(isNumeric("123a5")); // Expected Output: false

// function isNumeric(string) {
//     // Loop through each character in the string
//     for (let i = 0; i < string.length; i++) {
//         // Check if the character is not a digit
//         if (string[i] < '0' || string[i] > '9') {
//             return false; // Return false if any character is not a digit
//         }
//     }
//     return true; // Return true if all characters are digits
// }

// // Test the function
// console.log(isNumeric("12345")); // Expected Output: true
// console.log(isNumeric("123a5")); // Expected Output: false

// 41 //10. **Remove Duplicates Characters from a String**
//     - Task: Write a function that removes duplicate characters from a string.
//     - Test:
//       ```javascript
//       console.log(removeDuplicates("programming"));
//       ```
//     - Expected Output: `"progamin"`

function removeDuplicatesString(string){
set=new Set(string)
word=Array.from(set).join('')
console.log(word)
}
removeDuplicatesString('programing')

// 42 //11. **Find the Longest Word in a String**
//     - Task: Write a function that finds the longest word in a string.
//     - Test:
//       ```javascript
//       console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//       ```
//     - Expected Output: `"jumped"`
longestWord('The quick brown fox jumped over the lazy dog')

// 43 // 12. **Capitalize the First Letter of Each Word in a String**
//     - Task: Write a function that capitalizes the first letter of each word in a string.
//     - Test:
//       ```javascript
//       console.log(capitalizeFirstLetters("javascript is fun"));
//       ```
//     - Expected Output: `"Javascript Is Fun"`
console.log(capitalizeWords("javascript is fun")); 

// 44// 13. **Repeat a String N Times**
//     - Task: Write a function that repeats a given string `n` times.
//     - Test:
//       ```javascript
//       console.log(repeatString("abc", 3));
//       ```
//     - Expected Output: `"abcabcabc"`

function repeatString(string, repeat) {

    let repeated_string = '';


    for (let i = 1; i <= repeat; i++) {
        repeated_string += string;
    }


    console.log(repeated_string);
}


repeatString('abc',3)

// 45//14. **Check if a String Contains a Substring**
//     - Task: Write a function that checks if a string contains a given substring.
//     - Test:
//       ```javascript
//       console.log(containsSubstring("hello world", "world"));
//       console.log(containsSubstring("hello world", "planet"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false
//       ```
containsSubstring('hello world', 'world')
// 46//15. **Convert a String to an Array of Words**
//     - Task: Write a function that converts a string to an array of words.
//     - Test:
//       ```javascript
//       console.log(stringToWords("This is a test"));
//       ```
//     - Expected Output: `["This", "is", "a", "test"]`
function Arrayofwords(string){
console.log(string.split(' '))
}
Arrayofwords('This is a test')

// 47//16. **Truncate a String**
//     - Task: Write a function that truncates a string to a specified length and adds "..." at the end.
//     - Test:
//       ```javascript
//       console.log(truncateString("This is a long string", 10));
//       ```
//     - Expected Output: `"This is a..."`
function truncateString(string, length) {
    // If the specified length is less than 3, handle it gracefully
    if (length <= 3) {
        return '.'.repeat(length);
    }
    
    // If the string length is greater than the specified length
    if (string.length > length) {
        // Truncate the string to the specified length minus the length of "..."
        return string.slice(0, length - 3) + "...";
    }
    
    // If the string length is within the limit, return it as is
    return string;
}

// Test the function
console.log(truncateString("This is a long string", 10)); // Expected Output: "This is a..."
console.log(truncateString("Short", 10));                  // Expected Output: "Short"


// 48 //17. **Check if a String Starts with a Specific Substring**
//     - Task: Write a function that checks if a string starts with a given substring.
//     - Test:
//       ```javascript
//       console.log(startsWith("hello world", "hello"));
//       console.log(startsWith("hello world", "world"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false
//       ```
// function startsWith(string, substring) {
//     return string.startsWith(substring);
// }

// // Test the function
// console.log(startsWith("hello world", "hello")); // Expected Output: true
// console.log(startsWith("hello world", "world")); // Expected Output: false


function startsWith(string, substring) {
    // Extract the part of the string that matches the length of the substring
    const start = string.slice(0, substring.length);

    // Check if the extracted part matches the substring
    return start === substring;
}

// Test the function
console.log(startsWith("hello world", "hello")); // Expected Output: true
console.log(startsWith("hello world", "world")); // Expected Output: false


//49// 18. **Check if a String Ends with a Specific Substring**
//     - Task: Write a function that checks if a string ends with a given substring.
//     - Test:
//       ```javascript
//       console.log(endsWith("hello world", "world"));
//       console.log(endsWith("hello world", "hello"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false
//       ```
// function endsWith(string, substring) {
//     return string.endsWith(substring);
// }

// // Test the function
// console.log(endsWith("hello world", "world")); // Expected Output: true
// console.log(endsWith("hello world", "hello")); // Expected Output: false

function endsWith(string, substring) {
    // Extract the ending part of the string that matches the length of the substring
    const end = string.slice(-substring.length);

    // Check if the extracted part matches the substring
    return end === substring;
}

// Test the function
console.log(endsWith("hello world", "world")); // Expected Output: true
console.log(endsWith("hello world", "hello")); // Expected Output: false



// 50//19. **Insert a Substring at a Specific Position in a String**
//     - Task: Write a function that inserts a substring at a specific position in a string.
//     - Test:
//       ```javascript
//       console.log(insertSubstring("Hello World", "Beautiful ", 6));
//       ```
//     - Expected Output: `"Hello Beautiful World"`

function insertSubstring(original, substring, position) {
    // Ensure the position is within the bounds of the original string
    if (position < 0) position = 0;
    if (position > original.length) position = original.length;

    // Extract the part of the original string before the insertion point
    const before = original.slice(0, position);
    // Extract the part of the original string after the insertion point
    const after = original.slice(position);

    // Combine the parts with the substring inserted
    return before + substring + after;
}

// Test the function
console.log(insertSubstring("Hello World", "Beautiful ", 6)); // Expected Output: "Hello Beautiful World"

//51// 20. **Remove All Instances of a Substring**
//     - Task: Write a function that removes all instances of a substring from a string.
//     - Test:
//       ```javascript
//       console.log(removeSubstring("This is a test. This is only a test.", "test"));
//       ```
//     - Expected Output: `"This is a . This is only a ."`

function removeSubstring(original, substring) {
    let result = original; // Start with the original string

    // Keep removing the substring until it's no longer found
    while (result.indexOf(substring) !== -1) {
        // Find the position of the substring
        const position = result.indexOf(substring);
        
        // Remove the substring by slicing and combining parts
        result = result.slice(0, position) + result.slice(position + substring.length);
    }

    return result;
}

// Test the function
console.log(removeSubstring("This is a test. This is only a test.", "test")); 
// Expected Output: "This is a . This is only a ."

//Array Questions
//52// 1. **Sum All Elements in an Array**  
//    - Task: Write a function that returns the sum of all numbers in an array.  
//    - Test: `sumArray([1, 2, 3, 4, 5])`  
//    - Expected Output: `15`

array_sum([34,3434,34,3,3])

// 2. **Find the Largest Number in an Array**  
//    - Task: Write a function that returns the largest number in an array.  
//    - Test: `findLargest([1, 5, 3, 9, 2])`  
//    - Expected Output: `9`

function max_arr(arr) {
    console.log(Math.max(...arr))
}
max_arr([3, 1, 4, 1, 5,9])

// 3. **Find the Smallest Number in an Array**  
//    - Task: Write a function that returns the smallest number in an array.  
//    - Test: `findSmallest([1, 5, 3, 9, 2])`  
//    - Expected Output: `1`

// function min_arr(arr) {
//     console.log(Math.max(...arr))
// }
min_arr([3, 1, 4, 1, 5])




// 4. **Sort an Array in Ascending Order**  
//    - Task: Write a function that sorts an array in ascending order.  
//    - Test: `sortArray([5, 2, 9, 1, 5, 6])`  
//    - Expected Output: `[1, 2, 5, 5, 6, 9]`

sortArray([46,45,44,43,42,60,59])

// 5. **Sort an Array in Descending Order**  
//    - Task: Write a function that sorts an array in descending order.  
//    - Test: `sortArrayDescending([5, 2, 9, 1, 5, 6])`  
//    - Expected Output: `[9, 6, 5, 5, 2, 1]`

function sortArrayDescending(arr) {
    let desc =   arr.sort(function(a, b) {
          return b - a; 
      });
      
      console.log(desc);
  }
  sortArrayDescending([1, 2, 2, 2, 1, 3, 1, 3, 24, 4, 6, 4, 4, 6, 54, 43]);



// function isSortedDesc(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i - 1] < arr[i]) {
//             return false;
//         }
//     }
//     return true;
//   }
  
//   // Example arrays
//   const descendingArray = [5, 4, 3, 2, 1];
//   const unsortedArray = [5, 3, 4, 2, 1];
  
//   console.log(isSortedDesc(descendingArray)); 
//   console.log(isSortedDesc(unsortedArray));

// 6. **Reverse an Array**  
//    - Task: Write a function that reverses the elements of an array.  
//    - Test: `reverseArray([1, 2, 3, 4, 5])`  
//    - Expected Output: `[5, 4, 3, 2, 1]`

function reverseArray(arr) {

    c = arr.reverse()
console.log(c)}
reverseArray([1,2,3,4,5])


// 7. **Check if an Array Contains a Specific Element**  
//    - Task: Write a function that checks if an array contains a specific element.  
//    - Test: `containsElement([1, 2, 3, 4, 5], 3)`  
//    - Expected Output: `true`
function containsElement(arr,element){
    if(arr.includes(element)){ console.log('true')}
    else{ console.log('false')}
}
containsElement([2,2,4,35,3,1,],10)

// 8. **Find the Index of a Specific Element in an Array**  
//    - Task: Write a function that returns the index of a specific element in an array. If the element is not found, return -1.  
//    - Test: `findIndex([1, 2, 3, 4, 5], 3)`  
//    - Expected Output: `2`
findIndex([22,43,4,35,3],3)
// 60//9. **Remove Duplicates from an Array**  
//    - Task: Write a function that removes duplicate elements from an array.  
//    - Test: `removeDuplicates([1, 2, 2, 3, 4, 4, 5])`  
//    - Expected Output: `[1, 2, 3, 4, 5]`
removeDuplicates([])

// 61 //10. **Merge Two Arrays**  
//     - Task: Write a function that merges two arrays into one.  
//     - Test: `mergeArrays([1, 2, 3], [4, 5, 6])`  
//     - Expected Output: `[1, 2, 3, 4, 5, 6]`
function mergeArrays(arr1,arr2){
    return (arr1.concat(arr2))
}
console.log(mergeArrays([1,2,3],[4,5,6]))
// 11. **Find the Intersection of Two Arrays**  
//     - Task: Write a function that returns the intersection of two arrays.  
//     - Test: `findIntersection([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[2, 3]`
findIntersection([],[])
// 12. **Find the Union of Two Arrays**  
//     - Task: Write a function that returns the union of two arrays.  
//     - Test: `findUnion([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[1, 2, 3, 4]`
function findUnion(arr1,arr2){
arr3=mergeArrays(arr1,arr2)
set=new Set(arr3)
arr4=Array.from(set)
return (arr4)
}
console.log(findUnion([1, 2, 3], [2, 3, 4]))
//64 // 13. **Check if an Array is Sorted**  
//     - Task: Write a function that checks if an array is sorted in ascending order.  
//     - Test: `isSorted([1, 2, 3, 4, 5])`  
//     - Expected Output: `true`
function isSorted(arr) {
    // Loop through the array
    for (let i = 0; i < arr.length - 1; i++) {
        // Compare current element with the next element
        if (arr[i] > arr[i + 1]) {
            console.log('false');
            return; // Exit the function if the array is not sorted
        }
    }
    // If the loop completes without finding unsorted elements
    console.log('true');
}

// Test cases
isSorted([1, 2, 3, 4, 5]); // true
isSorted([5, 3, 4, 1, 2]); // false
isSorted([1, 2, 2, 3, 4]); // true



// 65// 14. **Find the Difference of Two Arrays**  
//     - Task: Write a function that returns the difference of two arrays (elements in the first array that are not in the second array).  
//     - Test: `findDifference([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[1]`

function findDifference(arr1, arr2) {
    // Create an empty array to store the result
    let result = [];
    
    // Loop through each element in the first array
    for (let i = 0; i < arr1.length; i++) {
        // Check if the element is NOT in the second array
        if (arr2.indexOf(arr1[i]) === -1) {
            // If not, add it to the result array
            result.push(arr1[i]);
        }
    }
    
    // Return the result array
    return result;
}

// Test the function
console.log(findDifference([1, 2, 3], [2, 3, 4])); // Expected Output: [1]


// 66 //15. **Rotate an Array by K Positions**  
//     - Task: Write a function that rotates an array by `k` positions.  
//     - Test: `rotateArray([1, 2, 3, 4, 5], 2)`  
//     - Expected Output: `[4, 5, 1, 2, 3]`
function rotateArray(arr, k) {
    const n = arr.length;
    if (n === 0) return arr; // If the array is empty, return it as is

    k = k % n; // Normalize k to be within the array's length
    if (k === 0) return arr; // If k is 0, no rotation is needed

    // Slice the array into two parts and concatenate them
    const rotated = arr.slice(-k).concat(arr.slice(0, -k));

    return rotated;
}

// Test
console.log(rotateArray([1, 2, 3, 4, 5], 2));
// Expected Output: [4, 5, 1, 2, 3]


// 67 //16. **Find the Maximum Difference Between Two Elements in an Array**  
//     - Task: Write a function that finds the maximum difference between any two elements in an array.  
//     - Test: `maxDifference([2, 3, 10, 6, 4, 8, 1])`  
//     - Expected Output: `8`

function maxDifference(arr) {
    if (arr.length < 2) {
        return 0; // If there are fewer than 2 elements, the difference is 0
    }

    let minElement = arr[0]; // Initialize the minimum element to the first element
    let maxDiff = arr[1] - arr[0]; // Initialize the maximum difference

    for (let i = 1; i < arr.length; i++) {
        // Update the maximum difference
        if (arr[i] - minElement > maxDiff) {
            maxDiff = arr[i] - minElement;
        }
        // Update the minimum element
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
    }

    return maxDiff;
}

// Test
console.log(maxDifference([2, 3, 10, 6, 4, 8, 1]));
// Expected Output: 8 (10 - 2)


// 68 //17. **Find the Second Largest Element in an Array**  
//     - Task: Write a function that returns the second largest element in an array.  
//     - Test: `secondLargest([1, 2, 3, 4, 5])`  
//     - Expected Output: `4`

function secondLargest(arr) {
    if (arr.length < 2) {
        throw new Error('Array must have at least two elements');
    }

    // Step 1: Find the maximum element
    const max = max_arr(arr);
    
    // Step 2: Create a new array without the maximum element
    const arr1 = arr.slice().filter(num => num !== max);
    
    if (arr1.length === 0) {
        throw new Error('There is no second largest element');
    }

    // Step 3: Find the maximum element in the new array
    const secondMax = max_arr(arr1);

    console.log(secondMax);
    return secondMax;
}

// Test
secondLargest([1, 2, 4, 3, 5, 6, 7]); 
secondLargest([1,2,4,3,5,6,7])
// 69 //18. **Find the Pair of Elements with the Maximum Sum in an Array**  
//     - Task: Write a function that finds the pair of elements with the maximum sum in an array.  
//     - Test: `maxSumPair([1, 2, 3, 4, 5])`  
//     - Expected Output: `[4, 5]`
function maxSumPair(arr){
    for(i=0;i<arr.length;i++){}
    {}
}

// 70 //19. **Find the Pair of Elements with the Minimum Sum in an Array**  
//     - Task: Write a function that finds the pair of elements with the minimum sum in an array.  
//     - Test: `minSumPair([1, 2, 3, 4, 5])`  
//     - Expected Output: `[1, 2]`
function minSumPair(arr) {
 
    arr.sort((a, b) => a - b);

    const minPair = [arr[0], arr[1]];

    return minPair;
}

// Test
console.log(minSumPair([1, 2, 3, 4, 5]));
// Expected Output: [1, 2]

// 71 //20. **Move All Zeros to the End of an Array**  
//     - Task: Write a function that moves all zeros in an array to the end, preserving the order of the other elements.  
//     - Test: `moveZeros([0, 1, 0, 3, 12])`  
//     - Expected Output: `[1, 3, 12, 0, 0]`

// function moveZeros(arr) {
//     let nonZeroIndex = 0; // Index to place the next non-zero element

//     // Iterate through the array
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             // Move non-zero element to the nonZeroIndex position
//             arr[nonZeroIndex] = arr[i];
//             nonZeroIndex++;
//         }
//     }

//     // Fill the remaining positions with zeros
//     for (let i = nonZeroIndex; i < arr.length; i++) {
//         arr[i] = 0;
//     }

//     return arr;
// }

//console.log(moveZeros([0, 1, 0, 3, 12]));

function moveZeros(arr) {
    const zeros = [];
    let nonZeros = [];
    
    // Extract non-zero elements and count zeros
    while (arr.length > 0) {
        const value = arr.shift(); // Remove the first element from the array
        if (value === 0) {
            zeros.push(value); // Add zeros to the zeros array
        } else {
            nonZeros.push(value); // Add non-zero values to the nonZeros array
        }
    }
    
    // Combine non-zero elements with zeros
    return nonZeros.concat(zeros);
}

// Test
console.log(moveZeros([0, 1, 0, 3, 12]));
// Expected Output: [1, 3, 12, 0, 0]

// 21. **Count the Frequency of Each Element in an Array**  
//     - Task: Write a function that counts the frequency of each element in an array.  
//     - Test: `countFrequency([1, 2, 2, 3, 3, 3])`  
//     - Expected Output: `{1: 1, 2: 2, 3: 3}`
function countFrequency(arr) {
    const frequency = {}; 

    for (const element of arr) {
        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
    }

    return frequency;
}

// Test
console.log(countFrequency([1, 2, 2, 3, 3, 3]));


// 73 //22. **Find the Most Frequent Element in an Array**  
//     - Task: Write a function that finds the most frequent element in an array.  
//     - Test: `mostFrequent([1, 2, 2, 3, 3, 3])`  
//     - Expected Output: `3`
function mostFrequent(arr) {
    if (arr.length === 0) return null; // Handle empty array

    // Sort the array
    arr.sort((a, b) => a - b);

    let mostFrequentElement = arr[0];
    let maxCount = 1;
    let currentElement = arr[0];
    let currentCount = 1;

    // Loop through the sorted array to find the most frequent element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === currentElement) {
            currentCount++;
        } else {
            if (currentCount > maxCount) {
                maxCount = currentCount;
                mostFrequentElement = currentElement;
            }
            currentElement = arr[i];
            currentCount = 1;
        }
    }

    // Final check for the last element
    if (currentCount > maxCount) {
        mostFrequentElement = currentElement;
    }

    return mostFrequentElement;
}

// Test the function
console.log(mostFrequent([1, 2, 2, 3, 3, 3])); // Expected Output: 3


// 74 //23. **Find the Longest Increasing Subsequence in an Array**  
//     - Task: Write a function that finds the longest increasing subsequence in an array.  
//     - Test: `longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])`  
//     - Expected Output: `[10, 22, 33, 50, 60, 80]`
function longestIncreasingSubsequence(arr){
for(i=0;i<arr.length;i++){

}
}
// 75 //24. **Find the Longest Consecutive Sequence in an Array**  
//     - Task: Write a function that finds the longest consecutive sequence in an array.  
//     - Test: `longestConsecutive([100, 4, 200, 1, 3, 2])`  
//     - Expected Output: `4` (sequence is `[1, 2, 3, 4]`)
function longestConsecutive(nums) {
    if (nums.length === 0) return 0;
    
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);
    
    let longest = 1; // To keep track of the longest sequence
    let currentStreak = 1; // To keep track of the current streak length

    // Step 2: Traverse through the sorted array
    for (let i = 1; i < nums.length; i++) {
        // Check if the current number is consecutive
        if (nums[i] === nums[i - 1] + 1) {
            currentStreak++; // Increase the current streak length
        } else if (nums[i] !== nums[i - 1]) {
            // If not consecutive and not a duplicate
            longest = Math.max(longest, currentStreak); // Update longest if needed
            currentStreak = 1; // Reset current streak length
        }
    }

    // Final check to update the longest streak after the loop ends
    longest = Math.max(longest, currentStreak);
    
    return longest;
}

// Test the function
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Expected Output: 4


// Object Questions
// 76// 1. **Create a Simple Object**
//    - Task: Create an object representing a person with properties `name`, `age`, and `city`.
//    - Test:
//      ```javascript
//      const person = createPerson("John", 25, "New York");
//      console.log(person);
//      ```
//    - Expected Output: `{ name: 'John', age: 25, city: 'New York' }`
//ChatGPT
// Function to create a person object
function createPerson(name, age, city) {
    return {
        name: name,
        age: age,
        city: city
    };
}

// Test the function
const person = createPerson("John", 25, "New York");
console.log(person);  // Output: { name: 'John', age: 25, city: 'New York' }

// 77 //2. **Access Object Properties**
//    - Task: Write a function that returns the value of a given property from an object.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(getProperty(obj, 'name'));
//      ```
//    - Expected Output: `'Alice'`
const obj1 = { name: 'Alice', age: 30 };

function getProperty(obj, prop) {
    console.log(obj[prop]); 
}

getProperty(obj1, 'name'); 

// 78 //3. **Add a New Property to an Object**
//    - Task: Write a function that adds a new property to an object.
//    - Test:
//      ```javascript
//      const car = { brand: 'Toyota', model: 'Corolla' };
//      addProperty(car, 'year', 2020);
//      console.log(car);
//      ```
//    - Expected Output: `{ brand: 'Toyota', model: 'Corolla', year: 2020 }`
// Function to add a new property to an object
function addProperty(obj, propName, propValue) {
    obj[propName] = propValue;
}
const car = { brand: 'Toyota', model: 'Corolla' };
addProperty(car, 'year', 2020);
console.log(car);


// 4. **Delete a Property from an Object**
//    - Task: Write a function that deletes a property from an object.
//    - Test:
//      ```javascript
//      const user = { username: 'john_doe', password: '12345' };
//      deleteProperty(user, 'password');
//      console.log(user);
//      ```
//    - Expected Output: `{ username: 'john_doe' }`
function deleteProperty(obj, propName) {
    delete obj[propName]; 
}
const user = { username: 'john_doe', password: '12345' };
deleteProperty(user, 'password');
console.log(user);

// 80 //5. **Check if an Object has a Property**
//    - Task: Write a function that checks if an object has a specific property.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(hasProperty(obj, 'age'));
//      ```
//    - Expected Output: `true`

function hasProperty(obj,propname){
    return (propname in obj)
}

     const obj = { name: 'Alice', age: 30 };
     console.log(hasProperty(obj, 'name'));

// 6. **Merge Two Objects**
//    - Task: Write a function that merges two objects into one.
//    - Test:
//      ```javascript
//      const obj1 = { a: 1, b: 2 };
//      const obj2 = { b: 3, c: 4 };
//      console.log(mergeObjects(obj1, obj2));
//      ```
//    - Expected Output: `{ a: 1, b: 3, c: 4 }`
// Function to merge two objects using the spread operator
// function mergeObjects(obj1, obj2) {
//     return { ...obj1, ...obj2 };
// }

// // Test
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// console.log(mergeObjects(obj1, obj2));
// // Expected Output: { a: 1, b: 3, c: 4 }

// Function to merge two objects using Object.assign
function mergeObjects(obj11, obj2) {
    return Object.assign({}, obj11, obj2);
}

// Test
const obj11 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj11, obj2));
// Expected Output: { a: 1, b: 3, c: 4 }

// 82 //7. **Clone an Object**
//    - Task: Write a function that creates a deep clone of an object.
//    - Test:
//      ```javascript
//      const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };
//      const clone = cloneObject(original);
//      clone.details.city = 'LA';
//      console.log(original.details.city);
//      console.log(clone.details.city);
//      ```
//    - Expected Output:
//      ```
//      'NYC'
//      'LA'
//      ```
// Function to deep clone an object
function cloneObject(obj) {
    // If the value is not an object or is null, return it directly
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Create a new object or array
    var copy;
    if (Array.isArray(obj)) {
        copy = []; // Create an empty array
        for (var i = 0; i < obj.length; i++) {
            copy[i] = cloneObject(obj[i]); // Recursively clone array elements
        }
    } else {
        copy = {}; // Create an empty object
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = cloneObject(obj[key]); // Recursively clone object properties
            }
        }
    }
    
    return copy;
}

// Test the function
const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };
const clone = cloneObject(original);
clone.details.city = 'LA';

// Print results
console.log(original.details.city); // Expected Output: 'NYC'
console.log(clone.details.city);    // Expected Output: 'LA'

//83 // 8. **Loop Through Object Properties**
//    - Task: Write a function that loops through all the properties of an object and prints them.
//    - Test:
//      ```javascript
//      const user = { name: 'John', age: 30, city: 'New York' };
//      printProperties(user);
//      ```
//    - Expected Output:
//      ```
//      name: John
//      age: 30
//      city: New York
//      ```
// Function to loop through and print all properties of an object
function printProperties(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) { // Ensure the property is a direct property of the object
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

// Test
const user1 = { name: 'John', age: 30, city: 'New York' };
printProperties(user1);
// Expected Output:
// name: John
// age: 30
// city: New York

//84//  9. **Count the Number of Properties in an Object**
//    - Task: Write a function that counts the number of properties in an object.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30, city: 'NYC' };
//      console.log(countProperties(obj));
//      ```
//    - Expected Output: `3`
// Function to count the number of properties in an object
function numberOfProperties(obj) {
    return Object.keys(obj).length;
}

// Test
const obj4 = { name: 'Alice', age: 30, city: 'NYC' };
console.log(numberOfProperties(obj4));

//85 // 10. **Convert Object to Array of Keys**
//     - Task: Write a function that converts an object to an array of its keys.
//     - Test:
//       ```javascript
//       const obj = { name: 'Alice', age: 30, city: 'NYC' };
//       console.log(objectKeysToArray(obj));
//       ```
//     - Expected Output: `['name', 'age', 'city']`

function objectKeysToArray(obj85){
   const arr=Array.from(Object.keys(obj85))
   console.log(arr)
}
const obj85 = { name: 'Alice', age: 30, city: 'NYC' };
console.log(objectKeysToArray(obj85));

//86 // 11. **Convert Object to Array of Values**
//     - Task: Write a function that converts an object to an array of its values.
//     - Test:
//       ```javascript
//       const obj = { name: 'Alice', age: 30, city: 'NYC' };
//       console.log(objectValuesToArray(obj));
//       ```
//     - Expected Output: `['Alice', 30, 'NYC']`
function objectValuesToArray(obj86){
    const arr=Array.from(Object.values(obj86))
    console.log(arr)
 }
 const obj86 = { name: 'Alice', age: 30, city: 'NYC' };
 console.log(objectValuesToArray(obj86));

// 87 //12. **Convert an Array of Objects to a Single Object**
//     - Task: Write a function that converts an array of objects into a single object. Assume each object in the array has a unique `key` property.
//     - Test:
//       ```javascript
//       const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
//       console.log(arrayToObject(arr));
//       ```
//     - Expected Output: `{ a: 1, b: 2 }`

// Function to convert an array of objects into a single object
function arrayToObject(arr) {
    // Create an empty object to hold the combined results
    const result = {};

    // Loop through each object in the array
    for (let i = 0; i < arr.length; i++) {
        // Get the key and value from the current object
        const key = arr[i].key;
        const value = arr[i].value;

        // Add the key-value pair to the result object
        result[key] = value;
    }

    return result;
}

// Test the function
const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
console.log(arrayToObject(arr));


//88 // 13. **Group Objects by a Property**
//     - Task: Write a function that groups an array of objects by a specific property.
//     - Test:
//       ```javascript
//       const users = [
//         { name: 'Alice', age: 30 },
//         { name: 'Bob', age: 20 },
//         { name: 'Charlie', age: 30 }
//       ];
//       console.log(groupBy(users, 'age'));
//       ```
//     - Expected Output:
//       ```javascript
//       {
//         20: [{ name: 'Bob', age: 20 }],
//         30: [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 }]
//       }
//       ```

function groupBy(arr, property) {
    // Create an empty object to hold the groups
    const result = {};

    // Loop through each object in the array
    for (let i = 0; i < arr.length; i++) {
        // Get the current object's value for the specified property
        const key = arr[i][property];
        
        // If the key does not exist in the result object, create an empty array
        if (!result[key]) {
            result[key] = [];
        }

        // Add the current object to the array for this key
        result[key].push(arr[i]);
    }

    return result;
}

// Test the function
const users88 = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 30 }
];

console.log(groupBy(users88, 'age'));

//89// 14. **Find the Object with the Maximum Value of a Property**
//     - Task: Write a function that finds the object with the maximum value of a given property in an array of objects.
//     - Test:
//       ```javascript
//       const users = [
//         { name: 'Alice', age: 30 },
//         { name: 'Bob', age: 20 },
//         { name: 'Charlie', age: 35 }
//       ];
//       console.log(findMax(users, 'age'));
//       ```
//     - Expected Output: `{ name: 'Charlie', age: 35 }`
function findMax(arr, prop) {
    // Initialize the result with the first object in the array
    let maxObj = arr[0];
    
    // Loop through the array
    for (let i = 1; i < arr.length; i++) {
        // Check if the current object has a higher value for the specified property
        if (arr[i][prop] > maxObj[prop]) {
            maxObj = arr[i]; // Update the maxObj if current object has a higher value
        }
    }
    
    return maxObj;
}

// Test
const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 35 }
];
console.log(findMax(users, 'age'));
// Expected Output: { name: 'Charlie', age: 35 }


// 90 //15. **Sum the Values of a Specific Property in an Array of Objects**
//     - Task: Write a function that sums the values of a specific property in an array of objects.
//     - Test:
//       ```javascript
//       const items = [
//         { name: 'item1', price: 10 },
//         { name: 'item2', price: 15 },
//         { name: 'item3', price: 20 }
//       ];
//       console.log(sumProperty(items, 'price'));
//       ```
//     - Expected Output: `45`
// Function to sum the values of a specific property in an array of objects
function sumProperty(arr, prop) {
    let total = 0;

    for (const item of arr) {
        if (item[prop] !== undefined) {
            total += item[prop];
        }
    }

    console.log(total);}

const items = [
    { name: 'item1', price: 10 },
    { name: 'item2', price: 15 },
    { name: 'item3', price: 20 }
];
sumProperty(items, 'price')
