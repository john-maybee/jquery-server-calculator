$(document).ready(onReady);


////////////////////////////////////////////onReady function///////////////////////////////////////////////

function onReady() {
    console.log('It is go time!');
    $('#addButton').on('click', addition);
} // onReady function that will trigger on page load due to the $(document).ready(onReady)


////////////////////////////////////////////addition function///////////////////////////////////////////////

function addition() {
    console.log('addition function here. hi.');
    $('#equalsButton').on('click', additionEquals);
}

function additionEquals() {
    console.log('add it up!');
    let numOne = $('#numOneIn').val();
    let numTwo = $('#numTwoIn').val();
    let answer = numOne + numTwo;
    let newEquation = {
        number1: numOne,
        operation: '+',
        number2: numTwo,
        equals: answer,
    }
    console.log(newEquation); // checking to see if this new equation was created as an object that I can then put into the calculationList.js list
}