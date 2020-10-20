---
title: "What is Two’s Compliment?"
date: "2020-03-26"
og:
  description: "With only one exception, two’s compliment works."
  image: "/twos.png"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_With only one exception, two’s compliment works._

![Two's Complement](/twos.png)


# What is it?

Two’s complement is a method used to store negative numbers in binary. It has become accepted as the ‘best’ way to deal with negative integers in binary.


To get the two’s complement negative notation of an integer, you write out the number in binary, invert the digits, and add one to the result.


`0010 (positive 2) becomes 1101, +1 = 1110 (negative 2)`


To reverse it you do the same thing.


`1110 (negative 2) becomes 0001, +1 = 0010 (positive two)`


The first digit of these binary numbers is important. When using the two’s complement, the leftmost digit is a sign digit for positive or negative. If a number starts with a 1, it is negative. If it starts with 0, it is positive. Despite the sign digit having special meaning to us while reading it, it is still included as a digit in arithmetic done on the binary number.


Let’s see if our math adds up. If we add +2 to -2 we should get 0 (zero).

![just a quick note to show how we carry in binary and lose the 1 at the leftmost digit.](/twosdraw.jpg)


My example above assumed a 3 bit word length but this works for any length. Below, I’ve embedded a video with an accessible introduction to two’s compliment:

[![Two's Compliment](http://img.youtube.com/vi/ZLA0Ahymiv8/0.jpg)](http://www.youtube.com/watch?v=ZLA0Ahymiv8 "Two's Compliment")

# What is “Ones’ complement”?

Ones’ compliment is the very first part of the process when we convert using two’s complement, an inversion of binary digits. The problem with ones’ compliment is that it has two representations of 0 — 00000000 (positive zero +0) and 11111111 (negative zero -0). This is wasteful and causes problems in arithmetic.

# Why do we use these?

The most valued property of two’s complement is that arithmetic operations can be unified, when otherwise they would have to be treated as separate operations. We also avoid “negative zero”.

>Compared to other systems for representing signed numbers (e.g., ones’
		>complement), two’s complement has the advantage that the fundamental
>arithmetic operations of addition, subtraction, and multiplication are
>identical to those for unsigned binary numbers (as long as the inputs are
		>represented in the same number of bits — as the output, and any
		>overflow beyond those bits is discarded from the result). This
>property makes the system simpler to implement, especially for
>higher-precision arithmetic. Unlike ones’ complement systems, two’s complement
>has no representation for negative zero, and thus does not suffer from its
>associated difficulties. -[Wikipedia](https://en.wikipedia.org/wiki/Two's_complement)

# The Weird Number

With only one exception, two’s compliment works. The most negative number in two’s complement is sometimes called “the weird number,” because it is the only exception. I feel you, most negative number. ❤

