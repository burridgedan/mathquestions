/*
*	(C) Copyright Daniel Burridge 2017
*   v0.1.4
*/

// declare the variables outside of other functions so all functions can access it.
var answer;
var operation = "times";

function onClickButton(buttonid) {
    switch (buttonid) {
        case 1:
            document.getElementById("answerText").disabled = true; // disable the answer box.

            if(answerText.value == answer) { // the text must equal the correct answer from above
                answerComment.innerText = "Your answer is correct! Loading next question.";
				document.getElementById("operationButton").disabled = true;
                setTimeout(setQuestion, 2000); // in two seconds call the setQuestion function
            }
            else { // else it is the wrong answer
                answerComment.innerText = "Sorry, the correct answer was: " + answer + " Loading next question.";
				document.getElementById("operationButton").disabled = true;
                setTimeout(setQuestion, 2000); // in two seconds call the setQuestion function
            }
            break;
        case 2:
            document.getElementById("answerButton").disabled = false;
            document.getElementById("answerText").disabled = false;
            setQuestion();
            break;
    }
}

function setQuestion() {
    // variables needed for randomized questions
    // generate two random numbers, random decimal then multiplyed by a set amount to get a whole number
    var number1 = Math.floor(Math.random() * 30);
    var number2 = Math.floor(Math.random() * 20);

    questionText.innerText = "What is " + number1 + " " + operation + " " + number2 + "?";
    switch (operation) {
        case "times":
            answer = number1 * number2; // times the two togther to get the answer
            answer = round(answer, 1);
            break;
        case "divide":
            answer = number1 / number2; // divide the two togther to get the answer
            answer = round(answer, 1);
            break;
        case "plus":
            answer = number1 + number2; // add the two togther to get the answer
            break;
        case "subtract":
            answer = number1 - number2; // subtract the two togther to get the answer
            break;
    }
    document.getElementById("answerText").disabled = false; // enable the answer box.
	document.getElementById("operationButton").disabled = false; // enable the drop down menu button again
    document.getElementById('answerText').value = '';
    answerComment.innerText = "";
}

function updateOperation(newop) {
    operation = newop;
}

/*
*	Credit to Billy Moon: https://stackoverflow.com/a/7343013
*/
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
