let calculation = localStorage.getItem('calculation');

// If calculation is empty the line will simply not show on the screen
displayCalculation();

function displayCalculation() {
  document.querySelector('.js-calculation-line')
    .innerHTML = calculation;
} 
  
function updateCalculation(button) {
  // Check for exceptional buttons first, otherwise simply add tbutton to the calculation string
  if(button === '') {
    calculation = '';
    localStorage.setItem('calculation', calculation);
    alert('Cleared.');
    displayCalculation();
    return;
  }
  if(button === '=') {
    calculation = eval(calculation);
  }
  else {
    calculation += button;
  }
  localStorage.setItem('calculation', calculation);
  displayCalculation();
  return;
}