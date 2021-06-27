---
title: "Rot 13 in Javascript"
date: "2021-06-26"
og:
  description: "A little fun in a pairing session"
  image: "#"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_A quick blog entry about a solution to a classic problem: Rot13_

I have most of the work in for freeCodeCamp's JavaScript Algorithms and Data Structures certification, and the completionist in me cannot let it go unfinished, so I am working on the 'finals' for it in my spare time. One of them is Rot13, a classic! Once you've done Rot13 it's fairly straightforward, but I didn't want to just hard-code a hash table into my function. That's cheating (it isn't, but it does seem contrary to the spirit of these tasks).

I had an opportunity to work on this one in a pair and I am pleased with our results, even if the hash table would have been faster. The finished function is versatile and has only a few constants (could be env vars if we're taking our cipher seriously!) that can be set up however you like for any rotation in Unicode. Here is [the original problem.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher).

> One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount. A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on. Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

`console.log(rot13("SERR PBQR PNZC"));` should produce `FREE CODE CAMP`



```js
const rot = 13;
const upperLimit = 90;
const lowerLimit = 65;

function rot13(str) {

  return str.split('').map((char, idx) => {
    let currentCode = char.charCodeAt(0);
    if (currentCode > upperLimit || currentCode < lowerLimit) {
      return char;
    }
    let newCode = currentCode + rot;
    if (newCode > upperLimit) {
      let difference = upperLimit - currentCode;
      let remainder = rot - difference;
      newCode = lowerLimit + remainder - 1;
    }
    return String.fromCharCode(newCode);
  }).join('');

  return str;
}

```

My first language was C, so when I hear Rot13 I immediately think of the ASCII table. I was pleased to learn and expore a similar way of dealing with Rot13 in Javascript with Unicode, all without hard coding a hash table. If these methods are unfamiar to you (as they were to me) have a read of [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). Fascinating stuff, and right up my alley as a lover of semi-useless / odd things.
