const randomQuote = document.getElementById('randomQuote')
const userInput = document.getElementById('userInput');
const gameTimer = document.getElementById('timer');

let hardQuotes = [
    '*** Unfortunately this level is not available at the moment but it will be added very soon<br> - Thanks for your patience ***',
    /* '“Life must be understood backward. But it must be lived forward”.  -Soren Kierkegaard',
    '“The greater the difficulty, the more glory in surmounting it” – Epicurus',
    '“That man is wisest who, like Socrates, realises that his wisdom is worthless” – Plato',
    '“The function of prayer is not to influence God, but rather to change the nature of the one who prays” – Soren Kierkegaard',
    '“If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things” – Rene Descartes',
    '“Freedom is secured not by the fulfilling of one\'s desires, but by the removal of desire” – Epictetus',
    '“The brave man is he who overcomes not only his enemies but his pleasures” – Democritus',
    '“A little philosophy inclineth man\'s mind to atheism; but depth in philosophy bringeth men\’s minds about to religion” – Sir Francis Bacon',
    '“The unexamined life is not worth living” – Socrates',
    '“We are what we repeatedly do. Excellence, then, is not an act, but a habit” – Aristotle',
    '“Without music, life would be a mistake.” ― Friedrich Nietzsche',
    '“Go to heaven for the climate and hell for the company.” ― Benjamin Franklin',
    '“How wonderful it is that nobody need wait a single moment before starting to improve the world.” ― Anne Frank',
    */
];
let easyQuotes = [
    'life must be understood backward but it must be lived forward',
     'the greater the difficulty the more glory in surmounting it',
     'that man is wisest who like socrates realises that his wisdom is worthless',
     'the function of prayer is not to influence god but rather to change the nature of the one who prays',
     'if you would be a real seeker after truth it is necessary that at least once in your life you doubt as far as possible all things',
     'freedom is secured not by the fulfilling of ones desires but by the removal of desire',
     'the brave man is he who overcomes not only his enemies but his pleasures',
     'the unexamined life is not worth living',
     'without music life would be a mistake',
     'go to heaven for the climate and hell for the company',
     'how wonderful it is that nobody need wait a single moment before starting to improve the world',
];

let quotesForCurrentRun = [];

let currentlySelectedQuotes = easyQuotes;

function handleUserModeSelection(mode) {
    console.log(mode);
    if (mode === 'easy') {
        currentlySelectedQuotes = easyQuotes;
    } else if (mode === 'hard') {
        currentlySelectedQuotes = hardQuotes;
        console.log("hard");
    }
}


/* Followed this lesson from Free Code Camp
https://www.freecodecamp.org/news/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08/  */

function newQuote() {
    let randomNum = Math.floor(Math.random() * (currentlySelectedQuotes.length));
    document.getElementById('randomQuote').innerHTML = currentlySelectedQuotes[randomNum];
}

function handleKeyUp() {
    startTimer();
    spellCheck();
}

let timerRunning = false;
let interval;

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        var startTime = Date.now();

/* Found this timer on Stack Overflow 
https://stackoverflow.com/questions/32307483/in-javascript-how-to-create-an-accurate-timer-with-milliseconds  */

        interval = setInterval(function () {
            var elapsedTime = Date.now() - startTime;
            document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);
        }, 100);
    }
}

function myStopFunction() {
    clearInterval(interval);
    timerRunning = false;
}


let quotesCompletedThisRound = 0;

function spellCheck() {
    // get the input from the text area (that the user has typed)
    let userInputText = document.getElementById('userInput').value
    // check user input against the current quote, to see if they're equal
    let randomQuoteText = document.getElementById('randomQuote').innerText
    // if they're equal, do something (for starters, alert "correct!")
    if (userInputText === randomQuoteText) {
        quotesCompletedThisRound++;
        quotesForCurrentRun.push(userInputText);
        console.log(quotesForCurrentRun);
        if (quotesCompletedThisRound > 4) {
            gameComplete();
        }
        newQuote();
        document.getElementById('userInput').value = "";
        // alert("Correct");
    }
}

/* 
Used all of these resources to work out a way to calculate words per minute
https://www.geeksforgeeks.org/design-a-typing-speed-test-game-using-javascript/
https://forum.level1techs.com/t/jquery-script-to-calculate-words-per-minute-script-works-on-jsfiddle-but-not-on-my-site/119083
https://stackoverflow.com/questions/10861372/calculate-words-per-minute-in-real-time
*/

function gameComplete() {
    alert("Game Complete!!!!");
    // current time = timer at gameComplete
    const currentTime = document.getElementById('timer').innerText;
    const numberOfWordsInTypedSentences = quotesForCurrentRun.reduce((accumulator, currentValue) => {
        accumulator += currentValue.split(' ').length;
        return accumulator;
    }, 0);
    let minutesElapsed = parseFloat(currentTime) / 60;
    let wordsPerMinute = Math.round(numberOfWordsInTypedSentences / minutesElapsed);
    alert(`Your Typing Speed is ${wordsPerMinute} words per minute`);
    stopAndClearTimer();
    quotesCompletedThisRound = 0;
    quotesForCurrentRun = [];
}

function stopAndClearTimer() {
    myStopFunction();
    document.getElementById('timer').innerText = "00.00";
}


function submitQuote() {
    alert("SUCCESS - Thank You. Your quote will soon be added to the game");
}