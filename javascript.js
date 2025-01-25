let current = '';
let previous = '';
let operator = null;

//calculations
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => (num2 !== 0 ? num1 / num2 : 'Error');

//display
const display = document.getElementById('display');

function popDisplay(number) {
    if (number === 'Error') {
        display.textContent = 'Error'
    } else {
        let roundedNumber = Math.round(number * 10000000) / 10000000;
        display.textContent = roundedNumber || '0';
    };
};

//operate
function operate() {
    if (previous && operator && current) {
        const num1 = parseFloat(previous);
        const num2 = parseFloat(current);
        if (operator === '+') {
            return add(num1, num2);
        } else if (operator === '-') {
            return subtract(num1, num2);
        } else if (operator === '*') {
            return multiply(num1, num2);
        } else if (operator === '/') {
            return divide(num1, num2);   
        } else {
            return num2;
        }
    };
};

//button clicks
document.querySelectorAll('.btn').forEach((button) =>
    button.addEventListener('click', () => {
        const value = button.textContent;
        console.log(value);

        if (value === 'AC') {
            current = '';
            previous = '';
            operator = null;
            popDisplay('0');
        } else if (value === 'delete') {
            current = current.slice(0, -1);
            popDisplay(current || '0');
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (current) {
                if (previous && operator) {
                    previous = operate();
                    popDisplay(previous);
                } else {
                    previous = current;
                }
                operator = value;
                current = '';
            }
        } else if (value === '=') {
            if (current && previous && operator) {
                current = operate();
                previous = '';
                operator = null;
                popDisplay(current);
            }
        } else {
            if (value === '.' && current.includes('.')) return;
            current += value;
            popDisplay(current);
        }
    })
);

// Keyboard support
document.addEventListener('keydown', (e) => {
    const keyLog = {
        '/': '/',
        '*': '*',
        '+': '+',
        '-': '-',
        Enter: '=',
        Backspace: 'delete',
        Escape: 'AC',
    };
    const key = keyLog[e.key] || e.key;

    const button = [...document.querySelectorAll('.btn')].find(
        (btn) => btn.textContent === key
    );

    if (button) {
        button.click();
    }
});