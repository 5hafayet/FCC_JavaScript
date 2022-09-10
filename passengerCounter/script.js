// let text = "Hello World"

// console.log(text)
let countEl = document.getElementById("count-el");

let count = 0;
let save = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function resetCount() {
  save = count;
  count = 0;
  countEl.innerText = count;
}
