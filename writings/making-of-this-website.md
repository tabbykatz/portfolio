---
title: "The Making of this Site"
date: "2020-11-03"
og:
  description: "I wanted a portfolio site to publish my writing and showcase my
  work. This is that site."
  image: "/bridge.jpg"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_I have been inspired by the portfolio sites of peers and mentors and often wished I had my own, so when the time came to choose a capstone project for Foundations at Holberton School I transformed that wish into a goal with a timeline. This website is the product._

![snapshot of homepage](/homepage.png)

# Purpose and Product

Who is a portfolio site "for"? I asked myself that question from the start of this project, as I created User Stories and designed the flow of the site. My initial MVP spec was my very first as a dev, and it fell quite short. Yes, this site is for recruiters and managers, people looking to hire me. Yes, this site is for peers in the industry so that they might recommend me or ask questions. Still, I forgot about one very important User Story: mine. 

My User Story might be the most important one. It would not do to have a portfolio showcase that I was not personally proud of, that I could not easily add to, or that simply didn't make me happy to use. I was a week into this build when I had that realization, and switching gears to meet this User Story was a great decision.

The focus of this project was one of personal growth. I had no experience with React, Next, or Vercel. I had limited experience in even vanilla Javascript. What I did have was an immediate affinity for React, and a strong desire to dissect it and make it do beautiful things for me. While ultimately I wanted to meet my MVP+ by deadline, I did not want to sacrifice my User Story just to "get it done". I am well pleased with my results.

Working solo on a timeline designed for teams was a challenge, but it also gave me freedom. I alone made the decisions for this design, and I allowed myself to explore rabbit holes when time allowed. I built this website over 3 weeks in October, 2020. As I write, there is still much to improve, and I find myself excited for what's next. 

# Who am I?

Building a professional web presence begs another question, "Who am I?" Or perhaps better put, "Who do I want to be?"

I am graduating this week from a year-long Software Engineering intensive, so I am a Software Engineer. It feels strange to type that. The truth is, I never expected to make it this far. Not that I found the work too challenging, but when I embarked on this path I did not imagine the destination, just the journey. Being here, at the end of Foundations, is surreal. I recognize that this was the goal all along, but I am a bit like Charlie Bucket these days.

>Willy Wonka: _“But Charlie, don’t forget what happened to the man who got everything he always wanted.”_
>
>Charlie Bucket: _“What Happened?”_
>
>Willy Wonka: _“He lived happily ever after.”_

I chose Holberton in order to redefine who I am in the world. It was more than fitting, then , to define myself professionally with my capstone project. I wanted fast, beautiful, interesting. I wanted a place to share both my thoughts and my work– a build with great bones and lovely features. I believe I have succeeded.

# Choices & Features

The repository for this site has no .html files, and the blog/portfolio content is brought in from Markdown. I love Markdown and publishing my blog from .md files was a feature I built this site around. I also found other features I wanted to incorporate along the way, resulting in a product that exceeds my MVP specification.

React and Next.js were choices that flowed from a tutorial I played with as a side project. Deployment with Vercel was a leap I made when Heroku and Netlify were both unresponsive to my questions. Vercel *is* Next.js, and has excellent customer support.

![how it works](/next_export.png)

## Close-up on 3 Key Features:
### React blog engine using gray-matter and react-markdown to lift entries from .md files

React-markdown is a library that provides the React component to render the Markdown markup. Gray-matter creates objects from a string or file. These two packages, within my Next build, transform Markdown files into Objects to render them along dynamic routes according to my slug template.

### Persistent Light & Dark mode with a simple click

Who doesn't love dark mode? I've implemented Javascript and CSS that enables the switch with a single click that persists across pages. Give it a try in the top right corner! As a dark mode fan myself, I love how this feature puts the user first. 

`useEffect()` and `useState()` are powerful React Hooks which enable this feature, along with `localStorage`. Future improvements might include a Redux store to simplify the code involved. 

