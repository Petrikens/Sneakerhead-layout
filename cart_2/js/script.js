var number = 1;
var count = document.getElementById('count');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
plus.addEventListener('click', plusOne);
minus.addEventListener('click', minusOne);

function plusOne() {
   number++;
   count.textContent = number.toString();
}

function minusOne() {
   number--;
   count.textContent = number.toString();
}