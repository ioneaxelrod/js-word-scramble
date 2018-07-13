function swapRandom(array) {
	const randomIndex1 = getRandomInt(array.length);
	const randomIndex2 = getRandomInt(array.length);
	let tempValue;

	tempValue = array[randomIndex1];
	array[randomIndex1] = array[randomIndex2];
	array[randomIndex2] = tempValue;

	return array;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function printCandyFlavors(candyMap) {
	for (let [key, value] of candyMap.entries()) {
		console.log(`The ${value} is colored ${key}.`);
	}
}

// Create a function that reverses a word
function reverseWord(word) {
	let reversedWord = "";
	for (let i = word.length - 1; i >= 0; i--) {
		reversedWord += word.charAt(i);
	}

	return reversedWord;
}

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.
function reverseWordsInArray(words) {

	const reversedWords = [];
	for (let word of words) {
		reversedWords.push(reverseWord(word));
	}
	return reversedWords;

}

// Create a function that returns a random word from an array
function randomWordFromArray(array) {
	return array[getRandomInt(array.length)];
}

// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.
function createReverseMapFromArray(array) {
	const reverseMap = new Map();
	array.forEach(word => reverseMap.set(word, reverseWord(word)));
	return reverseMap;
}


// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.

function isGuessCorrect(guess, word, map) {
	if (map.has(guess)) {
		return word;
	}
	else {
		console.log("Sorry, incorrect. The word was...", word);
	}
}
// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.
function scrambleWord(word) {
	const wordArray = [];

	for (let i = 0; i < word.length; i++) {
		wordArray.push(word.charAt(i));
	}

	for (let char of wordArray) {
		swapRandom(wordArray);
	}

	return wordArray.join("");
}

function swapRandom(array) {
	const randomIndex1 = getRandomInt(array.length);
	const randomIndex2 = getRandomInt(array.length);
	let tempValue;

	tempValue = array[randomIndex1];
	array[randomIndex1] = array[randomIndex2];
	array[randomIndex2] = tempValue;

	return array;
}



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.


// const candy = new Map();
// candy.set('yellow', 'banana');
// candy.set('orange', 'cantaloupe');
// candy.set('purple', 'blueberry');
// candy.set('red', 'apple');
// candy.set('green', 'kale');

// const array = ['k', 'a', 'm', 'i'];
// const newArray = swapRandom(array);


// console.log(newArray);
// printCandyFlavors(candy);

const animals = ['cat', 'dog', 'giraffe', 'emu', 'aardvark'];
const backwardsAnimals = reverseWordsInArray(animals);


// console.log(backwardsAnimals);
// console.log(randomWordFromArray(animals));

// const backwardsAnimalMap = createReverseMapFromArray(animals);
// console.log(backwardsAnimalMap);
console.log(scrambleWord(animals[2]));