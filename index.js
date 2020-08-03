var currNum = ''; // Current number
var GeneratedPin = '8888';
var tryNumbers = 3;

const numPad = getElement('.num');
const screen = getElement('#screen');
const trySpan = getElement('#try-left');
const wrongPassword = getElement('#wrong');
const correctPassword = getElement('#correct');

// --------------------------------------------------

// to get any element from HTML  
function getElement(element) {
    if (element[0] === '#') { // If element is an ID
        return document.querySelector(element);
    }

    return document.querySelectorAll(element);
}

// When Number is clicked. Get the current number selected
var setNum = function () {

    wrongPassword.style.display = 'none';

    if (screen.value.length < 4) {
        screen.value = screen.value + this.getAttribute("data-num");
    }

    else {
        alert("Pin Must be 4 digits.");
    }

};


// --------------------------------------------------

// clicked number pad
for (var num of numPad) {
    num.addEventListener('click', setNum);
}

// clicked backspace btn
getElement('#back-spc').addEventListener('click', function () {
    newLen = screen.value.length - 1;
    screen.value = (screen.value).slice(0, newLen);
});

// clicked clear btn
getElement('#clear').addEventListener('click', function () {
    screen.value = "";
});

// clicked submit btn
getElement('#submit-btn').addEventListener('click', function () {
    var enteredPin = screen.value;

    if (enteredPin.length == 0) {
        alert("Enter Your Pin then click SUBMIT");
    }

    else {
        console.log(tryNumbers);

        if (GeneratedPin === enteredPin) {
            correctPassword.style.display = 'block';
        }

        else if (tryNumbers>0) {
            wrongPassword.style.display = 'block';
        }

        tryNumbers--;
        trySpan.innerHTML = tryNumbers;
        

        if (tryNumbers==0){
            wrongPassword.style.display = 'none';
            getElement('#submit-btn').disabled = true;
            getElement('#submit-btn').style.background = 'lightgray';
     
        }
    }

    screen.value = "";

});
