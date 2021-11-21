---
title: "hbnb"
date: "2020-09-30"
og:
  description: "A multi-stage AirBnB clone for Holberton School."
  image: "/hbnb.png"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_This set of projects spanned two trimesters of Foundations at Holberton School._

![Logo of 'hbnb', our AirBnB clone](/hbnb.png)

# Attack of the Clone

The hbnb project arc began with teams coding a console with which to interact with our initial file storage system. By the end, we had switched teams and code bases four times as well as developed features solo which we deployed on our own set of servers complete with load-balancing, monitoring, and SSL certificates. I learned to configure a primary-replica database between servers, write puppet manifests to bring new servers up to specification, and serve Python with [Gunicorn](https://docs.gunicorn.org/en/stable/).

# The complete package

This was my first full-stack (Linux Apache MySQL Python) application as well as my introduction to SQL and Flask.

- A command interpreter to manipulate data without a visual interface, like in a Shell (perfect for development and debugging)
- A website (the front-end) that shows the final product to the world: static and dynamic
- A database (mySQL) to persist data
- A REST-ful API that provides a communication interface between the front-end and this data (create, retrieve, update, delete)

# I'm especially proud of:

- SSL certificates for my servers! Yay, [letsencrypt](https://letsencrypt.org/) and [certbot](https://certbot.eff.org/)!
- Learning to quickly rebuild the complex environment I needed for this project multiple times from scratch when Vagrant and VirtualBox incompatibilities were encountered. Yay, [venv](https://docs.python.org/3/library/venv.html) and [puppet](https://puppet.com/)!

# Problems I encountered:

- Server death. Configuring firewalls and ssh keys were both new to me, and I learned the hard way how important the details are. You can read all about it in my [Postmortem](https://www.tabbykatz.com/writings/postmortem), where I laugh to keep from crying.
- Switching code bases. This was a defining moment for me as a developer. I learned to dive in and understand foreign code as well as to write my code with the next person in mind.

# Source Code:

- [GitHub](https://github.com/tabbykatz/AirBnB_clone_v4)
