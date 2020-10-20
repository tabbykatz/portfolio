---
title: "Dynamic & Static Libraries in C"
date: "2020-05-04"
og:
  description: "I’ll walk you through the making and linking of a library for Holberton."
  image: "/libraries1.png"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_I’ll walk you through the making and linking of a library for Holberton._

During my first trimester at Holberton I was asked to write about my understanding of Static C libraries. It was very new then, and only slightly less so now, but today I will attempt to demystify Dynamic Libraries as I understand them.


When you are new to programming, you might start with the old standby, “Hello World!”. If you’ve written it in C, you will likely have called printf to do the work for you. When you compile and run the code to see those words on your screen, you’ve used a library. You can know this because the actual code for printf wasn’t included in your function. How did the program run?

```C
#include <stdio.h>

int main(void)
{
	printf("Hello, World!\n");
	return (0);
}
```

You included a header (which references a library) at the beginning of your function when you typed `#include <stdio.h>`. The header tells the compiler where to find the source code for functions you have called, so that it can be linked dynamically or statically.


Remember, there are four steps to compilation:

- Preprocessing
- Compilation
- Assembly
- Linking

It is in the linking stage that the compiler finds and includes the source code (in the case of static linking) or the address where the code can be found (in the case of dynamic linking) from your libraries. The user can control how compilation works to some degree, though compilers such as gcc also have default options.

# What is the difference between Static and Dynamic Linking?

As I discussed in my previous article, the differences here can be compared to buying a Thomas Guide (remember those?) versus using Google Maps.


When you link statically, your executable program– however large– actually contains the object code of the functions you called from various libraries. This has drawbacks. First, the code takes up space, which can really add up if you’re calling hundreds of functions. But perhaps more importantly in the quickly-changing world of software is keeping your program up-to-date. The code contained in a statically-linked executable cannot receive updates from the libraries unless it is re-compiled. It’s not all bad, though: Static linking results in a faster runtime because everything is available in the executable.


Dynamic linking is the solution. This form of linking doesn’t place the object code in your executable. Instead, it includes memory addresses for the functions called. Not only does this take up less space, but it allows the program to access the functions, updates and all. Less space, more dynamic. If there is a drawback, it is the time it takes– and it can add up– to access the addresses.

# How are Dynamic Libraries Created and Used?

I’ll walk you through the making and linking of a library for Holberton. This example is in a Linux environment. Below we have a directory with a selection of C function files, a header, and a main function.

# Create the object code

`gcc -fPIC -c *.c` creates the object files for your library.

![Creating the Object Files](/libraries1.png)

Now you’ll see each function has it’s own corresponding .o file. We know `gcc` is the compiler, what’s `-fPIC`? This flag stands for Position Independent Code, a characteristic required by shared libraries to tell the operating system to use a Global Offset Table to find functions by address. `*.c` chooses every file that ends in .c.


`gcc -shared -Wl,-soname,libdynamic_example.so -o lib_dynamicexample.so *.o`


That’s a lot to unravel. `-shared` tells the compiler to produce a shared object which can then be linked with other objects to form an executable. `-Wl` flag passes options to the linker, in our case setting the name of library. `*.o` chooses every file that ends in .o. You should name your library beginning with “lib” and ending in “.so”

# How are Shared Libraries used?

Our library has to be shared dynamically during linking with our program, and to make it accessible, we have add a path to the library to the `LD_LIBRARY_PATH` environment variable. This is done like so:


`export LD_LIBRARY_PATH=.:$LD_LIBRARY_PATH`


Now we are ready to compile our program and run it. Depending on your files, that will look something like this:


`gcc our_sources.c -L. -ldynamic_example -o our_program_name`


If this reminds you of any basic compile command, that’s because it’s not much different. The `-L` provides a path to our library, the current directory. The `-l` flag specifies the name of our library, and it doesn’t need the ‘lib’ or ‘.so’.


We can check to be sure this worked like so:


```bash
nm -D --defined-only libdynamic_example.so
0000000000000a90 T _abs
0000000000000aa9 T _atoi
0000000000202048 B __bss_start
0000000000202048 D _edata
0000000000202050 B _end
00000000000011f8 T _fini
0000000000000900 T _init
0000000000000bd7 T _isalpha
0000000000000c04 T _isdigit
0000000000000c25 T _islower
0000000000000c46 T _isupper
0000000000000c67 T _memcpy
0000000000000caa T _memset
0000000000000ce9 T _putchar
0000000000000d0e T _puts
0000000000000d4a T _strcat
0000000000000dcf T _strchr
0000000000000e21 T _strcmp
0000000000000e89 T _strcpy
0000000000000eeb T _strlen
0000000000000f15 T _strncat
0000000000000fa5 T _strncpy
0000000000001029 T _strpbrk
000000000000109d T _strspn
0000000000001176 T _strstr
```

The `nm` command, above, lists all the functions in a symbol table along with address, type, and name. We can also use `ldd` on the finished executable to list shared libraries:

![the ldd command in action](/libraries2.png)


