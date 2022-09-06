// let text = "Hello World"

// console.log(text)
let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}
