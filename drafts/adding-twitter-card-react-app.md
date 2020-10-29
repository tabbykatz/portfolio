---
title: "How to Use Markdown With This Blog Engine"
date: "2020-10-21"
og:
  description: "A basic guide to writing Markdown that renders well in this
  engine."
  image: "/md-example.png"
author:
  twitter: "tabby__katz"
 name: "Tabitha O'Melay"
---

_you can control how your website looks when it's shared on twitter!_

Twitter Cards have been around for a long time, but perhaps you (like me) aren't sure how to add them to a React app. Here's how to do it:

# Twitter Cards
Head over to [developer.twitter](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards) and read about the styles you can choose. Sample code is in the articles. Once you have a style picked out, snag the code and return to your terminal. From the root folder of your build:

```bash
vim pages/_app.js
```
The main changes you'll need to make are your information, but don't forget to change the closing tags to comply with JSX. Here's my card, for example:
https://cards-dev.twitter.com/validator
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIyMjYyODcwMV19
-->