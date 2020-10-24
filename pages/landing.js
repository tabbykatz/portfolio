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
The repository for this site has no .html files. All of the visible 'pages' are redered from javascript, and what's more: the blog and portfolio articles are rendered from Markdown. I love Markdown and writing/ publishing my blog from .md files was a feature I built this site around. I also found other features I wanted to incorporate if I could, resulting in an MVP with:
  <ul>
      <li>React blog engine using gray-matter to lift entries from .md files</li>
       <li>Persistent Light & Dark mode with a simple click</li> 
       <li>Enhanced codeblocks from Markdown with syntax highlighting</li> 
       <li>Easy-to-update constants, styles, and Layout</li>
       <li>Random intro text for fun & variety</li> 
       <li>Author information pulled & synced from Twitter</li> 
       <li>Blog entries with read-time</li> 
       <li>Continuous deployment from GitHub with Vercel</li> 
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
