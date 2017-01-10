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
