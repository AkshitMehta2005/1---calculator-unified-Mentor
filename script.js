
const display = document.getElementById('display');


function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function appendValue(value) {
  display.value += value;
}

function calculateResult() {
  try {
    display.value = evaluateExpression(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}

function evaluateExpression(expression) {
  return new Function('return ' + expression)();
}

document.getElementById('calc-form').addEventListener('submit', function(e) {
  e.preventDefault();
});
