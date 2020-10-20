---
title: "Installing SDL 2.0 on your Ubuntu Virtual Machine"
date: "2020-05-06"
og:
  description: "Sometimes, it isn’t as easy as get-apt install."
  image: "/nukeit.jpg"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_Sometimes, it isn’t as easy as get-apt install._


I’m a Holberton student. We work on identical virtual machines to level the environmental factors when it comes to our tasks. For many of us, setting up our machines with Vagrant was our first experience with virtual machines. During the course of our first trimester we became familiar with the most basic commands and programs to write and execute our tasks.


Sometimes, though, it isn’t as easy as `get-apt install`. We have been given an optional project called Raise the Terrain that is to be completed with SDL. The internet is flooded with options and tutorials for installation of SDL, but it took me forever to sift through the options and find a suitable installation method for my VM. Today I am going to walk you through installing SDL 2.0 on a Ubuntu virtual machine.


# What is SDL 2.0?

SDL is an acronym for Simple Directmedia Layer. This build is a cross-platform library designed to give low-level access to audio, keyword, mouse, graphics with a simple to use C API. Holberton students begin with a foundation in C. Let’s put that to use for something visual & challenging!

# Vagrant Up

We access our school machines with two commands: `vagrant up && vagrant ssh`. Once you’re up, if you don’t have mercurial, you need it. You can check by entering `hg — version`. If hg is not found, install Mercurial like this:

```bash
sudo apt-get install mercurial
```

Follow the prompts. Enter your password, and respond with Y if asked. Once you have Mercurial, typing `hg — version` should result in something like this:

![mercurial version](/mercurial.png)
_Not really feeling confident about that warranty message_


Now you’re ready to install & build SDL 2.0.

# SDL Installation

Enter the following commands, one line at a time, and follow prompts if they appear:

```bash
hg clone https://hg.libsdl.org/SDL SDL
cd SDL
mkdir build
cd build
../configure
make
sudo make install
```

You’ve done it–Let’s Raise the Terrain.

