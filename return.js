✅ Code: without return

function foo() {
    console.log("Hello");
}

const result = foo();
console.log(result);


🔍 Step-by-step:
You define a function foo() that logs "Hello" to the console.

You call foo() and assign its return value to result.


const result = foo(); // prints "Hello"
But notice: foo() has no return statement, so by default it returns undefined.

Then you log result, which holds that return value (undefined).

🖨️ Output:

Hello
undefined
🧠 Why?
console.log("Hello") runs inside the function → prints "Hello"

foo() doesn't return anything → returns undefined

console.log(result) prints that → undefined



✅ Code with return:
javascript
Copy
Edit
function foo() {
    return "Hello";
}

const result = foo();
console.log(result);


🔍 What happens:
foo() returns the string "Hello" (instead of logging it).

That return value is stored in the result variable.

Then console.log(result) prints that value.

🖨️ Output:

Hello
