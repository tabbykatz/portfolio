---
title: "Creating & Using Static Libraries in C"
date: "2020-03-01"
og:
  description: "Greetings from the trenches of a software engineering school."
  image: "/static.png"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_One of my first technical entries for Holberton. Aw!_

Greetings from the trenches of a software engineering school. We stay pretty busy- and thus outwardly quiet- at Holberton, but occasionally we’re asked to share a concept we’re covering with the outside world. This is such an occasion and today I will share what I’m learning about creating and using static libraries in C.

# What is a Static Library?

According to the Wikipedia entry for static library, “In computer science, a static library or statically-linked library is a set of routines, external functions and variables which are resolved in a caller at compile-time and copied into a target application by a compiler, linker, or binder, producing an object file and a stand-alone executable.”


In C, we can create and use a static library so that our program actually contains all the object code of the functions it needs to run. This has advantages and drawbacks. It can be advantageous in terms of speed, because the program need not look beyond itself to find the information it needs. But the program is also much larger than it would be otherwise exactly because it contains that information, and that’s a drawback. Another drawback is that the functions we’ve put in the program’s static library are static in the sense that they are unchanging. If we update or want to make a change, we must recompile the program with the update.


There would be no sense in defining what a static library is if there were not an alternative, and in this case the alternative is the dynamic library.

# What is a Dynamic Library?

[Techopedia](https://www.techopedia.com/definition/27133/dynamic-library) has a concise answer for us. To paraphrase, a dynamic library is one which is stored in memory and referenced by address in the compiled program. The contents of the dynamic library are used as needed at runtime, not contained in the program itself. This is advantageous due to reduced program size and overall memory consumption. When changes are made to functions used by the program, there is no need to recompile. The addresses remain the same and the program can still access the changed functionality. Plus, multiple programs can use the same dynamic library, further reducing over all memory consumption.

# Let’s Create a Static Library!

![creating a static library](/static1.png)

Here I am in a test directory where I have put some .c files and a corresponding header file.


First, let’s compile all the .c files here without linking them. I’ll use `gcc` with the `-c` flag so the object files are made.

![creating a static library](/static2.png)

Next, we must archive all the object (.o) files into our static library file (.a). Let’s call our new static library “staticlib.a” and archive (ar command) it with the -r and -c flags to make sure that if the (.a) file already exists, it will be replaced and if the file doesn’t exist, it will be created, respectively.

![creating a static library](/static3.png)         

There it is, my new static library! It contains all the object code of my .c files. Remember, if I use this library somewhere and later need to make changes to the functions in the .c files it was created from, I’ll have to start over.

# A note on ranlib

>The “ranlib command in Linux is used to generate index to archive. ranlib generates an index to the contents of an archive and it will be stored in the archive. The index lists each symbol defined by a member of an archive which is simply relocatable object file. You may use nm -s or nm –print-armap to list all of this index. An archive with such an index speeds up the linking to the library and allows routines in the library to call each other without regard to their placement in the archive. The GNU ranlib program is another form of GNU ar; running ranlib is completely equivalent to running ar -s. -[geeksforgeeks](https://www.geeksforgeeks.org/ranlib-command-in-linux-with-examples/)


I didn’t need to use `ranlib` in my example, but it is good to know what it does and when you might need it.

# Wait… how do I use it?

Let’s say my sample test directory also contained a main function that is my program that I want to compile and run. I’ll navigate somewhere else to show a visual example.

 ![creating a static library](/static4.png) 

Here I have a directory full of .c files, .o files, a main.c file, my header, and two static libraries among other things. When I compile my main.c program with the static library I created for it, I no longer have to keep every function my compiled main needs alongside it. All the object code in my library is linked into it.


Below, I use the -L. and -l flags with gcc. `gcc -l` links with a library file. Using `gcc -L` looks in directory for library files. Because we stopped before linking initially we need to link with the new library.

![creating a static library](/static5.png)   

# But Why Libraries?

As I touched on above, libraries lend functionality (in the literal sense, as it’s facilitating functions) to your program. A program may contain hundreds of function calls without having to contain the code of every function called. If you’ve written code in C, you’ve probably used the standard library. This library is how your program knows what you mean when you call `printf()`.
