---
title: "Vagrant Destroy"
date: "2020-06-03"
og:
  description: "Have you broken (yet another) VM?"
  image: "/nukeit.jpg"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_Have you broken (yet another) VM?_

I use VMs for everything. It becomes painfully obvious when I have to open Vim on my own machine: no .vimrc, no lovely italic syntax highlighting. The cobbler’s children have no shoes. I need to fix that someday. But there’s no rush, because I spend all my time on one VM or the other, where I can clone my dotfiles repo and quickly customize Vim and bash. I can play with new environments, tools, and toys! I can try out nifty decompilers and bruteforce tools for tantalizing crackme problems with no consequences. If something goes wrong–and it will, eventually– I can start over in minutes.

![just nuke it](/nukeit.jpg) 

If you use Vagrant for your VMs and need to start over, it’s this easy:


```bash
vagrant destroy
```


Go to the directory from which you `vagrant up && vagrant ssh` (not inside your VM) and enter `vagrant destroy`. You’ll be prompted like so just in case:

![vagrant destroy](/vagrantdestroy1.png)

The ‘default’ machine is local to that directory, so if I had another box somewhere, I could `cd` to it’s directory and destroy it too. I think I will.

![vagrant destroy](/vagrantdestroy2.png)

Next time I `vagrant up && vagrant ssh`, a new box will load according to my original init, clean as a whistle. Let’s just hope I’m forgiven for my crimes in the robot uprising.
