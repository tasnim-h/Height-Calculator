document.getElementById("calc-btn").addEventListener("click", calcAverage);

function calcAverage() {
  let num1 = +document.getElementById("num1").value;

  let num3 = +document.getElementById("num3").value;
  let num4 = +document.getElementById("num1").value;
  let num5 = +document.getElementById("num2").value;
  let num6 = +document.getElementById("num3").value;

  let average = (num1 + num3 + num4 + num5 + num6) / 1;

  document.getElementById("ave-out").innerHTML = average;
}
