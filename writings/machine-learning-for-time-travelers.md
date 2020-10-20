---
title: "Machine Learning for Time Travelers"
date: "2020-07-05"
og:
  description: "A technical blog entry for Holberton."
  image: "/wolf.jpg"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_Grandma, what big eyes you have!_


My grandmother is 84 years old. She was born in 1935 and has lived through what are arguably the most interesting changes in our human civilization. In a sense, people of her generation are time travelers.


Grandma is a smart lady, but I strongly doubt she knows what Machine Learning is, and in this article I'll attempt to explain it so that someone of her generation and background can both understand it and get why it's a goal and area of study in our modern world.


My grandmother is a reader and has probably at least read about Artificial Intelligence whether in the news or in a science fiction novel. My own understanding of AI comes from such: the concept of computer beings smarter than us, or at least as smart. Maybe machines that can feel or emulate emotions. Perhaps The Terminator. But machine learning has moved from fiction to reality in my lifetime.


The term machine learning was coined in 1959 by Arthur Samuel, an American pioneer in the field of computer gaming and artificial intelligence. The question has been, and remains, "Can machines think?" First we have to agree upon what we mean by thinking. Computers "make decisions" all of the time, but thinking–and learning–are different. If we tell a computer program how to add numbers, it can add them for us. But can a computer learn from information we give it so that it can make new decisions, or "think" about the information and come up with new ideas? This is a part of the concept of machine learning.


Mr. Samuel developed his ideas into a programmatic game of checkers. When humans play such a game, we make choices about our moves based on assumptions about our opponent's choices and the state of the board. Samuel's program emulated this with a decision tree, assigning value to moves based upon how they left the board state. But humans don't always make the best or most predictable choices, and this isn't something easy programmed into a game.


![A decision tree for a game of checkers](/machinelearning.png)

The above image shows 4 moves of checkers and their advantage value. You or I may not realize it, but we do much the same thing when we play a game. We think about the possible moves and the position they will put us in further down the line. But as impressive as a computer winning a game of checkers might be, this is "rote" learning- there is nothing "imaginative" or "intelligent" about it.


Reinforcement learning is another way to "teach" concepts to programs. This looks very much like teaching a language, such as with the language teaching program Rosetta Stone. If you were the machine and I wanted to reinforce your ability to make decisions, I could show you a picture of an apple and tell you it's an apple. At first, you might not have enough information from one picture to always discern an apple from other images, but if I gave you more images, context, and information, you might become quite good at it.


A computer program doesn't make leaps of faith like you or I. It is still assigning value to the "guesses" it makes, and it relies on percentages and probability that we program into it. Eventually, a program can learn that when we show it the picture above, it's an apple. If we give the program more pictures of apples, along with pictures of things that are not apples, we can "teach" it to discern.


The Rosetta Stone program does this for you, too, when you use it to learn language. At first it might rely on just the one recognizable picture of an apple. Eventually, it switches to supervised learning methods and offers an apple of a different variety. You can infer that it is still an apple. Computer programs can learn in the same way.


The algorithms commonly used in machine learning are often grouped by learning style. We talked about supervised learning, but more recently unsupervised learning has been used with success on very large sets of data. In general terms, programs are given a lot of distinct information without much guidance. The early decisions the program makes on say, how to sort this data, guide it's future actions. But usually some combination of supervision or semi-supervision is needed for good outcomes.


Another exciting example of machine learning are neural networks, or neural nets. This is an older idea that has gained traction again recently. The concept is modeled loosely after the human brain, and relies on layers of decision making. A neural net might be made up of thousands or even millions of processing nodes, all connected. Most often, they are what is called "feed-forward," meaning that data moves through them in only one direction. Complex layers of decision making can make better - and faster - decisions. Along with back propagation, a method by which these systems correct mistakes, neural nets can become powerful and reliable. You can play with one right here. Because this area of study and growth is so popular right now, there are many resources designed to help laypeople understand it. (and hopefully embrace it?) Neural net examples can be used to make art, music, and even written works, often with humorous an interesting results.


In this age of information, we have both powerful computers and a *lot* of data to give them. The fields of AI, machine learning, and data mining explore the possibilities that offers: solving problems, making decisions, and "thinking" about the massive amount of information we can collect. If this sounds scary, it should: Information bias is a real problem, just like it can be for humans. And the collection of data - say about your shopping trends - is always a hot topic.


If you've ever seen ads later for something you've Googled or if you have a smartphone that has suggested a route to you because you usually drive to work at a certain time, that's machine learning. But it isn't just used for advertisement and convenience.


Machine learning is increasingly playing a role in the field of medicine. Algorithms can detect anomalies in medical images and diagnostic data sets, as well as in the development of medication.


Another common use of machine learning is more ethically ambiguous. Image recognition - not unlike the apple example before - is used for everything from tagging friends in photos on Facebook to law enforcement and surveillance. Voice recognition, too, has been developed and used for years. And these are no longer "high tech" concepts from spy films. You experience voice recognition when you use Siri, Alexa, or other personal assistant devices. Knowingly or unknowingly, you participate in the development of these fields when you engage with fun social media apps or quizzes.


It is certain that these fields are developing faster than we can keep up with them, especially when it comes to ethics. We haven't always had laws that control how data can be used, and now it can be used in previously unimaginable ways. Ethical concerns abound. (Ethics of artificial intelligence) Self driving cars are a prominent example: should a car spare the driver or the pedestrian? Who makes that decision? How world governments use machine learning is a major concern, even if you don't typically engage in sharing your personal data online. As we grow these fields of study, and especially as we focus on building more and more human-like intelligence into machines, we mustn't neglect what really makes us human.

# A final note

Because my Grandma loves science fiction: Take 40 minutes today to listen to Cory Doctorow's short story, Car Wars. It's freely available as an mp3 (read by the author) [here](http://ia902904.us.archive.org/12/items/CarWars/Car%20Wars.mp3). The story explores some of the issues surrounding machine learning and how it is used to "better" our lives. And if you want more (I hope you will) I recommend Radicalized, also by Doctorow. While this collection of novellas is less about machine learning and more about human freedoms, I think you will find as I have that the two are increasingly interconnected. If you'd like to hear the author's take on AI and machine learning in the real world, check out "Our Neophobic, Conservative AI Overlords Want Everything to Stay the Same."

>Ultimately, machine learning is about finding things that are similar to things the machine learning system can already model. Machine learning systems are good at identifying cars that are similar to the cars they already know about. They're also good at identifying faces that are similar to the faces they know about, which is why faces that are white and male are more reliably recognized by these systems - the systems are trained by the people who made them and the people in their circles.
This is what makes machine learning so toxic. If you ask an ML system to
predict who the police should arrest, it will suggest that they go and arrest
people similar to the ones they've been arresting all along. As the Human
Rights Data Analysis Group's Patrick Ball puts it, "A predictive policing
system doesn't predict crime, it predicts policing." -[Cory Doctorow](https://blog.lareviewofbooks.org/provocations/neophobic-conservative-ai-overlords-want-everything-stay/)
