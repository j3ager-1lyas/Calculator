/* Declaring Inputs */

const editBtn = document.querySelectorAll('.editBtn');
const operationBtn = document.querySelectorAll('.operationButton');
const numberBtn = document.querySelectorAll('.numberBtn')


/* Declaring Outputs */

let operationHistory = document.querySelector('.operationHistory');
let operationResult = document.querySelector('.operationResult');

/* Declaring Global Variables */

let operand1 = '';
let operand2 = '';
let operator = '';
let inputChar = '';
let inputString = '';
let operators = ['+', '-', '*', '=', '/', '^'];
let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]




/* Functions */


function getInput(inputChar) {

    operationHistory.textContent = '';

    if (operators.some((opr) => {
        return opr == inputChar
    })) {

        if (operand2 != '') {

            calculate();

            if (inputChar == '=') {

                operator = '';
                operationResult.textContent = operand1 + ' ' + operator + ' ' + operand2;
            }
            else {

                operator = inputChar;
                operationResult.textContent = operand1 + ' ' + operator + ' ' + operand2;
            }
        }
        else {

            if (operand1 != '') {

                if (inputChar == '=') {

                    operator = '';
                    operationResult.textContent = operand1 + ' ' + operator + ' ' + operand2;
                }
                else {
                    operator = inputChar;
                    operationResult.textContent = operand1 + ' ' + operator + ' ' + operand2;

                }

            }

        }
    }
    else {

        if (operator != '') {

            operand2 += inputChar;
            operationResult.textContent = operand1 + ' ' + operator + ' ' + operand2;
        }
        else {

            operand1 += inputChar;
            operationResult.textContent = operand1 + ' ' + operator + ' ' + operand2;

        }
    }
}

function edit(editAction) {

    if (editAction == 'delete') {

        if (operator != '') {

            if (operand2 != '') {

                operand2 = operand2.split('');
                operand2.pop();
                operand2 = operand2.join('');
                operationResult.textContent = operand1 + ' ' + operator + ' ' + operand2;

            }
            else {

                operator = '';
                operationResult.textContent = operand1 + ' ' + operator + ' ' + operand2;

            }
        }
        else {

            operand1 = operand1.split('');
            operand1.pop();
            operand1 = operand1.join('');
            operationResult.textContent = operand1 + ' ' + operator + ' ' + operand2;

        }
    }
    else {

        operand1 = '';
        operand2 = '';
        operator = '';
        operationResult.textContent = '';
        operationHistory.textContent = '';

    }

}

function calculate() {

    switch (operator) {
        case '+': operand1 = +operand1 + +operand2;
            break;
        case '-': operand1 = +operand1 - +operand2;
            break;
        case '^': operand1 = (+operand1) ** +operand2;
            break;
        case '*': operand1 = (+operand1) * +operand2;
            break;
        case '/': if (+operand2 != 0) {
            operand1 = +operand1 / +operand2;
        }
        else {
            operationHistory.textContent = 'Division by 0 is impossible';
        }
            break;
        default: break;
    }
    if(!(Number.isInteger(operand1))){
        operand1=operand1.toFixed(3);
    }
    operator = '';
    operand2 = '';
    operationResult.textContent = operand1 + ' ' + operator + ' ' + operand2;

}

function initialize() {

    numberBtn.forEach((Btn) => {

        Btn.addEventListener('mousedown', (e) => {

            inputChar = e.target.value;
            getInput(inputChar);

        })

    })

    operationBtn.forEach((Btn) => {

        Btn.addEventListener('mousedown', (e) => {
            inputChar = e.target.value;
            getInput(inputChar);
        })
    })

    editBtn.forEach((Btn) => {

        Btn.addEventListener('mousedown', (e) => {
            edit(e.target.value)
        })
    })

    document.addEventListener('keydown', (e) => {

        if (digits.some((dig) => {
            return dig == e.key;
        })) {

            inputChar = e.key;
            getInput(inputChar);

        }
        else if (operators.some((opr) => {
            return opr == e.key;
        })) {

            inputChar = e.key
            getInput(inputChar);
        }
        else if (e.key == 'Backspace') {
            edit('delete');
        }
        else if (e.key == 'Enter') {
            getInput('=');
        }

    })

}

initialize();