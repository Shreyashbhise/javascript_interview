Closure: 

A closure is when a function remembers variables from its outer scope, even after that outer function has finished executing.

Here’s an example:

function user() {
  let name = "Payal"; // private variable
  return function () {
    console.log(name);
  };
}

const sayName = user();
sayName(); // Output: "Payal"


🧠 In this code:

name is a local variable inside user()

Even after user() finishes running, the returned function remembers the value of name

That’s because the function closes over the name variable — this is called a closure

And if the interviewer asks:

Can we access name directly?

You can say:

❌ No, we cannot access name directly because it’s a local variable. It’s private, and only accessible through the returned function — this is a great use case for data privacy using closures.
