function addFunc(a,b) {
  var c = a + b;
  return c;
}

document.getElementById("addButton").onclick = function() {
  a = parseInt(document.getElementById("number1").value);
  b = parseInt(document.getElementById("number2").value);
  document.getElementById("demo").innerHTML = addFunc(a,b);
}


function subtraction(arr) {
  var c = a - b;
  return c;
}
document.getElementById("subtractButton").onclick = function() {
  a = parseInt(document.getElementById("number1").value);
  b = parseInt(document.getElementById("number2").value);
  document.getElementById("demo").innerHTML = subtraction(a,b);
}


function multi(arr) {
  var c = a * b;
  return c;
}
document.getElementById("multiButton").onclick = function() {
  a = parseInt(document.getElementById("number1").value);
  b = parseInt(document.getElementById("number2").value);
  document.getElementById("demo").innerHTML = multi(a,b);
}


function divide(arr) {
  var c = a / b;
  return c;
}
document.getElementById("divideButton").onclick = function() {
  a = parseInt(document.getElementById("number1").value);
  b = parseInt(document.getElementById("number2").value);
  document.getElementById("demo").innerHTML = divide(a,b);
}

function expo(a,b) {
  var z = a**b;
  return z;
}
document.getElementById("exponentButton").onclick = function() {
  a = parseInt(document.getElementById("number1").value);
  b = parseInt(document.getElementById("number2").value);
  document.getElementById("demo").innerHTML = expo(a,b);
}


function root(a){
  var z= Math.sqrt(a);
  return z;
}
document.getElementById("rootButton").onclick = function() {
  a = parseInt(document.getElementById("number1").value);
  b = parseInt(document.getElementById("number2").value);
  document.getElementById("demo").innerHTML = root(a);
}
