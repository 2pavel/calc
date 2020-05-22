// Basic operation functions
function add(a, b) {
    return Number(a) + Number(b);
}
function subtract(a, b) {
    return Number(a) - Number(b);
}
function multiply(a, b) {
    return Number(a) * Number(b);
}
function divide(a, b) {
    return Number(a) / Number(b);
}
function sqroot (a) {
    return Math.sqrt(Number(a));
}
function operate(a, b, op) {
    switch(op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '÷':
            return divide(a, b);
        case 'squareRoot':
            return sqroot(a, b);
        case '*':
            return multiply(a, b);
        default:
            return '69XDDD420';
    }
}
// Selectors here
const numbtns = document.querySelectorAll('.numbtn');
const opbtns = document.querySelectorAll('.func');
const display = document.getElementById('screenbar');
const equals = document.getElementById('equals');
const Clear = document.getElementById('clear');
const sqr = document.getElementById('sqroot');

// Operation variables initialization
let op = undefined;
let a = '';
let b = '';
let displayValue = '';

numbtns.forEach((button) => {
    button.addEventListener('click', () => {
        (displayValue += button.innerText).toString();
        display.innerText = displayValue;
        if (a === '') {
            a = button.innerText;
        } else if (op === undefined) {
            a = display.innerText;
        } else if (b === '') {
            b = button.innerText;
        } else {
            (b += button.innerText).toString();
        }       
    });
});

opbtns.forEach((button) => {
    button.addEventListener('click', () => {
    a = displayValue;
    (op = button.innerText).toString();
    displayValue = '';
    });
});

sqr.addEventListener('click', () => {
    display.innerText = sqroot(a);
});

equals.addEventListener('click', () => {
    display.innerText = '';
    displayValue = '';
    display.innerText = operate(a, b, op);
    if (a === '' || b === '' || op === undefined) {
        console.log('That\'s not how you use calculator');
    }
    console.log(a);
    console.log(b);
    console.log(op);
    a = '';
    b = '';
});

function clear() {
    displayValue = '';
    display.innerHTML = '';
    op = undefined;
    a = '';
    b = '';
}
Clear.addEventListener('click', clear);
