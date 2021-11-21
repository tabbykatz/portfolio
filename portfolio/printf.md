---
title: "printf"
date: "2020-03-18"
og:
  description: "A printf function for Holberton School."
  image: "/print.jpg"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_This was my first pair project and it began just as COVID made the headlines
in the US. Building my own `printf()` was a challenge at the time, but looking back
it seems simple enough. Isn't that the way it goes?_

![a screenshot of the README for this project](/print.jpg)

# The Beast

`printf()` is a C standard library function that [Holberton](https://www.holbertonschool.com/) Students are rarely
allowed to use. Eventually we each write our own, and this project is the
result. We were charged to deal with several format specifiers, with many more
on the table as optional advanced tasks. In the end, we fared well, and even
had time to get silly (See `%F`, below).

```C
#include "holberton.h"
/**
  * print_F - prints F*CK
  * @args: the arguments, but they don't matter
  *
  * Return: characters printed
  *
  */
int print_F(__attribute__ ((unused))va_list args)
{
	char *F = "FUCK";
	int retVal = 0;
	int i;

	for (i = 0; i < 4; i++)
	{
		retVal = _putchar(F[i]);
	if (retVal == -1)
		return (retVal);
	}
	return (4);
}
```

# I'm especially proud of:

- Our various integer specifiers, converting input from decimal to binary, upper and lower hex, and octal.
- Our `%F` specifier, which is a custom function we wrote to express the compound feeling of this massive project and the beginning of a pandemic.

# Problems I encountered:

- Lockdown. We were used to working together in the office, and we had to adjust our workstyle to accommodate the new situation.
- Keeping track of the characters printed seems simple enough, right? Wrong. Next time you pass a string to any print function in any language, think about how you would keep track of the actual characters printed as you transition between various formatting or interpolation specifiers.

# Source Code:

- [GitHub Repo](https://github.com/tabbykatz/printf)
