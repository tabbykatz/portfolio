---
title: "`gcc main.c` On the Command Line"
date: "2020-02-05"
og:
  description: "Approaching C in the terminal"
  image: "/gnu.png"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_GCC is a C and C++ compiler offered by the GNU project._

I’m a Foundations Holberton student. Extremely new to the program, (and programming) one of the few things I have learned with absolute certainty is that the curriculum never stops pushing us. My cohort is a couple of weeks young, and we have moved from git to bash and now to C in that short time. Today I am asked to understand `gcc main.c` when yesterday I had never seen those letters typed together. It’s a challenge, and one that I hope I am equal to. These articles serve as a place holder for the future me. They are to be edited as I gain in understanding– and I hope I do.


I’ll assume you know some basic commands in the terminal. Like other commands, gcc has a man page that can be read by entering `man gcc`. Here we learn that gcc is a GNU project C and C++ compiler.

# What is GNU?

![GNU logo](/gnu.png)

The GNU Wikipedia entry is a good place to start. GNU is an operating system and a collection of computer software, all free. It was conceived by Richard Stallman in the mid-1980’s with the goal of bringing a wholly free software operating system into existence. We have GNU to thank for much of the software we use as Holberton students. GCC is a C and C++ compiler offered by the GNU project.

# What is C?

While a full explanation of the C Programming Language is far beyond the scope of this entry (as well as my own understanding), understand that C is a compiled language. You don’t write a function in C and expect your computer to understand it- it must be translated into a language your computer can understand. We write our C in vim, but to use it we need a compiler. Enter gcc.

# Back to the Command Line

The `gcc` command runs four steps in a predetermined order. These are preprocessing, compilation proper, assembly, and linking. The output is stored in a file of varying type depending on the options you use with the command. So what about the `main.c` portion of our command? That’s just the file we’re compiling.

# Using commands you don’t fully understand

I would feel disingenuous if I claimed to understand the process of compilation as well as the many experts easily available to you on the internet. Sometimes you will need to know exactly what your commands are doing, instead of relying on what you expect them to do. In this situation I’d advise you as I have been taught at Holberton: google it. Don’t have your answer? Google it, again. Around these steps, take the time to read your error messages and ask, “Why?”. We’re blessed with a wealth of information, but not all of it is written by inspired experts. Some of it is, and when you find it, you’ll know. (probably not this blog.)
