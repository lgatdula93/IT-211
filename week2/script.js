
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O","U"];

userInput.oninput = function() {
        
    let beforePig = userInput.value
    let afterPig = ''
        // return an error message if the string is less than one character
        if (beforePig.length <= 1) {
            afterPig = "Please enter a word that has more than one character.";
        }

        else if (!vowels.includes(beforePig.charAt(0)) && !vowels.includes(beforePig.charAt(1))) {
            // if the first two letters are consonants, bring them to the end of the word and add 'ay'
            afterPig = beforePig.slice(2) + beforePig.slice(0, 2) + 'ay';
        }

        else if (!vowels.includes(beforePig.charAt(0))) {
            // if the first letter is a consonant, move the consonant to the end of the word and add 'ay'
            afterPig = beforePig.slice(1) + beforePig.charAt(0) + 'ay';      
        }

        else {
            // if the first letter is already a vowel, add 'way' at the end of the word
            afterPig = beforePig + 'way'
        } 

           
        pigConverted.innerHTML = afterPig;
    };
