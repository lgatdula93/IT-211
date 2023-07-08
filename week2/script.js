
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O","U"];

userInput.oninput = function() {
        
    let beforePig = userInput.value
    let afterPig = ''

        if (beforePig.length <= 1) {
            afterPig = "Please enter a word that has more than one character.";
        }

        else if (!vowels.includes(beforePig.charAt(0)) && !vowels.includes(beforePig.charAt[1])) {
            afterPig = beforePig.slice(2) + beforePig.slice(0, 2) + 'ay';
        }

        else if (!vowels.includes(beforePig.charAt(0))) {
            afterPig = beforePig.slice(1) + beforePig.charAt(0) + 'ay';      
        }

        else {
            afterPig = beforePig + 'way'
        } 

           
        pigConverted.innerHTML = afterPig;
    };
