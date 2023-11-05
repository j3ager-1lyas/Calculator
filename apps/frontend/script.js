/* Declaring Inputs */

const editBtn = document.querySelectorAll('.editBtn');
const operationBtn= document.querySelectorAll('.operationButton');
const numberBtn= document.querySelectorAll('.numberBtn')


/* Declaring Outputs */

let operationHistory = document.querySelector('.operationHistory');
let operationResult = document.querySelector('.operationResult');

/* Declaring Global Variables */

let operand1 = 0;
let operand2 = 0;
let operator = '';
let inputChar='';
let inputString='';
let operators=['+','-','*','=','/','^']



/* Functions */


function getInput(inputChar){

    if(operators.some((opr)=>{
        return opr == inputChar
    })){

        if(operand2!=''){

            calculate(operand1,operator,operand2);

            if(inputChar == '='){

                operator='';
                operand1='';
            }
            else{

                operator=inputChar;
            }
        }
        else{

            operator=inputChar;
        }
    }
    else{

        if(operator!=''){

            operand2+=inputChar;
        }
        else{

            operand1+=inputChar;

        }
    }
    

}

function edit(editAction){

    if(editAction == 'delete'){

        if(operator != ''){

            if(operand2!=''){

                operand2 = operand2.split('');
                operand2.pop();
                operand2 = operand2.join('');
                operationResult.textContent= operand1 + ' ' + operator + ' ' + operand2;

            }
            else{

                operator='';
                operationResult.textContent= operand1 + ' ' + operator + ' ' + operand2;

            }
        }
        else{

                operand1 = operand1.split('');
                operand1.pop();
                operand1 = operand1.join('');
                operationResult.textContent= operand1 + ' ' + operator + ' ' + operand2;

        }
    }
    else{

        operand1='';
        operand2='';
        operator='';
        operationResult='';
        operationHistory='';

    }

}

function calculate(operand1,operator,operand2){

    switch (operator){
        case '+': operand1 = +operand1 + +operand2;
            break;
        case '-': operand1 = +operand1 - +operand2;
            break;
        case '^': operand1 = (+operand1)** +operand2;
            break;
        case '/': if(+operand2 != 0){
                        operand1 = +operand1 / +operand2;
                    }
                    else {
                        operand1 = 'Division by 0 is impossible';
                    }
            break;
        default : break;
    }

    operator='';
    operand2='';
    operationResult.textContent= operand1 + ' ' + operator + ' ' + operand2;
}

function initialize(){

    numberBtn.forEach((Btn)=>{

        Btn.addEventListener('mousedown',()=>{})

    })

    operationBtn.forEach((Btn)=>{

        Btn.addEventListener('mousedown',()=>{})
    })
    
    editBtn.forEach((Btn)=>{

        Btn.addEventListener('mousedown',()=>{})
    })

    document.addEventListener('keydown',(e)=>{

        
    })

};

initialize();