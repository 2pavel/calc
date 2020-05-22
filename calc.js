// Basic operation functions
function add(a, b) {
    return Number(a) + Number(b);
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function sqroot (a) {
    return Math.sqrt(a);
}
function operate(a, b, op) {
    switch(op) {
        case '+':
            return add(a, b);
        case '-':
            subtract(a, b);
            break;
        case '÷':
            divide(a, b);
            break;
        case 'squareRoot':
            sqroot(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
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
    display.innerText = '';
    displayValue = '';
    });
});

equals.addEventListener('click', () => {
    display.innerText = '';
    displayValue = '';
    display.innerText = operate(a, b, op);
    console.log(a);
    console.log(b);
    console.log(op);
});

function clear() {
    displayValue = '';
    display.innerHTML = '';
    op = undefined;
    a = '';
    b = '';
}
Clear.addEventListener('click', clear);
