// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
// Listens for a particular even to happen then the dOm will be loaded and execute funcation
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            // this refers to the button that was just clicked
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                //set game type to value of attribute, this will tell us what game type we are wanting to run
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

/**
 * The main game "loop", called when the ecript is first loaded
 * and after the user's anser has been submitted.
 */
// math random assigns a random number , math floor rounds the number to the nearest integer 
//Creates two random numbers betwwen 1 and 25
function runGame() {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorretAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}