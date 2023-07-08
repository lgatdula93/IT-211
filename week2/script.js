
let firstVowels = "aeiouAEIOU"

userInput.oninput = function() {
        
    let beforePig = userInput.value
    let afterPig = ''

        if (beforePig.length <= 1) {
            // bring an error message if the string is less than one character
            afterPig = "Please enter a word that has more than one character."

        } else if (!firstVowels.includes(beforePig.charAt(0))) {
            // if the first letter is a consonant, move the consonant to the end of the word and add 'ay'
            afterPig = beforePig.slice(1) + beforePig.charAt(0) + 'ay'

        } else if (!firstVowels.includes(beforePig.charAt(0)) && !firstVowels.includes(beforePig.charAt(1))) {
            // if the first two letters are consonants, bring them to the end of the word and add 'ay'
            afterPig = beforePig.slice(2) + beforePig.slice(0, 2) + 'ay'
                
        }else {
            // if the first letter is already a vowel, add 'way' at the end of the word
            afterPig = beforePig + 'way'
        }

           
        pigConverted.innerHTML = afterPig;
    };


