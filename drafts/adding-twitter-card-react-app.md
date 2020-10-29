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

Add the meta tags below any others you might already have in place, or within the `<Head>` tags. Of course, you'll need to change the sample code to reflect your information, and don't forget to change the closing tags to comply with JSX. (`<tag> -> <tag />` Here's my code, for example:

```js
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@tabby__katz" />
<meta name="twitter:creator" content="@tabby__katz" />
<meta name="twitter:title" content="Tabitha O'Melay: Software Engineer" />
<meta name="twitter:description" content="I'm a Full Stack Software Engineer entering my second year at Holberton School, specializing in Web Stack. Over the past year I have build a foundation in computer science concepts, C, Python, and algorithmic problem-solving." />
<meta name="twitter:image" content="https://www.tabbykatz.com/bridge.jpg" />
```

# Testing it out

It's difficult to preview the card without deploying it, but there are solutions depending on your site. This blog is continuously deplo

https://cards-dev.twitter.com/validator
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjc0NDY0NjE4XX0=
-->