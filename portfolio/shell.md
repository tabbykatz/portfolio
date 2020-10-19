---
title: "Ship$"
date: "2020-04-17"
og:
  description: "SHELLter in Place, or Ship$, is a simple command line interpreter written in C."
  image: "/shell.jpg"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_This program was built during the COVID-19 pandemic & "Shelter in Place" order in California, USA. My parter Zac and I wrote our shell using a strtok function of our own design._

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


<p> <a href="https://github.com/zacwoll/simple_shell" target="_blank">Check it out on Github</a></p>



