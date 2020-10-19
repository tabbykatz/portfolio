---
title: "Hard and Symbolic Links in the Shell"
date: "2020-02-03"
og:
  description: "A technical blog for Holberton."
  image: "/avatar.jpg"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_What's the difference?_

---

Many of us have grown up in a world that understands the modern idea of ‘links’. We use what we used to call hyperlinks, we share links to websites with friends. “Link me”, a friend will say, replying to a text extolling the virtues of a particular venue or service. Links connect things. It was true when they literally referred to loops of metal chain, and it’s true within the environment of the a Unix shell.
<br><br>
There are two kinds of links in the shell, as my title suggests. A link is either hard or symbolic.

# Hard Links

At first glance, hard links appear simple enough. According to Wikipedia, “a hard link is a directory entry that associates a name with a file on a file system.” We are tempted to think a hard link is only the file’s name- linking the file to it’s contents. While that is true, it isn’t the whole story. Within one file structure, there can be multiple hard-linked files, each pointing to the same content. If one of the hard links is erased, the others remain. Each link owns the data it represents and preserves it, effectively containing the data.

# Symbolic Links

Symbolic links are more like the hyperlinks we are used to. They point to the location of the data they link to but don’t actually contain it, and if that data is moved or destroyed the link is ‘dead’ or ‘broken’. Who isn’t familiar with a broken link? Also akin to web links, symbolic links can cross file systems.

# Linking in the Shell

Hard links are made in the command line with the command ln. The syntax is `ln [OPTION]… [-T] TARGET LINK_NAME`. This means we call the ln command, followed by options, and then the target we are linking to followed by the name of the link.


```js
ln target linkname
```
Symbolic links are made with the same command, ln. This time we will use the -s option.

```js
ln -s target linkname
```

# Many Uses

Hard and Symbolic links are relied upon in many ways within shell programming. The end user will probably use symbolic links more often, but the system relies on hard links to save space and function faster.

