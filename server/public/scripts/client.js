$(document).ready(onReady);


///////////////////////////////////////////////onReady function//////////////////////////////////////////////////

function onReady() {
    console.log('It is go time!');
    $('#addButton').on('click', addition);
    $('#subtractButton').on('click', subtraction);
    $('#multiplyButton').on('click', multiply);
    $('#divideButton').on('click', divide);
    $('#clearButton').on('click', clearing);
} // onReady function that will trigger on page load due to the $(document).ready(onReady)

let newEquation = {};


///////////////////////////////////////////////addition function//////////////////////////////////////////////////

function addition() {
    console.log('addition function here. hi.');
    $('#equalsButton').on('click', additionEquals);
}


////////////////////////////////////////////additionEquals function//

function additionEquals() {
    console.log('add it up!');
    let answer = Number($('#numOneIn').val()) + Number($('#numTwoIn').val());
    newEquation = {
        number1: Number($('#numOneIn').val()),
        operation: '+',
        number2: Number($('#numTwoIn').val()),
        equals: '=',
        result: answer,
    }
    console.log(newEquation); // checking to see if this new equation was created as an object that I can then put into the calculationList.js list
    // calculationList.push(newEquation);
    $('#answerOut').empty(); // empty the answer field on the page
    $('#answerOut').append(answer); // update the answer field to the current result/answer

// below this is where I POST the new equation into the array of calculations
    $.ajax({
        method: 'POST',
        url: '/calculations',
        data: newEquation,
    }).then(function(response) {
        console.log('this is the post response from the server', response);
        newEquation = {};
        getCalculations();
    }).catch(function(error) {
        console.log(error);
        alert(error.responseText);
        
    });

} // could use this for each one


///////////////////////////////////////////////subtraction function//////////////////////////////////////////////////

function subtraction() {
    console.log('subtraction can be good.');
    $('#equalsButton').on('click', subtractionEquals);
}


////////////////////////////////////////////subtractionEquals function//

function subtractionEquals() {
    console.log('take some away!');
    let answer = Number($('#numOneIn').val()) - Number($('#numTwoIn').val());
    newEquation = {
        number1: Number($('#numOneIn').val()),
        operation: '-',
        number2: Number($('#numTwoIn').val()),
        equals: '=',
        result: answer,
    }
    console.log(newEquation); // checking to see if this new equation was created as an object that I can then put into the calculationList.js list
    // calculationList.push(newEquation);
    $('#answerOut').empty(); // empty the answer field on the page
    $('#answerOut').append(answer); // update the answer field to the current result/answer


    $.ajax({
        method: 'POST',
        url: '/calculations',
        data: newEquation,
    }).then(function(response) {
        console.log('this is the post response from the server', response);
        newEquation = {};
        getCalculations();
    }).catch(function(error) {
        console.log(error);
        alert(error.responseText);
        
    });

}


///////////////////////////////////////////////multiply function//////////////////////////////////////////////////

function multiply() {
    console.log('Multiply by Mr. Sheeran');
    $('#equalsButton').on('click', multiplyEquals);
}


///////////////////////////////////////////////multiplyEquals function//

function multiplyEquals() {
    console.log('multiply like a Hydra.');
    let answer = Number($('#numOneIn').val()) * Number($('#numTwoIn').val());
    newEquation = {
        number1: Number($('#numOneIn').val()),
        operation: '*',
        number2: Number($('#numTwoIn').val()),
        equals: '=',
        result: answer,
    }
    console.log(newEquation); // checking to see if this new equation was created as an object that I can then put into the calculationList.js list
    // calculationList.push(newEquation);
    $('#answerOut').empty(); // empty the answer field on the page
    $('#answerOut').append(answer); // update the answer field to the current result/answer


    $.ajax({
        method: 'POST',
        url: '/calculations',
        data: newEquation,
    }).then(function(response) {
        console.log('this is the post response from the server', response);
        newEquation = {};
        getCalculations();
    }).catch(function(error) {
        console.log(error);
        alert(error.responseText);
        
    });



}


///////////////////////////////////////////////divide function//////////////////////////////////////////////////

function divide() {
    console.log('divide function!');
    $('#equalsButton').on('click', divideEquals);
}


///////////////////////////////////////////////divideEquals function//

function divideEquals() {
    console.log('division time!');
    let answer = Number($('#numOneIn').val()) / Number($('#numTwoIn').val());
    newEquation = {
        number1: Number($('#numOneIn').val()),
        operation: '/',
        number2: Number($('#numTwoIn').val()),
        equals: '=',
        result: answer,
    }
    console.log(newEquation); // checking to see if this new equation was created as an object that I can then put into the calculationList.js list
    // calculationList.push(newEquation);
    $('#answerOut').empty(); // empty the answer field on the page
    $('#answerOut').append(answer); // update the answer field to the current result/answer


    $.ajax({
        method: 'POST',
        url: '/calculations',
        data: newEquation,
    }).then(function(response) {
        console.log('this is the post response from the server', response);
        newEquation = {};
        getCalculations();
    }).catch(function(error) {
        console.log(error);
        alert(error.responseText);
        
    });

}

/////////////////////////////////////////////////clear function////////////////////////////////////////////////////

function clearing() {
    console.log('inside clearing');
    $('#numOneIn').val(''); // clear numOneIn input field
    $('#numTwoIn').val(''); // clear numTwoIn input field
    $('#answerOut').empty(); // empty the answerOut h2 
    newEquation = {}
    onReady();
}


////////////////////////////////////////////getCalculations function///////////////////////////////////////////////

function getCalculations() {
    console.log('in getCalculations');
    $.ajax({
        method: 'GET',
        url: '/calculations',
    }).then(function(response) {
        console.log('our response from the server', response);
        appendToDom(response);
    })
} // could use this for each one


///////////////////////////////////////////////appendToDom function/////////////////////////////////////////////////

function appendToDom(array) {
    console.log('in appendToDom!', array);
    $('#resultListOut').empty();
    for (let item of array){
        $('#resultListOut').append(`
            <li>${item.number1} ${item.operation} ${item.number2} ${item.equals} ${item.result}</li>
        `)
    }
}

////////////////////////////////////////////notes to self as I code//////////////////////////////////////////////////

// what if I did an if statement or a function where it would clear the answer and would go back to onready. this might 
// make it so it has to start over with the initial entry of numbers and clicking of operation button.

// append the calculationList to the dom rather than the individual line each time

// Why aren't the fields emptying properly after I send them to the array of objects

// should I switch the way it reads the equation to if this = $('#add')

// or should I do a let newEquation = {number1: Number($('#numOneIn').val()), operation: etc.}