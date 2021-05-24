// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");


const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};      // need to finish transform. done below.//  

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
       letterPoints += `Points for '${word[i]}': ${pointValue}\n`}
      
    }
       //letterPoints += `${pointValue}`
// *** This is gooing to be "console.log"ing this info, not adding them together. 
      //for (let j =0; j < word.length; j++){
         //total = word[j]

			//letterPoints += `Points for '${word[i]}': ${pointValue}\n`}

	}
	return letterPoints;
 }
 
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  let userWord = ""
  userWord = input.question("Let's play some scrabble!\n\n Enter a word to score: ");
  return userWord
  //console.log(oldScrabbleScorer(userWord))

}

function simpleScore(word) { // simple, just count each letter in the word//use .length//
  word = word.toUpperCase();
  let letterPoints = 0;
  for (let i = 0; i < word.length; i++) { 
    letterPoints++//console.log(i)
  }
  return letterPoints //return was out of place//
  //return word.length;
}

function vowelBonusScore(word) { //if scoring for vowels 3 points//else 1 point
  word = word.toUpperCase();
  let vowels = ['A', 'E', 'I', 'O', 'U']
  let letterPoints = 0;
   for (let i = 0; i < word.length; i++) {
     if (vowels.includes(word[i])) {
       letterPoints += 3;
     }
      else {
        letterPoints++;
      }

  }
  return letterPoints;
  //console.log(letterPoints);
}


function scrabbleScore(word) {  //scrabbleScore uses oldScrabbleScorer// 

// *** Take a close look at the oldScrabbleScorer - go through and comment what that code is doing. See if you can reuse any of that logic to score things with the newPointStructure

  word = word.toUpperCase();
  let characterPoints = 0;
  for (let i = 0; i < word.length; i++){ 
  
    characterPoints += newPointStructure[word[i]]
    // console.log({characterPoints});
  }

  // console.log({characterPoints});
    
  return characterPoints;
  
}

const scoringAlgorithms = [ // possible scoring options to be chosen from by the user//
  simpleScoring = {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scoringFunction: simpleScore
  },
  vowelBonusScoring = {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: vowelBonusScore
  },
  scrabbleScoring = {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoringFunction: scrabbleScore
  }
 ];

function scorerPrompt(word) { //still working here//
// ** Knowing that our objects with all of the information that you have hard coded out on the comment below this function... we could use some of your thinking from your template literal to use those properties to print out that expected output giving us the name nad description of our scoringAlgorithms before we ask what they want. 
  let scoringMethod;
  // loop across our scoringAlgorithms array - indexed for loop means we have an i to use
   
  for (let i = 0; i < scoringAlgorithms.length; i++) {
  console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);}
   // "Which number do you choose?"
  
  scoringMethod = Number(input.question("Enter 0, 1, or 2: "));
  if (scoringMethod === 0) { 
    console.log("Score for " + word + ": " + scoringAlgorithms[0].scoringFunction(word));
  }
  else if (scoringMethod === 1) {
    console.log("Score for " + word + ": " + scoringAlgorithms[1].scoringFunction(word));
  }
  else if (scoringMethod === 2) {
    console.log("Score for " + word + ": " + scoringAlgorithms[2].scoringFunction(word));
  }

  //("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: "));
   // will be the scoring rule selected by the user
  
// ** IF we are going to use that object refrence to make the template literal, and the user is going to be be giving us a number back.... could we use that number (which actually represents the index of the object in the array), to directly access that scoring algorithm so instead of using that [i], we could use that scoringSelected variable directly (don't forget what type a user input comes in as)
   //if (scoringSelected = 0 || scoringSelected = 1 || scoringSelected = 2) {
     //for (i in scoringAlgorithms){ for in loop 
       //console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i]}`)
     //}
    //  scoringSelected = Number(input.question);//("Enter 0, 1, or 2: "));
    // = is assignment// === is checking equality
      // if (scoringMethod === 0) {
       // console.log(scoringAlgorithms[scoringMethod].scoringFunction(word));
        // you can use the parameter to pass the user supplied word to the .scoringFunction

      // }
      // else if (scoringMethod === 1) {
      //   console.log(scoringAlgorithms[1].name);
      // }
      // else if (scoringMethod === 2) {
      //   console.log(scoringAlgorithms[2].name);
      // }
   //}
   // 0, 1,or 2 from scoringAlgorithms//
   //("0 - Simple: One point per character\n" + "1 - Vowel Bonus: Vowels are worth 3 points\n" + "2 - Scrabble: Uses scrabble point system\n" + "Enter 0, 1, or 2: \n"));
}
let newPointStructure = transform(oldPointStructure);

function transform(newScoring){ 
  let transformedArray = {};
  for (let value in newScoring){
    let oldLetters = newScoring[value];
    for(let i = 0; i < oldLetters.length; i++){
      transformedArray[oldLetters[i]]= Number(value);//needs to be a number//
    }
  }
  return transformedArray;
}
// still to do// transform(oldPointStructure)
  


function runProgram() { //still to be added to//
  console.clear()
  let inputWord = initialPrompt();
  //simpleScore(inputWord);
  //vowelBonusScore(inputWord);
  //scrabbleScore(inputWord);
  scorerPrompt(inputWord);
  

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

