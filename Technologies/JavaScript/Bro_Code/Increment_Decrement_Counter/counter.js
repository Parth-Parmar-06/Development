let decrement = document.getElementById('decrement');
let reset = document.getElementById('reset');
let increment = document.getElementById('increment');
let counter = document.getElementById('counter');
let count = 0;

decrement.onclick = function() {
    counter.textContent = --count;
}
reset.onclick = function() {
    count = 0;
    counter.textContent = count;
}
increment.onclick = function() {
    counter.textContent = ++count;
}