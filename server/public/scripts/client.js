$(document).ready(onReady);


///////////////////////////////////////////////onReady function//////////////////////////////////////////////////

function onReady() {
    console.log('It is go time!');
    $('#addButton').on('click', addition);
    $('#subtractButton').on('click', subtraction);
    $('#multiplyButton').on('click', multiply);
    $('#divideButton').on('click', divide);
    $('#equalsButton').on('click', equals);
    $('#clearButton').on('click', clearing);
} // onReady function that will trigger on page load due to the $(document).ready(onReady)

let operator = ''; // this creates the operator as a blank string

// let newEquation = {};

// what if I empty newEquation again within the addition, subtraction etc. functions
///////////////////////////////////////////////addition function//////////////////////////////////////////////////

function addition() {
    operator = '+';
    // console.log('addition function here. hi.');
    // $('#equalsButton').on('click', additionEquals);
}


////////////////////////////////////////////additionEquals function//

function equals() {
    console.log('equals function!');
    if (operator === '+'){
        let answer = Number($('#numOneIn').val()) + Number($('#numTwoIn').val());
        newEquation = {
            number1: Number($('#numOneIn').val()),
            operation: operator,
            number2: Number($('#numTwoIn').val()),
            equals: '=',
            result: answer,
        }
        console.log(newEquation); // checking to see if this new equation was created as an object that I can then put into the calculationList.js list
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
    } 
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
        newEquation.empty;
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

// could I splice() the information back out of the newEquation?

// could enter in all of the operation types into the same function and do an "if $(this) = $('addButton')..." statement in an operation function

// for (var member in myObject) delete myObject[member];      // this is one way to empty an object using js

// // for enumerable and non-enumerable of an object with proto chain
// var props = Object.getOwnPropertyNames(obj);
// for (var i = 0; i < props.length; i++) {
//   delete obj[props[i]];
// }
                                                                            // These could also help empty the object. //
// // for enumerable properties of shallow/plain object
// for (var key in obj) {
//   // this check can be safely omitted in modern JS engines
//   // if (obj.hasOwnProperty(key))
//     delete obj[key];
// }



// Object.keys(object).forEach(key => {
//     delete object[key];
// })
//
// const user = {
//     name: 'John Doe',
//     age: 25,
//   };
// 
//   Object.keys(user) // ['name', 'age']