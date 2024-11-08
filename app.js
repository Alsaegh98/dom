/*-------------------------------- Constants --------------------------------*/

const ADD = '+';
const SUBTRACT = '-';
const MULTIPLY = '*';
const DIVIDE = '/';

/*---------------------------- Variables (state) ----------------------------*/

let currentInput = '';
let operator = '';
let result = 0;

/*------------------------ Cached Element References ------------------------*/

const displayEl = document.querySelector('.display');
const calculatorEl = document.querySelector('#calculator');

/*-------------------------------- Functions --------------------------------*/

const updateDisplay = (value) => {
  displayEl.innerText = value;
};

const handleNumberClick = (number) => {
  currentInput += number;
  updateDisplay(currentInput);
};

const handleOperatorClick = (op) => {
  if (currentInput === '') return;
  if (result === 0) {
    result = parseFloat(currentInput);
  } else {
    result = calculate(result, parseFloat(currentInput), operator);
  }
  operator = op;
  currentInput = '';
  updateDisplay(result);
};

const handleEqualClick = () => {
  if (currentInput === '' || operator === '') return;
  result = calculate(result, parseFloat(currentInput), operator);
  updateDisplay(result);
  currentInput = '';
  operator = '';
};

const handleClearClick = () => {
  currentInput = '';
  operator = '';
  result = 0;
  updateDisplay(0);
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case ADD:
      return num1 + num2;
    case SUBTRACT:
      return num1 - num2;
    case MULTIPLY:
      return num1 * num2;
    case DIVIDE:
      return num1 / num2;
    default:
      return num2;
  }
};

/*----------------------------- Event Listeners -----------------------------*/

calculatorEl.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('number')) {
    handleNumberClick(target.innerText);
  } else if (target.classList.contains('operator')) {
    if (target.innerText === 'C') {
      handleClearClick();
    } else {
      handleOperatorClick(target.innerText);
    }
  } else if (target.classList.contains('equals')) {
    handleEqualClick();
  }
});

updateDisplay(0);
