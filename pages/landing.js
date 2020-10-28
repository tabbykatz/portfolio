import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import dynamic from 'next/dynamic'
import Layout from '../components/Layout'
import Icon from '../components/Icon'
import simpleIcons from 'simple-icons'
import { BUILD } from '../constants/Build'

const theme = Layout.theme;

function landingPage() {

  return (
    <>
      <Layout Landing>
      <div className="landing">
      <div className="tooltip-wrap">
     <img className="landing-pics" src="/homepage.png" />
      <div className="tooltip-content">
    <p>Want to see more? Click "SEE THE PROJECT" above!</p>
      </div>
      </div>
      </div>
          <div className="about-intro">
            <Row>
              <Col md={12}>
	  <div className="about-intro">
               When I decided to build a professional portfolio site, I set the bar pretty low. I imagined html, css, maybe some javascript. I even worked with those for almost a week before I realized that while a basic static site would meet my user stories, it wasn't sparking joy for me. I had left off one of the most important user stories for a portfolio site: mine. So I shifted gears.<br /><br />
I found myself making a React app for the very first time. I still have much to learn about React and Next.js, of course, but this project has sealed my love of both.</div>
              </Col>
            </Row>

      <div id='features'>
<h1 className = "landing">Features</h1>
<div className="about-intro">
The repository for this site has no .html files. All of the visible 'pages' are rendered serverside, and the blog/portfolio content is brought in from Markdown. I love Markdown and publishing my blog from .md files was a feature I built this site around. I also found other features I wanted to incorporate along the way, resulting in a product that exceeds my MVP specification.
  <h2 className = "landing">Close-up on 3 Key Features:</h2>
  <ul>
      <li><h3>React blog engine using gray-matter and react-markdown to lift entries from .md files</h3></li>
      React-markdown is a library that provides the React component to render the Markdown markup. Gray-matter creates objects from a string or file. These two packages, within my Next build, transform Markdown files into Objects to render them along dynamic routes according to my slug template. A full explanation of this engine will have to wait for a blog post, but here's a glimpse of gray-matter in action:
      <br /><br />
       <img className="gif" src="/md-blog1.png" />
      <br />
      Raw markdown blog post showing the data I want to be captured by gray-matter: title, date, etc.
      <br /><br /> 
       <img className="gif" src="/md-blog2.png" />
      <br />
      A portion of my [slug].js illustrating the data, or frontmatter, captured by gray-matter.
      <br /><br />
       <img className="gif" src="/md-blog3.png" />
       <br />
      A view of the blog posts listed on the home page. The date portion of my frontmatter serves both as a visual guide for the user and a sorting method.
       <br /><br />
       <img className="gif" src="/md-blog4.png" />   
       <br />
      The rendered post utilizes other pieces of frontmatter data, and pulls my current Twitter avatar as an author photo. 
      <br /><br />
       <li><h3>Persistent Light & Dark mode with a simple click</h3></li> 
     Who doesn't love dark mode? I've implemented js and css that enables the switch with a single click that persists across pages. Give it a try in the top right corner!
      <br /><br />
      <img className="gif" src="/light-dark.gif" />
      <br /><br />
      useEffect() and useState() are powerful React Hooks which enable this feature.
      <br /><br />
       <li><h3>Enhanced codeblocks from Markdown with syntax highlighting</h3></li>
     Markdown supports code snippets and blocks, but what if we could make them better? Two packages, react-syntax-highlighter and react-copy-to-clipboard add functionality to my blog and portfolio entries. I can choose my syntax highlighting style at the time of writing, and users can copy to their clipboard with a single click. 
      <br /><br />
      <img className="gif" src="/enhanced-code.gif" />
      <br /><br />
 </ul>
      </div>
      </div>
      <div id='about'>
<h1 className="landing">About Tabitha</h1>
      <div className="about-intro">
I'm a Full Stack Software Engineer entering my second year at Holberton School, specializing in Web Stack. Over the past year I have build a foundation in computer science concepts, C, Python, and algorithmic problem-solving. 
      <br /> <br />
I have been inspired by the portfolio sites of peers and mentors and often wished I had my own, so when the time came to choose a capstone project for Foundations at <a href="https://www.holbertonschool.com/"target="_blank">Holberton School</a> I transformed that wish into a goal with a timeline. This website is the product.
       <br /> <br />
I was well on my way to a static HTML website when I took a detour and tried my hand at a React blog engine. It was my first time with React and I was shocked by how approachable I found it. I kept working on my HTML, but I couldn't let it go. It felt wrong to tack the blog engine onto what I was building, so eventually I scrapped it all and started over, this time with Next.js/React from the start.  
      <br /> <br />
Because I chose a personal project, I worked solo. I utilized tutorials, countless 'googles', forums, Twitter, and the good old docs to solve problems as I came up against them. I encountered many issues that required I make executive decisions in order to meet my deadline. I am extremely pleased with the result and still have work to do– that's a splendid feeling. 
       <br /><br />
You can view <a href="https://github.com/tabbykatz/portfolio" target="_blank">this website</a> or my <a href="https://github.com/tabbykatz" target="_blank">profile</a> on GitHub.
      <br /><br />
Find me on <a href="https://www.linkedin.com/in/tabbykatz/" target="_blank">LinkedIn</a>.
      <br /><br />
Follow me on <a href="https://twitter.com/tabby__katz" target="_blank">Twitter</a>.
      <br /><br />

      </div>
      </div>
      <div id="shout">
< h1 className="landing">Shoutouts</h1>
   What a journey this first solo project has been. 
<br /><br />
   I could not have done it without the support of Cohort 11, our TA Ben Keener, resident SWE Kristen Loyd, and many other peers and mentors from Holberton.❤
<br /><br />
   Special thanks to <a href="https://github.com/arthurdamm" target="_blank">Arthur Damm</a> for believing in me.
<br /><br />
      </div>

			<br /><br /> 
This project was built with:
            <Row style={{ marginTop: 30 }} className="data-icon">
              {BUILD.map(s => (
                <Col md={2} xs={4} key={s} style={{ className: "data-icon", textAlign: 'center', marginBottom: 40 }}>
                  <Icon type={s} data="icon.svg"/>
                  <div className="stack-name">{s}</div>
                </Col>
              ))}
            </Row>
          </div>
      </Layout>
    </>
  )
}

export default landingPage
