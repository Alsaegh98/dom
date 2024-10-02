/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const clear = document.querySelector('.clear');
const screen = document.querySelector(`.screen`);
/*-------------------------------- Variables --------------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
     let  value = event.target.button.number;
     screen.value += value;
      console.log(event.target.innerText);
     
    });
  });
  calculator.forEach((calculator) => {
    calculator.addEventListener('click', (event) => {
     let  value = event.target.button.number;
     screen.value += value;
      console.log(event.target.innerText);
     
    });
  });
  
  clear.forEach((clear) => {
    clear.addEventListener('click', (event) => {
     let  value = event.target.button.number;
     screen.value += value;
      console.log(event.target.innerText);
     
    });
  });

  screen.forEach((screen) => {
    screen.addEventListener('click', (event) => {
     let  value = event.target.button.number;
     screen.value += value;
      console.log(event.target.innerText);
     
    });
  });
/*------------------------ Cached Element References ------------------------*/


   
  
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
    
    console.log(event.target.innerText);
  
  
    if (event.target.classList.contains('first number')) {

        currentInput += event.target.innerText;
        updateDisplay(currentInput);
    
    }
    if (event.target.classList.contains('second number')) {

        currentInput += event.target.innerText;
        updateDisplay(currentInput);
    
    }
  
});
   
/*--------------------------------- Functions -------------------------------*/
