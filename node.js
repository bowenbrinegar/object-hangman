var inquirer = require('inquirer');

var Constructors = require("./commands.js");

var word = new Constructors.word()

	function prompt() {
		inquirer.prompt({
					type: "list",
					message: "What do you want to do?",
					name: "choices",
					choices: ["play hangman", "roll the dice", "exit"]
			}).then(function(res) {
					switch(res.choices) {
						case "play hangman":
							word.randomizer();
							word.blanks(word.word);
							var run = new HangmanPrompt(word.word, word.canvas);
							run.inquisition();
							break;
						case "roll the dice":
							break;
						case "exit":
							console.log(`\nbye!\n`)
							break;
						default:
							break;
					}
			})
	}

	prompt();

	var HangmanPrompt = function(word, canvas) {

		this.inquisition = function() {
			inquirer.prompt({
					type: "input",
					message: "Pick a Letter, Any Letter",
					name: "choice",
			}).then(function(res) {
					var letters = new Constructors.letters(canvas, word, res.choice)
					letters.outcomes()
			})
		};
		this.reload = function() {
			this.inquisition()
		};
		this.exit = function() {
			console.log(`\nright!!\n`)
			prompt();
		};
		this.gameover = function() {
			console.log(`\n\nyou ran out of guesses!\n`)
			prompt();
		}
	}

exports.prompt = HangmanPrompt;
