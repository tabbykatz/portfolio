---
title: "Week 6"
date: "2021-08-20"
og:
  description: "Week 6 is in the books."
  image: "/bridge.jpg"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

# Week 6

This was a beast of a week. I am discovering that my current systems need tweaking. I use a pomodoro timer but I don't stick to it as rigidly as I need to, particularly breaks. I am missing meals some days, working too long on some things, not leaving enough time for others. I don't use down time effectively, as evidenced by this creation:

![image of gitfiti](/vimcent.jpg)

Vim forever! That took me 20-30 minutes on a day where I also skipped two meals and didn't work out. Priorities much? Well, it was worth it! But it is also a sign I need to devote some energy to my time management systems.

## Work

This week at Techtonica was all about SQL (specifically, postgres). I find the way tables print to the terminal freaking adorable and can never get enough SQL practice. I also worked in Express, though I admit I've developed a wee distaste for all the wacky ways people use it, and I look forward to finding my own happy place in that regard. 

I have been playing around with Miro whenever a task offers me an excuse to. Still clumsy but learning.

### CS50

Still working slowly through the early weeks of CS50. Here's a snippet:
```C
#include <ctype.h>
#include <cs50.h>
#include <stdio.h>
#include <string.h>

int compute_score(string word)
{
  // Compute SCRABBLE score for a given word
    int i;
    int score = 0;
    // iterating through letters in word
    for (i = 0; word[i] != '\0'; i++)
    {
        //check that the current char is a letter
        if (isalpha(word[i]))
        {
            // switch cases for current char as lowercase
            switch (tolower(word[i]))
            {
                case 'a':
                case 'e':
                case 'i':
                case 'l':
                case 'n':
                case 'o':
                case 'r':
                case 's':
                case 't':
                case 'u':
                    score += 1;
                    break;
                case 'b':
                case 'c':
                case 'm':
                case 'p':
                    score += 3;
                    break;
                case 'd':
                case 'g':
                    score += 2;
                    break;
                case 'f':
                case 'h':
                case 'v':
                case 'w':
                case 'y':
                    score += 4;
                    break;
                case 'j':
                case 'x':
                    score += 8;
                    break;
                case 'k':
                    score += 5;
                    break;
                case 'q':
                case 'z':
                    score += 10;
                    break;
                default:
                    score += 0;
                    break;
            }
        }
        continue;
    }
    return score;
}
```
CS50 gives you the keys to the kingdom with their custom library `<cs50.h>`, but they make up for that in devilishly difficult problem sets. The above was just a warmup, my next problem has me returning the grade level of a text passage based on the Coleman-Liau index.

## Mentors Rule

Speaking of Miro, the inspiration to learn it comes in large part from my mentor. I had tried Miro for group whiteboarding at the start of covid and did not enjoy, but to be fair I didn't give it much of a shot. K's work on Miro changed my mind about the platform instantly. 

A highlight of mentoring time this week was an exploration of the event loop, call stack, and job queue in JavaScript. This sort of thing sparks all the joy for me.

## Interesting finds

New section! I need a place to share the articles and links that thrilled me this week, and this is that place. Here goes:
- [What is Code? by Paul Ford](https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/)
- [No Silver Bullet by F. Brooks](http://worrydream.com/refs/Brooks-NoSilverBullet.pdf)
- [Halt and Catch Fire](https://en.wikipedia.org/wiki/Halt_and_Catch_Fire_(TV_series))

## Reading

I did a thing I should not do but somehow end up doing from time to time. I bought 3 new books and read one of them, start to finish, without even putting it in my book queue. It was Mastery by George Leonard and in my defense it was hardly a book, I read it in an afternoon. The remaining two books have gone tidily to the bottom of the queue.

```js
const bookList = [
`grokking algorithms`,
`Redshirts`,
`Domain Driven Design`,
`The Javascript Way`,
`Polysecure`,
`Modern JavaScript for the Impatient`,
`Crucial Conversations`,
`Attack Surface`,
`FLOW (re-read)`,
`A Mind for Numbers`,
`So Good They Can't Ignore You`
];
```
