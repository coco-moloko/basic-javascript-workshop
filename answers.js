//Hello I am a comment!

//Function will return the first character of the string
function firstCharacter(letter) {
    return letter[0]
}

console.log(firstCharacter("Hello"));
console.log(firstCharacter("Whattup Y'all"));
console.log(firstCharacter(" "));

//Function will return the last character of the string
function lastCharacter(word) {
    return word[word.length - 1];
}
console.log(lastCharacter("Table"));
console.log(lastCharacter("Chair Legs"));
console.log(lastCharacter("Pizza "));

//Function will add a string and a number and return the character at that number
function stringNumber(word, number){
    return word[number - 1];
}
console.log(stringNumber("banana", 3));
console.log(stringNumber("pamplemousse", 5));
console.log(stringNumber("dog chow", 5));
console.log(stringNumber(" ", 3));

//Function will add two numbers together

function sum(a, b){
    return a + b;
}
console.log(sum(3, 5));
console.log(sum(7, 35));
console.log(sum("pizza", 5));

// The total of the last sum is pizza5 because you can't put math on a string