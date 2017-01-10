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

//Function will return the multiplication of two numbers

function multiply(a, b){
    return a * b;
}
console.log(multiply(5, 100));
console.log(multiply(6, 6));
console.log(multiply(false, 5));

//In the last case I used the boolean false, which Javascript thought means 0, 0 * 5 is 0 so the output was 0

//Function will return different outputs based on what the string value is

function numberString(num1, num2, word){
    if (word === "add"){
        return num1 + num2;
    } else if (word === "subtract"){
        return num1 - num2;
    } else if (word === "mult"){
        return num1 * num2;
    } else if (word === "div"){
        return num1 / num2;
    } else {
        return "0"
    }
}

console.log(numberString(8, 4, "add"));

//This function will return the string the amount of times you specify

function repeatWord(number, word){
    var output = "";
    for (var i = 1; i <= number; i++) {
    output = output + word;
    }
    
    return output;
}

console.log(repeatWord(4, "dog"));
console.log(repeatWord(6, "party"));

//This function will use a For loop to print out 1-10

function oneToTen(number) {
    for (var i= 1; i <=10; i++) {
        console.log(i);
    }
}

console.log(oneToTen());

//This function will use a loop to print out 1-10 but as strings

function oneToTenWords(number) {
    for (var i= 1; i <=10; i++) {
        switch(i){
            case 1:
                console.log("one");
                break;
            case 2:
                console.log("two");
                break;
            case 3:
                console.log("three");
                break;
            case 4:
                console.log("four");
                break;
            case 5:
                console.log("five");
                break;
            case 6:
                console.log("six");
                break;
            case 7:
                console.log("seven");
                break;
            case 8:
                console.log("eight");
                break;
            case 9:
                console.log("nine");
                break;
            case 10:
                console.log("ten");
                break;
        }
    }
}

console.log(oneToTenWords());