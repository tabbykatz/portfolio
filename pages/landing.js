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
The repository for this site has no .html files. All of the visible 'pages' are redered from javascript, and what's more: the blog and portfolio articles are rendered from Markdown. I love Markdown and writing/ publishing my blog from .md files was a feature I built this site around. I also found other features I wanted to incorporate if I could, resulting in a product that exceeds my MVP specification.
  <h2 className = "landing">Close-up on 3 Key Features:</h2>
  <ul>
      <li>React blog engine using gray-matter and react-markdown to lift entries from .md files</li>
      React-markdown is a library that provides the React component to render the Markdown markup. Gray-matter creates objects from a string or file. These two packages together transform Markdown files into Objects and renders them as pages according to my slug template.
       <li>Persistent Light & Dark mode with a simple click</li> 
     Who doesn't love dark mode? I've implemented js and css that enables the switch with a single click that persists across pages.
      <br /><br />
      <img className="gif" src="/light-dark.gif" />
      <br /><br />
       <li>Enhanced codeblocks from Markdown with syntax highlighting</li>
     Markdown supports code snippets and blocks, but what if we could make them better? Two packages, react-syntax-highlighter and react-copy-to-clipboard add functionality to my blog and protfolio entries. I can choose my syntax highlighting style at the time of writing, and users can copy to their clipboard with a single click. 
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
      </div>
      </div>
      <div id="shout">
< h1 className="landing">Shoutouts</h1>
   What a journey this first solo project has been. 
<br /><br />
   I could not have done it without the support of Cohort 11, our TA Ben Keener, resident SWE Kristen Loyd, and many other peers and mentors from Holberton.
<br /><br />
   Special thanks to <a href="https://github.com/arthurdamm">Arthur Damm</a> for believing in me.
<br /><br />
   I also want to put in a plug for dev twitter- the best twitter community by far.
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
