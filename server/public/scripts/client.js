$(document).ready(onReady);


////////////////////////////////////////////onReady function///////////////////////////////////////////////

function onReady() {
    console.log('It is go time!');
    $('#addButton').on('click', addition);
} // onReady function that will trigger on page load due to the $(document).ready(onReady)


////////////////////////////////////////////addition function///////////////////////////////////////////////

function addition() {
    console.log('addition function here. hi.');
    $('#equalsButton').on('click', additionAnswer);
}

function additionAnswer() {
    console.log('add it up!');
}