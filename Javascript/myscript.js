console.log(document.getElementById("field01").value);
document.getElementById("myButton").onclick = function() {
  console.log("hello");
  document.getElementById("word01").innerHTML = document.getElementById("field01").value;
  document.getElementById("myButton").style.color = "block";
}
