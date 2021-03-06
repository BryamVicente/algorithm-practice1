/*
To do this, you'll need data. Write code that takes a long string and 
builds its word cloud data in a map ↴, where the keys are words and 
the values are the number of times the words occurred.
*/

class WordCloudData {
    constructor(inputString) {
      this.wordsToCounts = new Map();
      this.populateWordsToCounts(inputString);
    }
  
    populateWordsToCounts(inputString) {
  
  
      let currentWordStartIndex = 0;
      let currentWordLength = 0;
  
      for (let i = 0; i < inputString.length; i++) {
        const character = inputString.charAt(i);
  
        if (i === inputString.length - 1) {
          if (this.isLetter(character)) {
            currentWordLength += 1;
          }
          if (currentWordLength > 0) {
            const word = inputString.slice(currentWordStartIndex,
              currentWordStartIndex + currentWordLength);
            this.addWordToMap(word);
          }
  
        } else if (character === ' ' || character === '\u2014') {
          if (currentWordLength > 0) {
            const word = inputString.slice(currentWordStartIndex,
              currentWordStartIndex + currentWordLength);
            this.addWordToMap(word);
            currentWordLength = 0;
          }
  
        } else if (character === '.') {
          if (i < inputString.length - 1 && inputString.charAt(i + 1) === '.') {
            if (currentWordLength > 0) {
              const word = inputString.slice(currentWordStartIndex,
                currentWordStartIndex + currentWordLength);
              this.addWordToMap(word);
              currentWordLength = 0;
            }
          }
  
        } else if (this.isLetter(character) || character === '\'') {
          if (currentWordLength === 0) {
            currentWordStartIndex = i;
          }
          currentWordLength += 1;
  
        } else if (character === '-') {
          if (i > 0 && this.isLetter(inputString.charAt(i - 1)) &&
            this.isLetter(inputString.charAt(i + 1))) {
            currentWordLength += 1;
          } else {
            if (currentWordLength > 0) {
              const word = inputString.slice(currentWordStartIndex,
                currentWordStartIndex + currentWordLength);
              this.addWordToMap(word);
              currentWordLength = 0;
            }
          }
        }
      }
    }
  
    addWordToMap(word) {
      let newCount;
  
      if (this.wordsToCounts.has(word)) {
        newCount = this.wordsToCounts.get(word) + 1;
        this.wordsToCounts.set(word, newCount);
  
      } else if (this.wordsToCounts.has(word.toLowerCase())) {
        newCount = this.wordsToCounts.get(word.toLowerCase()) + 1;
        this.wordsToCounts.set(word.toLowerCase(), newCount);

      } else if (this.wordsToCounts.has(this.capitalize(word))) {
        newCount = this.wordsToCounts.get(this.capitalize(word)) + 1;
        this.wordsToCounts.set(word, newCount);
        this.wordsToCounts.delete(this.capitalize(word));
  
      } else {
        this.wordsToCounts.set(word, 1);
      }
    }
  
    capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  
    isLetter(character) {
      return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) >= 0;
    }
  }