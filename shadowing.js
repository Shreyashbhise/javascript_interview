var x = 20;

function foo() {
    console.log(x);
    var x = 10;
}

foo();


🧠 Key Concept: Hoisting
In JavaScript, variable declarations using var are hoisted to the top of their function scope, but the value is not hoisted.

So this:


function foo() {
    console.log(x);
    var x = 10;
}

Is internally treated like this:



function foo() {
    var x;           // hoisted declaration
    console.log(x);  // x is undefined here
    x = 10;          // now x gets assigned 10
}
✅ Explanation:
Global x = 20 is declared.

Inside foo(), there's another x declared with var, which shadows the global x.

This x is hoisted, so at the time of console.log(x), it exists but has the value undefined.

📤 Output:

undefined
