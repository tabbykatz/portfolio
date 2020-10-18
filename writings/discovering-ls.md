---
title: "Discovering ls *.c"
date: "2020-02-03"
og:
  description: "A technical blog entry for Holberton."
  image: "https://tabbykatzdotcom.files.wordpress.com/2020/09/b1acc816-c6a9-4330-b196-63cbb725ff3a.jpg"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_An early writing assignment for Holberton, when I was first learning the shell. Adorable!_

<br>

I am a new Holberton student. My cohort consists of 20 fresh-faced software engineering hopefuls, each at different stages in our understanding of the ins and outs of programming. We are learning in leaps as peers in an environment where we are encouraged to come together and solidify what we are grasping as a group. In such a peer-learning school, we are emboldened to share what we know even when our understanding is young.

As Holberton students, we learn large amounts of content in a short amount of time, often relying on man pages and tech forums for information to help us understand the use of commands, options, and arguments in the Shell. Anyone trying to master shell commands from the ground up is familiar with the article that is *almost* what you’re looking for, as well as the <a href="https://stackoverflow.com" target=_blank>Stack Overflow</a> response that answers your query but doesn’t explain *why*.

---

## ls *.c

This brings me to the substance of today’s blog post. We want to list the files and directories in our working directory that end with .c, so we use the ls command. The command ls lists all the files and directories in the current directory, except for those hidden with a leading period. We have to tell ls what we’re looking for, though, so we use a wildcard (asterisk) along with .c to narrow down our list. The wildcard asterisk is a powerful tool in the Shell, indicating *any zero or more characters*. And so our command, ls *.c, tells the shell we want a list of all files and directories in the current working directory that have any or zero characters before ending in .c. The location of the wildcard is important, because we specifically want the list returned to _end in .c,_ not contain it or begin with it.

The shell rewards us with the list we hoped for, and we are content. But what really happens when we hit Enter on that command?

## More than just a Command

William Shotts of http://linuxcommand.org tells us the shell is a program that takes commands from the keyboard and gives them to the operating system to perform. We know that ls is such a command, but what is it doing? First, we should know that ls is actually aliased. The alias provides the colorful output we see in our list. If you ask the shell *type ls*, it will tell you this. The shell responds, *ls is aliased to 'ls--color=auto*. This is why we see the list in easy-to-read color. The first thing ls does when we enter is is look for aliases and expansions, including the * we have before .c. Before anything is returned, the shell knows the list will be in color and that we are looking for files and directories ending in .c.

---

## Digging Deeper

We could get into the moment-by-moment action of the command, but I want to stick to what I am comfortable teaching at this point, reserving the right to add more later if I am confident in my understanding. The shell ‘hears’ the command and looks for the executable file related to it- in this case, ls. The file tells the shell what to do, an act is actually carried out in a separate environment made just for this process, accounting for the aliases and wildcards applied to it, and returns the list asked for in the standard output, which is the terminal. This reply is the list you read to find the files or directories you were looking for.

---

## Keep it Stupid Simple

The fact is, the shell is designed to keep us from having to know or understand the many complex processes our commands run. It can be useful to understand them, though, if you want specific output and need to know how to get it. Commands have both limitations and special functionality, both of which are more easily understood if you first get how commands work.

---

## A Benchmark

I hope this post serves as a benchmark for my progress as a shell programmer, so that when I grow in my own understanding of the shell I can add to and elaborate upon ls *.c.

