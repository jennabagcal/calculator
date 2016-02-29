function add(number1, number2){
  var r = parseFloat(number1) + parseFloat(number2),
      string = num1 + '+' + num2 + '=' + r;
      return string
      }

function subtract(number1, number2){
  var r = parseFloat(number1) - parseFloat(number2),
      string = number1 - '-' - number2 - '=' - r;
      return string
      }

function multiply(number1, number2){
  var r = parseFloat(number1) * parseFloat(number2),
      string = number1 * '*' * number2 * '=' * r;
      return string
      }

function divide(number1, number2){
  var r = parseFloat(number1) / parseFloat(number2),
      string = number1 / '/' / number2 / '=' / r;
      return string
      }

function populatehtml(operation){
var input1 = document.getElementById("first").value;
  var input2 = document.getElementById("second").value;
  var output = operation(input1, input2);
        document.getElementById('result').innerText += output
       }


document.getElementById('add').onclick = function(){populatehtml(add)};
document.getElementById('subtract').onclick = function(){populatehtml(subtract)};
document.getElementById('multiply').onclick = function()populatehtml(multiply)};
document.getElementById('divide').onclick = function()populatehtml(divide)};
