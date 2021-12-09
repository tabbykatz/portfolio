---
title: "Game Night"
date: "2021-11-18"
og:
  description: "A React app for board game enthusiasts."
  image: "/meeple.png"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_My capstone project for my training with Techtonica_

# 💡 Concept

An app for board game enthusiasts to plan and join in-person events.

As the final project of my React training, I was to build a full stack app with React, Node, Express, and PostgreSQL. After I came across the Board Game Atlas api, my mentor Kevin suggested the app as a possible candidate for my final project and it sounded compelling enough to me. My years of planning & hosting board game events really came in handy during the process. I had only a week to plan the app. The MVP is essentially aligned with that early vision– with a lot of room to grow. Time was an issue alongside the sheer amount of learning I had to do to make my ideas come to life.

During the planning week, I attempted to lay out the flow of the app and develop the schema I would need to support that. I had a little bit of fun with my style guide:
![screenshot of styleguide](/styleguide.png)
[See the entire style guide on Miro](https://miro.com/app/board/o9J_lqw9zwA=/)

# ⚛️ Building the app

George Song, another of my mentors, built the template this app rests upon and gave me constant technical support in understanding, using, and modifying it. 🧑🏻‍🏫 🙏🏽

[express-react-project-starter](https://github.com/gsong/express-react-project-starter)

After building the dashboard and other React routes, I slowly moved the sample data further from the front end and into the database. I had to rethink my models several times, resulting in many iterations of the schema. I was surprised by the complexity of building what had seemed such a simple app.

# 😊 I'm especially proud of:

- Deploying early & often

  Setting up CI from GitHub!

- Context

  I leveled up with React again and again during this project, from my first custom Hook to understanding my own Context Provider.

- Making a mess

  Why would I be proud of this? Letting go of perfect to make it work is a great way to learn. I had to get messy in the end to meet my deadline and the ease with which I did so showed me how much I'd learned.

# 🥲 Problems I encountered:

- Too much or not enough?

  So much information needed, much of it similarly shaped... At the point that the app needs to know virtually everything all at once, I felt like there had to be a better way.

- Postgresql

  I left many issues in my pg-promise calls, honestly due to a lack of understanding. If you play with the app long enough, you'll see the issues I left unfixed.

- Auth0

  The biggest issue I left is only visible if you sign up with the same email twice, such as is possible with Google and GitHub, before you play with the app. Auth0 has an option to unify accounts but I did not have time to implement it.

# 👁 Site & Source Code:

- [Heroku App](https://gameknightapp.herokuapp.com/)
- [GitHub Repo](https://github.com/tabbykatz/game-night)
