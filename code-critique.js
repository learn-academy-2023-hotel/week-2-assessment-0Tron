// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

const indexOfFirstVowel = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison
      if (vowels.includes(char)) {
        console.log(`Index of the first vowel "${char}" is: ${i}`);
        return i; // Return the index and exit the function
      }
    }
  
    console.log('No vowels found in the string.');
    return -1; // Return -1 if no vowels are found
  };
  
  // Example usage:
  indexOfFirstVowel("hello"); // Output: Index of the first vowel "e" is: 1
  indexOfFirstVowel("xyz");   // Output: No vowels found in the string.
  

// Critique the code output. The output is correct. It looks like it didnt return the -1 in the second output
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? i wasnt surprised by the output.
// Is the correct output being rendered? Yes, the correct vowel and index number was being rendered
// What do you like about the code? i like that its pretty straight forward to follow. 
// What do you dislike? i didnt like that the code to lowercase was there in the middle. i would have moved it under the vowels.
// Are there best practices that are not being followed? no
// Would you take a different approach? no
// What did you learn? One of the first things i noticed was that it was converting everything into lower-case just so it wouldnt run into a problem incase one of the letters was uppercase. i honestly didnt think of that
