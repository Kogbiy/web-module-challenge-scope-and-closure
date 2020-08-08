// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  counter 1 has count declared in a function while counter 2 has count declared in the global scope.
 * 2. Which of the two uses a closure? How can you tell?
 *  counter two uses a closure because it defines count in the global scope and there is memory each time count is implemented.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *  counter1 would be preferable if we didnt want to store memory for count while counter2 is preferable if we still needed count after its initial use.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(ranNum){

    const randomPoints = Math.floor(Math.random() * (ranNum + 1));

    return randomPoints;

} console.log(inning(2));


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, innNum){

  let score = {
    Home: 0,
    Away: 0,
  };

  for(let i = 0; i < innNum; i++){
    score["Home"] += callback(2);
    score["Away"] += callback(2);
  }

  return score;

} console.log(finalScore(inning, 9));


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(callback){
  return callback(2);
}


function scoreboard(callback1, callback2, innNum) {
  let totalScores = [];

  let homeScore = 0;
  let awayScore = 0;
  let currentInning = 0;

  for(let i = 0; i < innNum; i++){
    homeScore += callback1(callback2);
    awayScore += callback1(callback2);
  

  currentInning = currentInning + 1;

  totalScores += `Inning ${currentInning}: awayTeam ${awayScore} - homeTeam ${homeScore}`

  if(homeScore === awayScore && currentInning >= innNum){
    i -= 1;
  }
}

  totalScores += `Final Score: awayTeam (${awayScore}) - homeTeam (${homeScore})`

  return totalScores;
}

console.log(scoreboard(getInningScore, inning, 9));

