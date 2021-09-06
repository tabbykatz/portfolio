---
title: "Learning Log as I read Javascript.info"
date: "2021-08-28"
og:
  description: "This entry is meant to be a regularly updated collection of notes and impressions as I read through Javascript.info."
  image: "/bridge.jpg"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

# Javascript.info

I started reading through [this online (free) tutorial](https://javascript.info/) in the evening of 8/27/21. I love the text focus as for me, reading is the fastest way to get information into my brain. For some people it is video, but I can't stand the sound of speed-enhanced video and I read much faster than people speak.

I have read several Js books, so why am I doing this? Two reasons:

- Every book has new or differently presented information
- I glean more on review. Always.

## Things I've learned that I did not know before (or had forgotten) about Js

### 8/27 Basic Concepts:

Chapters read: [An Introduction](https://javascript.info/getting-started), [JavaScript Fundamentals](https://javascript.info/first-steps)

- Nested `switch` statements are a thing
- Why don't we talk more about `bigInt`?
- Unary operators convert to number like `Number(thing)`
- Operator precedence is behind `+=` assignment happening last
- Operators return a value 🤯
- `++prefix` returns the new value and `postfix++` returns the old value. This makes sense but I had not thought much about it wrt Js.

### 8/29 More basics

Chapters read: [Code quality](https://javascript.info/code-quality), [Objects: the basics](https://javascript.info/object-basics)

- `!!` converts a value to Boolean
- `??` the nullish coalescing operator 🥰 returns first non-null non-undefined value as in:
  `this.username = username ?? "guest"; // ?? > ||`
- labels for `break` or `continue` seriously why have these not been mentioned in any of the books I have read
- property value shorthand. I feel like I may have known this but I forgot until now:

```js
function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
    // ...
  };
}
```

- `in` for property existence test as in:
  `if ("key" in object) // => true, false`
- Q: Are object keys ordered? A: Integer-ish property keys are sorted, others appear in creation order.
- `Object.assign === {...obj}`
- JavaScript garbage collection aka 'mark and sweep'
- Optional chaining. Where have you been all my life?

```js
user?.address?.street; // to return undefined instead of error
user.method?.(); // won't call the method if not exists
delete user?.name; // delete user.name if user exists
```

- writing our own object conversion rules like `__repr__` as in:

```js
obj[Symbol.toPrimitive] = function(hint)
// or
obj.toString()
obj.valueOf()
```

- We use 'methods' for strings, numbers, etc but these are not objects. A wrapper object is created, used and destroyed when we call the method. Here's the part I didn't know- this is exactly what we are doing when we convert type as in `Number("1")`.
- `let billion = 1e9; // 1 billion, literally: 1 and 9 zeroes` Wow, that's a time-saver. Also, `0.000001 === 1e-6`
- Use two dots to call a method directly on a numeric value as in:
  `(123456).toString(36);`

### 9/06

Chapters read: [Data types](https://javascript.info/data-types), [Advanced Working with functions](https://javascript.info/advanced-functions)

- Maps exist in js and let me tell you, they're pretty great.
- make a map from any obj like `let map = new Map(Object.entries(obj))`
- change your mind? `Object.fromEntries(map)`
- why would you ever use thi--- oh, wait:

```js
Object.fromEntries(Object.entries(obj).map(entry=> [entry[0]/*key*/, entry[1] * 2 /*double the val*/
```

- what if I told you:

```js
let [name, , , favoriteLanguage] = ["Tabitha", "C", "Python", "Javascript"];
console.log(
  `My name is ${name} and my new favorite language is ${favoriteLanguage}.`
);
// My name is Tabitha and my new favorite language is Javascript.
```

- the classic swap: `[guest, admin] = [admin, guest]`
- kinda miffed I was taught (recently, in fact) to use the `arguments` object to write a function that takes variable args, when I could have been using `func(...args)` It makes a real difference: `...args` is an array!

```js
function regFunc(...args) {
  console.log(arguments);
  return args;
}

console.log(regFunc(1, 2, 3));

//{0: 1, 1: 2, 2: 3}
//(3) [1, 2, 3]

const arrowFunc = (...args) => {
  return args;
};

console.log(arrowFunc(1, 2, 3));
// (3) [1, 2, 3]
// 0: 1
// 1: 2
// 2: 3
```

### More chapters to come
