---
title: "Golden Tickets"
date: "2021-04-15"
og:
  description: "A python thing-doer."
  image: "/goldenticket.png"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_Some words about my work on a productivity tool in python_

![I've Got a Golden Ticket!](/goldenticket.png)


# What is it?

With COVID and the lockdown, my intense life as a mom, and all the rest I've
been struggling to carve out time to continue working on my portfolio and
skills as a programmer. I have a short list of ideas and one of them, suggested
by a friend, is this productivity tool (hereafter referred to as Golden Tickets).


Golden Tickets analyzes your productive coding time based on Github activity and determines best days and times to create Google calendar
events reminding you to work on assigned Github Issues. The calendar is created
and maintained for you by the program, blocking out time for important tasks, and the events contain all the
information you need about the Issue you should be working on.


# Writing the code

I started with Google's very own Quickstart from the docs, learning about the
Google Calendar API and making it do my bidding. The docs and the API are
pleasant to work with and didn't present much of a challenge. 


Github's API scores lower on the pleasantness-scale, but not a hardship
overall. 


Like so many projects, this one grew into a beast before I finally tamed it. I
wanted to determine linked hours-of-the-day and days-of-the-week, which I
decided to call Golden Hours (maybe I should quit software and get a job naming things...), but the little decisions added up. What sort of Github activity qualified for productive coding? Should I give the user choices about which repos to analyze or should it be global? Why did I call this thing Golden Tickets if they're being assigned "Issues"? 


Other problems I tackled come to mind: what if the user already has a calendar
called 'Golden Tickets'? What about event duplication? What if the user doesn't like
one of the events and deletes it, will that Issue be rescheduled, or will it be
overlooked? 


I realize I've only asked questions here, but when it comes down to it I
answered these for myself and for the time being because I felt it needed time
to bake in order to know how to tweak it. So I have been using it myself as
I build, and learning things about how it works (and doesn't...) through day to day use.

# Why?

I wanted to build something as evidence I can look at large and unfamiliar
codebases and make them play nice. I feel like this project, still very much a
work in progress, has taught me over 9000 of that skillset. I love python and
will miss it, but I've reached a point with Golden Tickets where I need to move
on for a bit and focus on other parts of my resume.

# What's next for Golden Tickets?

I plant to push the code to a public repo and use the tool myself to remind me
to write here and work on other projects. A flask app for it is still in a
fetal position on my machine, and I expect there to come a time when I deploy
it. That time just isn't now. 

# What's next for me?

Remember I said I had a short list? I meant it. There's only one other item on
my list: An online async app for a beloved card game, Glory to Rome. Maybe
that's next, or maybe I need to bite the bullet and apply to jobs already. My
younger kids are back in school as COVID releases its grip, and I am running
out of excuses. 


Look for a Golden Tickets demo on my portfolio page soon.
