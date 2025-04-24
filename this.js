Topic: this Keyword

const user = {
  name: "Payal",
  sayName() {
    console.log(this.name);
  },
};

const say = user.sayName;
say();

Explanation: When say() is called without an object, this refers to window (in browsers) or undefined (in strict mode).


✅ Code Example with and without an object

const user = {
  name: "Payal",
  sayName() {
    console.log(this.name);
  },
};

const say = user.sayName; // function is assigned but 'this' is lost here

say();           // ❌ this => undefined (or window.name if not in strict mode)
user.sayName();  // ✅ this => user object
