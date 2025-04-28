for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
🧠 Why this happens?
var does NOT create a new i for each iteration.

All callbacks share one single i.

At the time callbacks run, i is already 3.




for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
🧠 Why let works?
let is block-scoped.

Each loop iteration has its own new copy of i.

So each setTimeout remembers the correct value!

Let’s now see how to fix this problem even with var, without changing it to let.

  Using an IIFE (Immediately Invoked Function Expression)
You can wrap setTimeout inside a function to create a new scope for each i.

  for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 1000);
  })(i); // pass `i` as argument
}

