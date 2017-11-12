var Constructors = require("./node.js");

var Word = function() {
	this.help = function() {
		console.log('help')
	}
	this.randomizer = function() {
		var computerChoice = ['red', 'orange', 'yellow', 'green', 'cyan', 'indigo', 'violet', 'purple', 'magneta', 'pink', 'brown', 'gray', 'black', 'blue']
		var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
		this.word = computerGuess
		return this.word
	}
	this.blanks = function(word) {
		var blanks = [];
		let brokenletters = word.split('')
			for (i = 0; i < brokenletters.length; i++) {
				blanks.push("_") 
			}
		var hangman = blanks.join(" ")
		console.log(`\n${hangman}\n`)
		this.canvas = blanks
	}
}



	var rightAnswers = [];
	var guesses = 0;

	function refresh() {
		rightAnswers = [];
		guesses = 0;
	}

var Letters = function(canvas, word, letterGuess) {
	var run = new Constructors.prompt(word, canvas)
	var brokenletters = word.split('')


	this.outcomes = function() {
		guesses++;
		for (i = 0; i < brokenletters.length; i++) {
			if (letterGuess === brokenletters[i]) {
				canvas.splice(i, 1, letterGuess)
				if (!rightAnswers.includes(letterGuess)) {
					rightAnswers.push(letterGuess)
				}
				console.log(`\n${canvas.join(' ')}\n`)
			}
		}
			if (rightAnswers.length === brokenletters.length) {
				run.exit();
				refresh();
			} 
			if (guesses > 10) {
				run.gameover();
				refresh();
			}
			else {
				run.reload();
			}

			
	}
}

exports.word = Word;
exports.letters = Letters;