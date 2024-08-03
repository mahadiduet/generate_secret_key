document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.input_btn');
    
    let currentInput = '';

    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        const buttonValue = event.target.value;
  
        if (buttonValue === 'X') {
          currentInput = currentInput.slice(0, -1);
        } 
        else if (buttonValue === 'Clear') {
          currentInput = '';
        } 
        else if (buttonValue === 'Submit') {
          alert(`Submitted value: ${currentInput}`);
        } 
        else {
          currentInput += buttonValue;
        }
  
        display.value = currentInput.length > 0 ? currentInput : '0';
      });
    });
  });
  