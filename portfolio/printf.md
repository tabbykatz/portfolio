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
in the US. Building my own printf was a challenge at the time, but looking back
it seems simple enough. Isn't that the way it goes?_

![](/print.jpg) 

# The Beast

`printf` is a C standard library function that Holberton Students are rarely
allowed to use. Eventually, we each write our own, and this project is the
result. We were charged to deal with several format specifiers, with many more
on the table as optional advanced tasks. In the end, we fared well, and even
had time to get silly (See `%F`).

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

<p> <a href="https://github.com/tabbykatz/printf" target="_blank">Check it out on Github</a> </p>

