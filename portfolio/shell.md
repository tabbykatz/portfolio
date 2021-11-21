---
title: "Ship$: A Simple Shell in C"
date: "2020-04-17"
og:
  description: "SHELLter in Place, or Ship$, is a simple command line interpreter written in C."
  image: "/shell.jpg"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_This program was built during the COVID-19 pandemic & "Shelter in Place" order in California, USA. My partner Zac and I wrote our shell using our own recreation of C standard library functions_

# Why would you re-write the standard library?

People ask me this a lot. This is how I learned C. From the beginning at [Holberton](https://www.holbertonschool.com/), we are given a single function: `_putchar()`. This function is used to print a single character to the screen. I learned the language by building everything from scratch, and you can see a lot of it in this shell. Here's my version of `strtok()`:

```C
#include "shell.h"
/**
 * _strtok - tokenizes the str
 * @buffer: the string
 * @delim: the dividing char
 * Return: char * to token or NULL
 */
char *_strtok(char *buffer, const char *delim)
{
	static char *sp;
	char *p;
	int letter = 0;
	int i = 0;
	int stop = 0;

	if (buffer)
		sp = buffer;
	p = sp;
	while (sp && *sp)
	{
		while (delim[i])
		{
			if (*sp == delim[i] && letter == 0)
			{
				++p;
				++sp;
				i = 0;
				continue;
			}
			if (*sp == delim[i] && letter == 1)
			{
				*sp++ = '\0';
				stop = 1;
				i = 0;
				break;
			}
			++i;
		}
		if (stop || !*sp)
			break;
		letter = 1;
		i = 0;
		++sp;
	}
	if (!p || *p == '\0')
		return (NULL);
	return (p);
}
```

# SHELLter in Place

Writing a shell is a software engineering rite of passage, and I expect I'll do
it again in the future, adding new features that seemed challenging to
build initially. I remember the days of using `bash` without thinking much of the innards. There
is always more to understand, and building it from scratch is a great way to
learn.

![](/shellimg.jpeg)

# I'm especially proud of:

- `_strtok()` and `_getline()`. These small bits of code took a long time to write.
- `do_nothing()`, because we were deep in the project/ deadline and had to make a decision. I'm still proud of this decision as I've grown as a developer. Sometimes working is better than perfect.

```C
/**
 * do_nothing - a dummy function
 * @nothing: a dummy integer
 */
void do_nothing(__attribute__((unused))int nothing)
{
	_putchar('\n');
	puts_prompt();
}
```

- my [first man page](https://github.com/tabbykatz/simple_shell/blob/master/man_1_simple_shell)
- The friendship built with Zac. We remain friends for life.

# Problems I encountered:

- Scope. Wow do we ever take `bash` or `zsh` for granted. While we had prepared for this project, I don't think Zac or I instantly knew where to start. Luckily, peers and mentors helped us out.
- Abusing [global variables](https://github.com/tabbykatz/simple_shell/blob/master/shell.h). I am not sure how else it could have been done.
- Memory Leaks! In the end the shell was leak-free, but this kept us busy for a while.

# Source Code:

- [GitHub Repo](https://github.com/tabbykatz/simple_shell)
