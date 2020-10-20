---
title: "Everything's an Object"
date: "2020-05-26"
og:
  description: "Learning Python? Get used to hearing this a lot."
  image: "/importthis.jpg"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_Learning Python? Get used to hearing this a lot._


> In the beginning, there were two objects. The legends tell us that from these two were born all other objects in creation. They were blessed objects for they inherited from another, and all other objects inherit from them. — Pythonic Verses


Okay, there’s no such text as the Pythonic Verses. But to hear it told, the creation and use of Python is like something out of a great epic. Things are they way they are for reasons, and they are beautiful.

Relatively new to Python myself, every day involves some discovery for me, and it really is brilliant. I’ll share today’s haul in this entry.


# Id
Give this a try in your Python interpreter (enter `python3` into your terminal):
```python
>>> a = 42
>>> b = 42
>>> a == b
True
>>> a is b
True
>>> id(a)
some number
>>> id(b)
same number
>>> a = [1, 2, 3]
>>> b = [1, 2, 3]
>>> a == b
True
>>> a is b
False
>>> id(a)
some number
>>> id(b)
different number
>>>
```

Let’s look at the first example, 42. True, True. Same id. What is the function `id()` doing for us?


The `id()` function returns the “identity” of an object as an integer guaranteed to be unique and constant for the object (during its lifetime–two objects with non-overlapping lifetimes can have the same ID).


Every unique object in Python has its own ID. It’s not related to the contents — it’s related to the location where the information that describes the object is stored. Any unique object stored in a unique place will have its own ID. You might be tempted to think ID corresponds to the address of the object’s location in memory, but it depends upon both the Python implementation and platform.


Why do a & b in the first example have the same ID? Because they are ints, they are of the same value, and they are immutable. If you change the value a is bound to, it will receive a new ID and essentially become a new object.


In the second example, I use a mutable type of object, a list. These can and are expected to change over their lifetimes. So while the contents of a & b are the same (a == b, True), they don’t have the same ID.


I’ll circle back to mutable & immutable objects soon.
# Type
We can’t talk about objects (everything in Python, remember) without mentioning `type()`. This function returns the type of the object it is passed.

```python
>>> a = 42
>>> type(a)
<class 'int'>
>>>b = [1, 2, 3]
>>> type(b)
<class 'list'>
>>> c = {1:2, 3:4}
>>> type(c)
<class 'dict'>
>>>
```

`type()` can be helpful for weeding out bad arguments passed to your functions, though I am personally fond of `isinstance()` at least as of this writing. For this article, the most important thing about object types is that they are either mutable or immutable.
# Mutable objects
Objects of built-in types like (list, set, dict) are mutable.

Mutable objects — objects that can be changed, like lists– will start out with different IDs even if identical in expectation of change. If an object is mutable, then you can create two different objects (with unique IDs) with the same contents. If you change one later, the second will not change.
# Immutable objects
Objects of built-in types like (int, float, bool, str, tuple, unicode) are immutable. So while a & b in the example below start off with the same ID, when we change one, even though we’ve pointed b at a, they have unique IDs afterwards. The change to a creates a new object because the contents of a cannot be changed without doing so.

```python
>>> a = "zen of"
>>> type(a)
<class 'str'>
>>> id(a)
some number
>>> a + " python"
>>> type(a)
<class 'str'>
>>> id(a)
different number
>>> a
'zen of python'
>>>
```

The contents of immutable objects like ints and strings can never change. Also, even if two immutable objects have different IDs, they are essentially equal if they have identical contents, as we see if we compare two identical string instances i.e. a == b.


# What’s the difference?

>Mutable types can be changed in place. Immutable types can not change in place. That’s the way Python sees the world. — someone, stackoverflow


See what I mean about the “epic” quality of all Python knowledge dissemination?


If both mutable and immutable object types can more or less be changed, what is the difference?

- It could matter in how you retrieve changes when you pass these types to functions.
- It’s important to know what you’re doing with data when you act upon it with common functions or operations like list.copy() or +=.
- Immutable objects are “expensive” to change in the sense that doing so involves creates a new object. This is not so with mutable objects.
- Coming from C, it’s helpful for me to “shake off” my C-isms when writing in Python. (Everything is different! “variables” are names and “assignment” is binding a name to an object. It goes on and on.)


# What does this mean for our function(args)?
This may all seem academic, but it will matter to you when you write in Python.

When a mutable object is called by reference\* in a function, it can change variable itself. If you don’t want this to happen, the mutable variable needs to be copied first. Immutable objects won’t suffer in this way, as we learned above. In either case you wouldn’t want to assume the objects have the same ID, you’d want to know.

>    \*Python utilizes a system, which is known as “Call by Object Reference” or “Call by assignment”. In the event that you pass arguments like whole numbers, strings or tuples to a function, the passing is like call-by-value because you can not change the value of the immutable objects being passed to the function. Whereas passing mutable objects can be considered as call by reference because when their values are changed inside the function, then it will also be reflected outside the function. — geeksforgeeks

# Bonus haul: Extra Credit

In Holberton projects, we’re often given the opportunity to go beyond the daily material and scoop up some extra credit in the process. Today was no exception. Today I got:

- A look inside the CPython implementation of Python3
- A first look at locking down the` __slots__` in a class
- A chance to meddle with `getattr()` and `setattr()` in my functions for cool effect.


If I delve deeper into any of these, I might write about it here.
# The Zen of Python
I’ll leave you with another thing you need to get used to if you’re new to Python: `import this`. Thanks for reading!

![](/importthis.png)