![light and dark mode in action](/light-dark.gif)

### Enhanced codeblocks from Markdown with syntax highlighting

Markdown supports code snippets and blocks, but what if we could make them better? Two packages, `react-syntax-highlighter` and `react-copy-to-clipboard` add functionality to my blog and portfolio entries. I can choose my syntax highlighting style at the time of writing, and users can copy to their clipboard with a single click. Since I write technical articles frequently, this feature was high priority.

![enhanced codeblocks](/enhanced-code.gif)

# Deployment 

As I mentioned earlier, I chose Vercel to continuously deploy my site, and I am very happy with the results. While such a site with a single team member (me) is an almost laughable under-use of the power Vercel offers, it has given me a glimpse into modern deployment methods. 

![continuous deploy from github with vercel](/vercel.gif)

Vercel allows me to deploy whenever I push to `main`, and can also reserve branches for soft or development deploy as needed to view live changes. Would  you like to see it yourself? Check out the [Deployment section in the README](https://github.com/tabbykatz/portfolio/#deployment).

# Challenges

This project was not without its challenges, and even left me with one or two I could not surmount before deadline. Perhaps the greatest of these was setting up loaders in the `next.config.js` file. 

I needed raw loading for the Markdown blog feature, but no amount of research enabled me to also add `.svg` loading without breaking the blog. This problem ultimately led me to post my first question ever on Stack Overflow, which remains unanswered. I am half convinced no one know how to nest these configurations properly, but luckily there is a solution.

Another result of this challenge was my attendance at the first Next.js web conference, where Next.js 10 was revealed. The new Next.js solves almost all of my configuration issues. You can read more about that on the [Next.js Blog](https://nextjs.org/blog/next-10). 

<iframe width="560" height="315" src="https://www.youtube.com/embed/1-NzQ9ObsfM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

While I will be migrating to Next.js 10 this winter, the takeaway from this is that even unsolved challenges can lead to growth. I did more research on this topic than any other, reached out online in many new ways, and ultimately attended a conference with tens of thousands of peers– all because of my config file. 

This challenge was the single greatest point of growth during my Portfolio Project. 

# What have I learned?
I think it's clear that building this site was a huge step up for me technically and personally. I cannot wait to use React again and I feel more confident than ever before. The real lessons, though, are broader than any one framework:

##  Don't be afraid of new technologies.
I know I have the resources to learn new things, and the only thing that can keep me from understanding is my own fear of jumping in.  I was afraid to learn a whole new framework, but nothing is scarier than C and as Holberton students, that foundation is one of our superpowers.

## Use things and break them
Don’t be afraid to make mistakes. You can learn more from dissection, repair, and the eventual 'ask for help' than any tutorial.



## CSS is like Schrodinger’s cat
Both awesome and not awesome at the same time. Awesome: there's really no end to the possibilities. Not Awesome: there's really no end to the possibilities. 

Sure, I am not the first to make a dig at CSS, but I believe this is important to mention because growth as an engineer is not always the result of winning. I struggled with CSS and found I was my own worst enemy at times. If I had it to do over I would make many changes. The good news is, I can do it over, and I will carry the lessons I have learned along the way. 

# Foundation: Built

I graduate from Foundations this Friday, having built a strong foundation as an engineer. This project and the resulting website are also a foundation that I hope to build upon during my Specializations year. From the initial proposal to the finished product, I feel I have leveled up. Here's to many more levels!

#  Who am I?  part 2
I'm a Full Stack Software Engineer entering my second year at Holberton School, specializing in Web Stack. Over the past year I have build a foundation in computer science concepts, C, Python, and algorithmic problem-solving.

Would you like to learn more about this project? Check out:

* [The GitHub repository](https://github.com/tabbykatz/portfolio/)
* [The Landing Page](https://www.tabitha.tech/landing)

Or contact me through [LinkedIn](https://www.linkedin.com/in/tabbykatz/) or my [website](https://www.tabitha.tech/). 

