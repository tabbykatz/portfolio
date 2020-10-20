---
title: "ls -l in the shell"
date: "2020-04-14"
og:
  description: "Step-by-step behind the curtain."
  image: "/curtain.jpg"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_Step-by-step behind the curtain._


![behind the curtain](/curtain.jpg)


Let’s assume you are familiar with the terminal and bash (Bourne Again Shell), the shell I am going to use for my examples in this post. As you likely know, one of the most frequently used bash commands is `ls`.


`ls` is a commonly invoked command that takes both options and arguments if you want them. `-l` is one such option, and it results in your output being shown in “long format”.


To understand what happens when you type `ls -l` and hit enter, let’s first talk about what a shell such as bash is and what it does for us.


The kernel is the core of your computer’s operating system. It’s a program that controls all the other programs and sends information to the hardware and software of your machine. The shell is an application that can help you interact with the kernel. A general user is likely more familiar with the GUI, or graphical user interface, with icons and folders. But the shell is a program the lets a user communicate with the kernel by entering commands into the command line. A shell is known as a command line interpreter for this reason.


And so when you enter `ls -l` in your terminal, you are asking the shell to communicate with the kernel and display all the files and directories in the current working directory, including their permissions, owners, and creation date and time (the stuff of long format).


But what does the shell do with the line you typed?


You start up your terminal and see a familiar sight: the command prompt. This is the first visible action of the shell. The command prompt is stored in the PS1 environment variable, one of the environment variables available by default in your shell. Conventionally, the bash prompt ends with $, but yours may vary. (Want to design a custom prompt? Check out [this Bash $PS1 Generator](https://www.kirsle.net/wizards/ps1.html).)


Go ahead, type `ls -l` and hit enter.


# Here’s what happens

- Stores input as a string: The function getline() reads your standard input and stores it into a buffer as a string. The newline character is overwritten with a null byte to show the next function where to stop reading.
- Creates tokens from the input: The function `strtok()` separates the individual words (tokens), which the shell sees as anything divided by a space (delimiter).
- Aliases?: Commands are checked for an alias. If one exists, the shell will replace the alias with the full command.(ls offers us an example of this: Type `type ls` into your terminal and you’ll see the output `ls is aliased to 'ls — color=auto’`. This means that your ls output will be colorized for easier reading.) Read more about aliases [here](https://shapeshed.com/unix-alias/).
- Looking for built-ins: The tokens are stored in an `argv` array, where the command is the first string in the array. If `argv[0]` is a command within the shell (a command built-in to the shell itself, as opposed to an executable external to it), the shell will run the built-in.
- Commands on the PATH: If `argv[0]` is not a built-in, the shell will look for it on the PATH. The PATH, which contains a colon-separated list of directories, is another environmental variable. Your shell searches for an executable file with name that is the value of `argv[0]` in each of the directories in that list. The ls executable file lives at `/usr/bin/ls`.
- Create a child process for the command: The shell creates a child process with the system call `fork()`. Fork creates a new child process, almost identical to the parent calling it. Once fork successfully returns, two processes continue to run the same program, but with different stacks, data and heaps. The wait system call suspends execution of the calling process until the child process terminates.
- Run command using its absolute path: The absolute path of ls is `/bin/ls`. If the command is an executable, as ls is, it is executed with the system call `execve()` in the child process. `execve()` allows a process to execute another program. All the options and arguments are passed to the command so that you get the results you asked for from the shell.
- The results of your command are written to STDOUT, which by default is the terminal screen.
- Command prompt appears: We’re back where we started, a shiny new command prompt waiting for our next command.

# What about errors?

What happens if you type nonsense into the command line and hit enter? If the shell can’t find your command, you’ll get an error message.

```bash
$ nonsense
nonsense: command not found
$
```

# What are system calls?

System calls, or syscalls, speak directly to the kernel.

>In computing, a system call is the programmatic way in which a computer program requests a service from the kernel of the operating system it is executed on. A system call is a way for programs to interact with the operating system. A computer program makes a system call when it makes a request to the operating system’s kernel. System call provides the services of the operating system to the user programs via Application Program Interface(API). It provides an interface between a process and operating system to allow user-level processes to request services of the operating system. System calls are the only entry points into the kernel system. All programs needing resources must use system calls. -[Introduction of System Call](https://www.geeksforgeeks.org/introduction-of-system-call/)


We saw the system calls fork, execve, and wait above, but there are always system calls behind the scenes.

# What differentiates processes?

Every process is an instance of an executing program, and each has a unique process ID.(PID) The process ID is used by many functions and system calls. You can enter `echo $$` to see the PID of the current process — your shell. The command `echo $PPID` will show you the parent process ID. An apt example of the use of PIDs is with fork, as seen in it’s return value when we enter `man fork`:

`On success, the PID of the child process is returned in the parent, and 0 is returned in the child. On failure, -1 is returned in the parent, no child process is created, and errno is set appropriately. — FORK(2)`

# How long does a shell session last?

Your shell session will continue until something interrupts the process. You might quit the terminal, or simply type exit.The main loop of the shell is infinite until a return is made by another function, such as an exit function.


To the user, it looks very simple indeed, but so much is going on in the background every time you interact in the shell. Interested in learning more? I know it sounds rash, but I recommend you build your own shell. 


[Build A Simple Shell](https://brennan.io/2015/01/16/write-a-shell-in-c/)


[My Simple Shell](http://localhost:3000/portfolio/shell)
