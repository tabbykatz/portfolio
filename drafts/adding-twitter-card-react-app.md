---
title: "Putting a Twitter Card into a React app"
date: "2020-10-29"
og:
  description: "You can control how your website looks when it's shared on twitter!"
  image: "/twitter-card.png"
author:
  twitter: "tabby__katz"
 name: "Tabitha O'Melay"
---

_you can control how your website looks when it's shared on Twitter!_

Twitter Cards have been around for a long time, but perhaps you aren't sure how to add them to a React app. Here's how to do it:

# Twitter Cards
Head over to [developer.twitter](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards) and read about the styles you can choose. Sample code is in the articles. Once you have a style picked out, snag the code and return to your terminal. From the root folder of your build:

`vim pages/_app.js`

Add the meta tags below any others you might already have in place, within the `<Head>` tags. Of course, you'll need to change the sample code to reflect your information, and don't forget to change the closing tags to comply with JSX. (`<tag> -> <tag />` Here's my code, for example:

```js
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@tabby__katz" />
<meta name="twitter:creator" content="@tabby__katz" />
<meta name="twitter:title" content="Tabitha O'Melay: Software Engineer" />
<meta name="twitter:description" content="I'm a Full Stack Software Engineer entering my second year at Holberton School, specializing in Web Stack. Over the past year I have build a foundation in computer science concepts, C, Python, and algorithmic problem-solving." />
<meta name="twitter:image" content="https://www.tabbykatz.com/bridge.jpg" />
```

# Testing it out

It's difficult to preview the card without deploying it, but there are solutions depending on your site. This blog is continuously deployed with [Vercel](https://vercel.com), which allows me to have a dev deploy from another Github branch and use `main` for live deployment. Once you have it somewhere live, though, you can [validate it](https://cards-dev.twitter.com/validator) before sharing. 

![Preview of Twitter Card](https://www.tabbykatz.com/twitter-card.png)


# SEO
I go back and forth about it, but the fact is that if you have an online presence you should protect it even if you don't feel like optimizing for the most traffic. I've made it a goal to change one thing a week in this regard, whether it's claiming a 'FirstLast' account on a social media platform I don't frequent or updating my profiles to accurately reflect my current skills. 


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTM4MTM0NjQxOCw1MTE0MjY3MTJdfQ==
-->