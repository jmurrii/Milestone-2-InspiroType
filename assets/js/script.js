let quotes = [

'“Life must be understood backward. But it must be lived forward” – Søren Kierkegaard',
'“Only one man ever understood me, and he didn’t understand me” – G. W. F. Hegel',
'“The greater the difficulty, the more glory in surmounting it” – Epicurus',
'“That man is wisest who, like Socrates, realizes that his wisdom is worthless” – Plato',
'“The function of prayer is not to influence God, but rather to change the nature of the one who prays” – Søren Kierkegaard',
'“If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things” – René Descartes',
'“Freedom is secured not by the fulfilling of one\'s desires, but by the removal of desire” – Epictetus',
'“The brave man is he who overcomes not only his enemies but his pleasures” – Democritus',
'“A little philosophy inclineth man\'s mind to atheism; but depth in philosophy bringeth men\’s minds about to religion” – Sir Francis Bacon',
'“The unexamined life is not worth living” – Socrates',
'“We are what we repeatedly do. Excellence, then, is not an act, but a habit” – Aristotle',
'“Without music, life would be a mistake.” ― Friedrich Nietzsche',
'“Go to heaven for the climate and hell for the company.” ― Benjamin Franklin',
'“How wonderful it is that nobody need wait a single moment before starting to improve the world.” ― Anne Frank',

]



function newQuote(){
let randomNum = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNum];
}

console.log("script working");